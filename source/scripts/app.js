var Beeline = {};

let
	Statname = 0,
	Statemail = 0,
	Statcompany = 0,
	Stattelephone = 0;

Beeline.flag_video = true;
Beeline.flag_play_stop;
Beeline.flag_play1 = false;
Beeline.flag_play2 = false;

Beeline.likeHandler = function() {
	let participantsData = JSON.parse(localStorage.getItem('participantsInfo')) !== null
			? JSON.parse(localStorage.getItem('participantsInfo'))
			: localStorage.setItem('participantsInfo', JSON.stringify([]));

	$(document).delegate('.link-like', 'click', function(e) {
		let userID = +$(this).parents('.wrapp').attr('data-user');
		let $participantLikes = $(this).next();
		let flag = false;

		participantsData.forEach((el, ind) => {
			if (el[userID] !== undefined) {
				flag = true;
			}
		});

		if (!$(this).hasClass('active')) {
			$(this).addClass('active');
			$participantLikes.text(+$participantLikes.text() + 1);

			if (!flag) {
				participantsData.push({ [userID]: 1});
				localStorage.setItem('participantsInfo', JSON.stringify(participantsData));

				$.ajax({
					url: 'http://beeline-contest.grapheme.ru/like',
					method: 'POST',
					data: {
						id: userID
					}
				})
			}
		} else {
			if (flag) {
				participantsData.splice(participantsData.indexOf(userID));
				localStorage.setItem('participantsInfo', JSON.stringify(participantsData));

				$.ajax({
					url: 'http://beeline-contest.grapheme.ru/dislike',
					method: 'POST',
					data: {
						id: userID
					}
				})
			}

			$(this).removeClass('active');
			$participantLikes.text(+$participantLikes.text() - 1)
		}
	})
};

Beeline.participantsWorksGallery = function() {
	const tempObj = {"mostPopular":[],"newest":[{"id":3,"full_name":"","phone":"+7 (916) 951-67-99","social_link":"www.facebook.com\/yulia.chebotar","company_name":"\u0420\u0411\u041a","position":"\u041d\u0430\u0435\u043c\u043d\u044b\u0439 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a","performance":"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0440\u043e \u0441\u0432\u043e\u0439 \u0431\u0438\u0437\u043d\u0435\u0441 \u0438 \u043f\u043e\u0441\u043b\u0435 \u043c\u043e\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u0435\u0441\u044c \u0440\u0430\u0431\u043e\u0442\u043e\u0439 \u0432 \u0441\u043e\u0446\u0441\u0435\u0442\u044f\u0445. \u041a \u043f\u043e\u0441\u0442\u0443 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u044d\u0448\u0442\u0435\u0433 #\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435\u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u0435 #beelinebiz","images":"\/apply\/15024596837484.png","sent_at":"2017-08-11 16:54:43","status":1,"is_active":true,"created_at":"2017-08-11 16:54:43","updated_at":"2017-08-11 16:54:43","first_name":"\u042e\u043b\u0438\u044f","last_name":"\u0427\u0435\u0431\u043e\u0442\u0430\u0440\u044c","more_performance":"\u041a\u0430\u043a\u0438\u0435 \u043d\u0435\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u0438 \u043f\u043e\u0434\u0445\u043e\u0434\u044b \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u0434\u043b\u044f \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u0431\u0438\u0437\u043d\u0435\u0441\u0430?","likes":0},{"id":2,"full_name":"","phone":"+7 (000) 000-00-00","social_link":"www.facebook.com\/123","company_name":"\u0413\u0440\u0430\u0444\u0435\u043c\u0430","position":"\u0414\u0440\u0443\u0433\u043e\u0435","performance":"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0440\u043e \u0441\u0432\u043e\u0439 \u0431\u0438\u0437\u043d\u0435\u0441 \u0438 \u043f\u043e\u0441\u043b\u0435 \u043c\u043e\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u0435\u0441\u044c \u0440\u0430\u0431\u043e\u0442\u043e\u0439 \u0432 \u0441\u043e\u0446\u0441\u0435\u0442\u044f\u0445. \u041a \u043f\u043e\u0441\u0442\u0443 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u044d\u0448\u0442\u0435\u0433 #\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435\u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u0435 #beelinebiz","images":"\/apply\/15024589607819.jpeg","sent_at":"2017-08-11 16:42:40","status":1,"is_active":true,"created_at":"2017-08-11 16:42:40","updated_at":"2017-08-11 16:42:40","first_name":"\u0421\u0435\u0440\u0433\u0435\u0439","last_name":"\u041c\u0438\u0448\u0443\u043a\u043e\u0432","more_performance":"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0440\u043e \u0441\u0432\u043e\u0439 \u0431\u0438\u0437\u043d\u0435\u0441 \u0438 \u043f\u043e\u0441\u043b\u0435 \u043c\u043e\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u0435\u0441\u044c \u0440\u0430\u0431\u043e\u0442\u043e\u0439 \u0432 \u0441\u043e\u0446\u0441\u0435\u0442\u044f\u0445. \u041a \u043f\u043e\u0441\u0442\u0443 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u044d\u0448\u0442\u0435\u0433 #\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435\u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u0435 #beelinebiz","likes":0}]}

	const participants = tempObj.newest;
	const $participantsInterview = $('.slick-slide--contest');

	//entryPoint

	let participantsData = JSON.parse(localStorage.getItem('participantsInfo')) !== null
		? JSON.parse(localStorage.getItem('participantsInfo'))
		: localStorage.setItem('participantsInfo', JSON.stringify([]));

	$.ajax({
		url: 'http://beeline-contest.grapheme.ru/participants',
		method: 'GET',
	}).done(function(data) {
		data.forEach(function(el, ind) {
			console.log(el);

			const $endPointBlock = el.status === 4
				? $('div[participant-tab="1"]').find($('.participants-block-popular--wrapper'))
				: $('div[participant-tab="2"]').find($('.participants-block-popular--wrapper'))

			let flag = false;
			let counter = 1;

			if (participantsData.length > 0) {
				participantsData.forEach((val, index) => {
					if (val[el.id]) {
						flag = true;
					}
				});
			}

			$endPointBlock.append(`
				<div class="participants-popular__work-item participants-popular__work-item--${counter++} ">
					<div class="contest-popular__work-item--image" style="background-color: #393939; background-image: url('${el.images}'); background-position: center center; background-repeat: no-repeat; background-size: cover; width: 247px; height: 208px;"></div>
					<div class="work-item--wrapper" data-tab="${ind++}">
						<div class="work-item__title--name">${el.first_name} ${el.last_name}</div>
						<div class="work-item--regal">${el.position}</div>
						<div class="work-item--link work-item--hidden">Читать</div>
						<div class="work-item--line"></div>
					</div>
				</div>	
			`);

			$participantsInterview.append(`
				<div class="wrapp" data-user="${el.id}">
					<div class="modal-participant-popup__header">
						<div class="modal-participant-popup__header-item--shadow"></div>
					</div>
					<div class="modal-participant-popup__header-item--img">
						<img src="../images/contest/page-1.svg", alt="image-contest"/>
					</div>
					<div class="modal-participant-popup__container">
						<div class="modal-participant-popup__top-line">
							<div class="top-line__image-participant">
								<div class="top-line__image-participant" style="background-image: url('${el.images}'); background-position: center center; background-repeat: no-repeat; background-size: cover; width: 133px; height: 150px;  margin-bottom: -4px;"></div>
							</div>
							<div class="top-line__name-participant">
								<h1>${el.first_name} ${el.last_name}</h1>
								<p class="title-company">${el.company_name}</p>
								<p class="title-job">${el.position}</p>
							</div>
						</div>
						<div class="modal-participant-popup__middle-line">
							<div class="middle-line__main-content">
								<p>${el.performance}</p>
								<h3>Какие нестандартные технологии и подходы вы используете для развития бизнеса?</h3>
								<p>${el.more_performance}</p>
							</div>
						</div>
						<div class="modal-participant-popup__bottom-line">
							<div class="bottom-line__vote-block">
								<h1>Голосовать за участника:</h1>
								<a href="javascript:void(0)" class="link-like ${flag ? 'active': ''}"></a>
								<span class="counter-like">${el.likes}</span>
							</div>
						</div>
					</div>
					<div class="sharing-block sharing-popup">
						<div class="share-icon js-share">
							<a class="share-icon__item share-icon__item--fk fbook" href='https://www.facebook.com/sharer/sharer.php?u=' data-shar='facebook'></a>
							<a class="share-icon__item share-icon__item--vk vkt" href='https://vk.com/share.php?url=' data-shar='vkontakte'></a>
							<a class="share-icon__item share-icon__item--tw twt" href='https://twitter.com/intent/tweet?text=' data-shar='twitter'></a>
						</div>
					</div>
				</div>
			`)
		});

		Beeline.eventContest();
		Beeline.eventParticipants();
		Beeline.share.init();
	});
}

Beeline.participantsWorks = function() {
	const tempObj = {"mostPopular":[],"newest":[{"id":3,"full_name":"","phone":"+7 (916) 951-67-99","social_link":"www.facebook.com\/yulia.chebotar","company_name":"\u0420\u0411\u041a","position":"\u041d\u0430\u0435\u043c\u043d\u044b\u0439 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a","performance":"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0440\u043e \u0441\u0432\u043e\u0439 \u0431\u0438\u0437\u043d\u0435\u0441 \u0438 \u043f\u043e\u0441\u043b\u0435 \u043c\u043e\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u0435\u0441\u044c \u0440\u0430\u0431\u043e\u0442\u043e\u0439 \u0432 \u0441\u043e\u0446\u0441\u0435\u0442\u044f\u0445. \u041a \u043f\u043e\u0441\u0442\u0443 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u044d\u0448\u0442\u0435\u0433 #\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435\u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u0435 #beelinebiz","images":"\/apply\/15024596837484.png","sent_at":"2017-08-11 16:54:43","status":1,"is_active":true,"created_at":"2017-08-11 16:54:43","updated_at":"2017-08-11 16:54:43","first_name":"\u042e\u043b\u0438\u044f","last_name":"\u0427\u0435\u0431\u043e\u0442\u0430\u0440\u044c","more_performance":"\u041a\u0430\u043a\u0438\u0435 \u043d\u0435\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u0438 \u043f\u043e\u0434\u0445\u043e\u0434\u044b \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u0434\u043b\u044f \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u0431\u0438\u0437\u043d\u0435\u0441\u0430?","likes":0},{"id":2,"full_name":"","phone":"+7 (000) 000-00-00","social_link":"www.facebook.com\/123","company_name":"\u0413\u0440\u0430\u0444\u0435\u043c\u0430","position":"\u0414\u0440\u0443\u0433\u043e\u0435","performance":"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0440\u043e \u0441\u0432\u043e\u0439 \u0431\u0438\u0437\u043d\u0435\u0441 \u0438 \u043f\u043e\u0441\u043b\u0435 \u043c\u043e\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u0435\u0441\u044c \u0440\u0430\u0431\u043e\u0442\u043e\u0439 \u0432 \u0441\u043e\u0446\u0441\u0435\u0442\u044f\u0445. \u041a \u043f\u043e\u0441\u0442\u0443 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u044d\u0448\u0442\u0435\u0433 #\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435\u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u0435 #beelinebiz","images":"\/apply\/15024589607819.jpeg","sent_at":"2017-08-11 16:42:40","status":1,"is_active":true,"created_at":"2017-08-11 16:42:40","updated_at":"2017-08-11 16:42:40","first_name":"\u0421\u0435\u0440\u0433\u0435\u0439","last_name":"\u041c\u0438\u0448\u0443\u043a\u043e\u0432","more_performance":"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0440\u043e \u0441\u0432\u043e\u0439 \u0431\u0438\u0437\u043d\u0435\u0441 \u0438 \u043f\u043e\u0441\u043b\u0435 \u043c\u043e\u0434\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u0435\u0441\u044c \u0440\u0430\u0431\u043e\u0442\u043e\u0439 \u0432 \u0441\u043e\u0446\u0441\u0435\u0442\u044f\u0445. \u041a \u043f\u043e\u0441\u0442\u0443 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u044d\u0448\u0442\u0435\u0433 #\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435\u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u0435 #beelinebiz","likes":0}]}
	const $endPointBlock = $('.contest-block-popular--wrapper');
	const participants = tempObj.newest;
	const $participantsInterview = $('.slick-slide--contest');

	//entryPoint

	let participantsData = JSON.parse(localStorage.getItem('participantsInfo')) !== null
		? JSON.parse(localStorage.getItem('participantsInfo'))
		: localStorage.setItem('participantsInfo', JSON.stringify([]));

	$.ajax({
		url: 'http://beeline-contest.grapheme.ru/participants',
		method: 'GET',
	}).done(function(data) {
		data.forEach(function(el, ind) {
			const $endPointBlock = el.status === 4
				? $('div[participant-tab="1"]').find($('.contest-block-popular--wrapper'))
				: $('div[participant-tab="2"]').find($('.contest-block-popular--wrapper'))

			let flag = false;

			if (participantsData.length > 0) {
				participantsData.forEach((val, index) => {
					if (val[el.id]) {
						flag = true;
					}
				});
			}

			$endPointBlock.append(`
				<div class="contest-popular__work-item">
					<div class="contest-popular__work-item--image" style="background-color: #393939; background-image: url('${el.images}'); background-position: center center; background-repeat: no-repeat; background-size: cover; width: 247px; height: 208px;"></div>
					<div class="work-item--wrapper" data-tab="${ind++}">
						<div class="work-item__title--name">${el.first_name} ${el.last_name}</div>
						<div class="work-item--regal">${el.position}</div>
						<div class="work-item--link work-item--hidden">Читать</div>
						<div class="work-item--line"></div>
					</div>
				</div>	
			`);

			$participantsInterview.append(`
				<div class="wrapp" data-user="${el.id}">
					<div class="modal-participant-popup__header">
						<div class="modal-participant-popup__header-item--shadow"></div>
					</div>
					<div class="modal-participant-popup__header-item--img">
						<img src="../images/contest/page-1.svg", alt="image-contest"/>
					</div>
					<div class="modal-participant-popup__container">
						<div class="modal-participant-popup__top-line">
							<div class="top-line__image-participant">
								<div class="top-line__image-participant" style="background-image: url('${el.images}'); background-position: center center; background-repeat: no-repeat; background-size: cover; width: 133px; height: 150px;  margin-bottom: -4px;"></div>
							</div>
							<div class="top-line__name-participant">
								<h1>${el.first_name} ${el.last_name}</h1>
								<p class="title-company">${el.company_name}</p>
								<p class="title-job">${el.position}</p>
							</div>
						</div>
						<div class="modal-participant-popup__middle-line">
							<div class="middle-line__main-content">
								<p>${el.performance}</p>
								<h3>Какие нестандартные технологии и подходы вы используете для развития бизнеса?</h3>
								<p>${el.more_performance}</p>
							</div>
						</div>
						<div class="modal-participant-popup__bottom-line">
							<div class="bottom-line__vote-block">
								<h1>Голосовать за участника:</h1>
								<a href="javascript:void(0)" class="link-like ${flag ? 'active': ''}"></a>
								<span class="counter-like">${el.likes}</span>
							</div>
						</div>
					</div>
					<div class="sharing-block  sharing-popup">
						<div class="share-icon js-share">
							<a class="share-icon__item share-icon__item--fk fbook" href='https://www.facebook.com/sharer/sharer.php?u=', data-shar='facebook'></a>
							<a class="share-icon__item share-icon__item--vk vkt" href='https://vk.com/share.php?url=', data-shar='vkontakte'></a>
							<a class="share-icon__item share-icon__item--tw twt" href='https://twitter.com/intent/tweet?text=', data-shar='twitter'></a>
						</div>
					</div>
				</div>
			`)
		});

		Beeline.eventContest();
		Beeline.eventParticipants();
		Beeline.share.init();
	});
};

Beeline.onAnswer = function () {
	// $('.test-block__card__answers__item').on('click', function () {
	// 	$('.test-block__card__answers__item').removeClass('active');
	// 	$(this).addClass('active');
	// });
};

Beeline.Grow = function () {

	$(document).scroll(function() {
		let top = $(document).scrollTop();

		$('.menu-rail').css('top', 432 - top +'px');
		$('.trolley-hull').css('top', -432 + top +'px');
	});
};

Beeline.share = {

  sharingPopupShow: function sharingPopupShow(clickedElem) {
  //shareFix

	let network = clickedElem.attr('class'),
    	networkUrl = clickedElem.attr('href'),
    	text = $("meta[name='og:title']").attr('content'),
    	description = $("meta[name='twitter:description']").attr('content'),
    	url = '';

	let preg_vk = /vkt/,
    	preg_tw = /twt/,
    	preg_fb = /fbook/;

  	if($(clickedElem).hasClass('js-double-share')) {

  		let people = $(clickedElem).attr('data-interview'),
  			pageUrl = window.location.origin + '/' + people + '.html';

	    if (preg_vk.test(network)) {
	      	url = networkUrl + pageUrl;
	    }

	    if (preg_tw.test(network)) {
	      	pageUrl = description + ': ' + pageUrl;
	      	url = networkUrl + pageUrl;
	    }

	    if (preg_fb.test(network)) {
	     	url = networkUrl + pageUrl;
	    }

	    window.open(url, '', 'toolbar=0,status=0,width=626,height=436');

  	} else if ($(clickedElem).hasClass('js-result-test')) {

		let testResult = $(clickedElem).parents('.test-block__results__share').attr('data-result'),
			testNumber = $('.active-test').attr('data-test'),
			pageUrl = window.location.origin + '/test_' + testNumber + '_result_' + testResult + '.html';

	    if (preg_vk.test(network)) {
	      	url = networkUrl + pageUrl;
	    }

	    if (preg_tw.test(network)) {
	      	pageUrl = description + ': ' + pageUrl;
	      	url = networkUrl + pageUrl;
	    }

	    if (preg_fb.test(network)) {
	     	url = networkUrl + pageUrl;
	    }

	    window.open(url, '', 'toolbar=0,status=0,width=626,height=436');

	} else if ($(clickedElem).hasClass('static-sharing')) {

		let pageUrl = window.location.origin;

        if (preg_tw.test(network)) {
            pageUrl = description + ': ' + pageUrl;
        }
        url = networkUrl + pageUrl;

	    window.open(url, '', 'toolbar=0,status=0,width=626,height=436');

	} else  {
        let pageUrl = window.location.href;

        if (preg_vk.test(network)) {
            url = networkUrl + pageUrl;
        }

        if (preg_tw.test(network)) {
            pageUrl = description + ': ' + pageUrl;
            url = networkUrl + pageUrl;
        }

        if (preg_fb.test(network)) {
            url = networkUrl + pageUrl;
        }

        window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
    }
  },

  init: function init() {
    $('.js-share a, .footer-js-share a').on('click', function (e) {
      e.preventDefault();
      var $clickedElem = $(this);;
      Beeline.share.sharingPopupShow($clickedElem);
    });
  }
};

Beeline.colorMenu = function() {
	if($(".jumbotron").length) {
		let line = $(".jumbotron").offset().top + $(".jumbotron").height();
		let a = [];

		$.each($('.js-menu'), function (index, value){
			let lineItem = $(value).offset().top + $(value).height();
			a.push(lineItem - 20);
		});

		// function lastLineItem(item) {
		// 	console.log('item' + item);
		// 	let middleLine = item.offset().top + item.height();
		// 	console.log(middleLine);
		// 	a.push(middleLine);
		// 	return middleLine;
		// }

		$(document).scroll(function() {

			let top = $(document).scrollTop();

			let lastLine1 = $('.article-menu').offset().top + $('.article-menu').height();
			if(lastLine1 + 0 > line) {
				$('.article-menu').css({'color':'#393939', 'opacity': '1'});
				$('.article-menu').children('span').css({'color':'#393939', 'opacity': '1'});
				$('.article-menu').addClass('article-menu--color');
			}else{
				$('.article-menu').attr('style','');
				$('.article-menu').children('span').attr('style','');
				$('.article-menu').removeClass('article-menu--color');
			}

			let lastLine2 = $('.cases-menu').offset().top + $('.cases-menu').height();
			if(lastLine2 + 0 > line) {
				$('.cases-menu').css({'color':'#393939', 'opacity': '1'});
				$('.cases-menu').children('span').css({'color':'#393939', 'opacity': '1'});
				$('.cases-menu').addClass('cases-menu--color');
			}else{
				$('.cases-menu').attr('style','');
				$('.cases-menu').children('span').attr('style','');
				$('.cases-menu').removeClass('cases-menu--color');
			}

			let lastLine3 = $('.speakers-menu').offset().top + $('.speakers-menu').height();
			if(lastLine3 + 0 > line) {
				$('.speakers-menu').css({'color':'#393939', 'opacity': '1'});
				$('.speakers-menu').children('span').css({'color':'#393939', 'opacity': '1'});
				$('.speakers-menu').addClass('speakers-menu--color');
			}else{
				$('.speakers-menu').attr('style','');
				$('.speakers-menu').children('span').attr('style','');
				$('.speakers-menu').removeClass('speakers-menu--color');
			}

			let lastLine4 = $('.lifehack-menu').offset().top + $('.lifehack-menu').height();
			if(lastLine4 + 0 > line) {
				$('.lifehack-menu').css({'color':'#393939', 'opacity': '1'});
				$('.lifehack-menu').children('span').css({'color':'#393939', 'opacity': '1'});
				$('.lifehack-menu').addClass('lifehack-menu--color');
			}else{
				$('.lifehack-menu').attr('style','');
				$('.lifehack-menu').children('span').attr('style','');
				$('.lifehack-menu').removeClass('lifehack-menu--color');
			}

			let lastLine5 = $('.tests-menu').offset().top + $('.tests-menu').height();
			if(lastLine5 + 0 > line) {
				$('.tests-menu').css({'color':'#393939', 'opacity': '1'});
				$('.tests-menu').children('span').css({'color':'#393939', 'opacity': '1'});
				$('.tests-menu').addClass('tests-menu--color');
			}else{
				$('.tests-menu').attr('style','');
				$('.tests-menu').children('span').attr('style','');
				$('.tests-menu').removeClass('tests-menu--color');
			}

			// let lastLine6 = $('.competition-menu').offset().top + $('.competition-menu').height();
			// if(lastLine6 + 55 > line){
			// 	$('.competition-menu').children('a').children('span').css('color', '#393939')
			// 	$('.competition-menu').css({'color':'#393939', 'opacity': '1'});
			// }else{
			// 	$('.competition-menu').children('a').children('span').attr('style','');
			// 	$('.competition-menu').attr('style','');
			// }

			// let lastLine7 = $('.videos-menu').offset().top + $('.videos-menu').height();
			// if(lastLine7 + 55 > line) {
			// 	$('.videos-menu').css({'color':'#393939', 'opacity': '1'});
			// 	$('.videos-menu').children('span').css({'color':'#393939', 'opacity': '1'});
			// }else{
			// 	$('.videos-menu').attr('style','');
			// 	$('.videos-menu').children('span').attr('style','');
			// }
		});
	}
};


Beeline.fixedYellowBlock = function () {
	const testLocation = location.pathname.match(/test-1.html/);
	var testURL = false;

	if (testLocation !== null) {
		testURL = testLocation.length > 0 ? true: false;
	}
	if ($(window).width() > 1024 && $(window).height() < 1060 && !testURL) {
		$(window).scroll(function() {

	  		let top = $(document).scrollTop();

	  		if (top < 48) {
	  			// $(".header-more").css({top: '0', position: 'relative', width: '100%'});
	  			$(".header-more").attr('style','');
	  			$(".beeline-wrapper").attr('style','');
	  		}else{
	  			$(".header-more").css({top: '0', position: 'fixed', width: '100%'});
	  			$(".beeline-wrapper").css('margin-top', '64px');
	  		}
		});
	}
};

Beeline.speakerSlider = {
	init: function() {
		if ($('.interview-block__speakers').length) {
			$('.interview-block__speakers').slick({
				arrows: true,
				autoplay: false,
  				slidesToShow: 5,
  				slidesToScroll: 1,
				prevArrow: '<button class="interview-block__speakers__button interview-block__speakers__button--prev"></button>',
				nextArrow: '<button class="interview-block__speakers__button interview-block__speakers__button--next"></button>',
  				responsive: [
				    {
				      breakpoint: 1024,
				      settings: {
				        slidesToShow: 3,
				        slidesToScroll: 1,
				      }
				    },
				    {
				      breakpoint: 699,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				      }
				    },
				    {
				      breakpoint: 480,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				      }
				    }
				]
			});
		}
		if ($('.advices-block-slider').length) {
			$('.advices-block-slider').slick({
				arrows: true,
				autoplay: false,
  				slidesToShow: 4,
  				slidesToScroll: 1,
				prevArrow: '<button class="interview-block__speakers__button interview-block__speakers__button--prev"></button>',
				nextArrow: '<button class="interview-block__speakers__button interview-block__speakers__button--next"></button>',
  				responsive: [
				    {
				      breakpoint: 1024,
				      settings: {
				        slidesToShow: 3,
				        slidesToScroll: 1,
				      }
				    },
				    {
				      breakpoint: 600,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 1
				      }
				    },
				    {
				      breakpoint: 480,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				      }
				    }
				]
			});
		}
		if ($('.article-block-slider').length) {
			$('.article-block-slider').slick({
				arrows: true,
				autoplay: false,
  				slidesToShow: 4,
  				slidesToScroll: 1,
				prevArrow: '<button class="interview-block__speakers__button interview-block__speakers__button--prev"></button>',
				nextArrow: '<button class="interview-block__speakers__button interview-block__speakers__button--next"></button>',
  				responsive: [
				    {
				      breakpoint: 1024,
				      settings: {
				        slidesToShow: 3,
				        slidesToScroll: 1,
				      }
				    },
				    {
				      breakpoint: 600,
				      settings: {
				        slidesToShow: 2,
				        slidesToScroll: 1
				      }
				    },
				    {
				      breakpoint: 480,
				      settings: {
				        slidesToShow: 1,
				        slidesToScroll: 1
				      }
				    }
				]
			});
		}
	}
}

// Beeline.saveSlider =  {
// 	init: function() {
// 		$('.save-slider').slick({
// 			dots: true,
// 			arrows: true,
// 			infinite: true,
// 			autoplay: false
// 			// autoplaySpeed: 3000
// 		});
// 	}
// };

Beeline.videoBottomSlider =  {
	init: function() {
		if($('.videos-slider').length){
			$('.videos-slider').slick({
				dots: false,
				arrows: true,
				infinite: true,
				autoplay: false,
				autoplaySpeed: 3000
			});
		}
	}
};

Beeline.moreArticlesVideos =  {
	moreArticle: function() {
		$('.more-articles').hide();
		$('.js-all-article').on('click', function(e){
			e.preventDefault();
			$('.more-articles').show(400);
			$('.more-articles').animate({opacity: "1"}, 400)
			// $('.more-articles').fadeIn('400');
			// $('.more-articles').css('display','flex');
			$(this).css('display', 'none');
		});
	},

	moreVideos: function() {
		$('.js-all-videos').on('click', function(e){
			e.preventDefault();
			$('.more-videos').fadeIn('400');
			$('.more-videos').css('display','flex');
			$(this).css('display', 'none');
		});
	},

	moreCases: function() {
		$('.js-more-cases').on('click', function(e){
			e.preventDefault();
			$('.more-cases').fadeIn('400');
			$('.more-cases').css('display','flex');
			$(this).css('display', 'none');
		});
	},

	moreTests:function() {
		$('.js-all-tests').on('click', function(e){
			e.preventDefault();
			$('.more-tests').fadeIn('400');
			$('.more-tests').css('display','flex');
			$(this).css('display', 'none');
		});
	},
	allCasesMain: function() {
		$('.more-cases-main').hide();
		$('.all-cases').on('click', function(e){
			e.preventDefault();
			$('.more-cases-main').show(400);
			// $('.more-cases-main').fadeIn('400');
			// $('.more-cases-main').css('display','flex');
			$('.more-cases-main').animate({opacity: "1"}, 200)
			$(this).css('display', 'none');
		});
	}
};

Beeline.lifehack = {

	newLifehack: function () {

		if ($('.js-get-lifehack').length) {

			$('.js-get-lifehack').on('click', function (e) {

				e.preventDefault();

				let count = $('.lifehack__item').length;

				let tabID = +$(this).attr('data-tab') + 1;

				if(tabID == count + 1) {
					tabID = 1
				}

				$(this).attr('data-tab', tabID);

				$('.lifehack__item').each(function() {
					let id = +$(this).attr('data-id');
					if(tabID == id) {
						if($(this).hasClass('lifehack-hidden')) {
							$(this).removeClass('lifehack-hidden');
						}
					}else{
						$(this).addClass('lifehack-hidden');
					}
				});
			});
		}
	}
};

Beeline.drawSvg = function() {
	var pathObj = {
	    "test-block-2": {
	        "strokepath": [
	            {
	                "path": "M 140 18 L 246.018866 18",
	                "duration": 600
	            },
	            {
	                "path": "M 245 18 L 245 109.46428",
	                "duration": 600
	            },
	            {
	                "path": "M 245 109 L 17.920719 109",
	                "duration": 600
	            },
	            {
	                "path": "M 18 109 L 18 17.994506",
	                "duration": 600
	            },
	            {
	                "path": "M 18 18 L 95.02597 18",
	                "duration": 600
	            }
	        ],
	        "dimensions": {
	            "width": 245,
	            "height": 155
	        }
	    }
	};

	if ($(window).width() > 1100) {
		$(".cases__item--active, .cases__item--last").mouseover(function() {
			$(this).css('border', '1px solid rgba(57, 57, 57, 0)');
		});

		$(".cases__item--active, .cases__item--last").mouseout(function() {
			$(this).css('border', '1px solid rgba(57, 57, 57, 1)');
		})
	}
};


Beeline.sideNav = {

  smoothScroll: function(sectionOffset, speed) {
    var scrollSpeed = speed;

    if (!scrollSpeed) {
      scrollSpeed = 500;
    };

    $('html, body').animate({
      scrollTop: sectionOffset - 64
    }, speed);
  },

  getCurentSection: function() {
    var section = $('section:in-viewport:first'),
        sectionName = section.attr('class');

	if (sectionName === 'jumbotron') {
      	var menuItem = $('ul.side-menu li').removeClass('active');
      	$('.trolley-hull').addClass('passive');
	}

    if (sectionName === 'competition' || sectionName === 'banner' || sectionName === 'form' || sectionName === 'save-on-calls' || sectionName === 'jumbotron') {
      return;
    } else {
      var menuItem = $('ul.side-menu li[data-section="' + sectionName + '"]');
      menuItem.siblings().removeClass('active');
      menuItem.addClass('active');
      $('.trolley-hull').removeClass('passive');
      this.railwayTraffic(menuItem);
    };
  },

  railwayTraffic: function(station) {
    var menuOffset = $('ul.side-menu').offset().top,
          trolley = $('div.menu-trolley');

    var itemOffset = station.offset().top,
        innerItemOffset = itemOffset - menuOffset;

    trolley.css({
      "transform": 'translateY(' + innerItemOffset + 'px)'
    });
  },

  animateNav: function(item) {
    var name = item.attr('data-section');
    var section = $('section[class="' + name + '"]');
    var sectionOffset = section.offset().top;

    this.smoothScroll(sectionOffset, 1000);
  },

  init: function() {
    var t = this;

    if ($('.side-menu').length) {
	    $('ul.side-menu li').on('click', function () {
	      t.animateNav($(this));
	    });

	    t.getCurentSection();

	    $(document).on('scroll', function () {
	      t.getCurentSection();
	    });

	    $('.scroll-bottom').on('click', function () {
	      var offset = $('section.articles').offset().top;
	      t.smoothScroll(offset, 2000);
	    });
	}
  }
};

Beeline.viewportEvents = {

  eventsDeclaration: function() {

    $.belowthefold = function (element, settings) {
      var fold = $(window).height() + $(window).scrollTop();
      return fold <= $(element).offset().top - settings.threshold;
    };

    $.abovethetop = function (element, settings) {
      var top = $(window).scrollTop();
      return top >= $(element).offset().top + $(element).height() - settings.threshold;
    };

    $.rightofscreen = function (element, settings) {
      var fold = $(window).width() + $(window).scrollLeft();
      return fold <= $(element).offset().left - settings.threshold;
    };

    $.leftofscreen = function (element, settings) {
      var left = $(window).scrollLeft();
      return left >= $(element).offset().left + $(element).width() - settings.threshold;
    };

    $.inviewport = function (element, settings) {
      return !$.rightofscreen(element, settings) && !$.leftofscreen(element, settings) && !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
    };

    $.extend($.expr[':'], {
      "in-viewport": function (a, i, m) {
        return $.inviewport(a, { threshold: 100 });
      }
    });
  },

  init: function() {
    var t = this;

    if ($('.side-menu').length) {
    	t.eventsDeclaration();
    }
  }
};

Beeline.setQuestionsAnimation = function(element) {
	setTimeout(function() {
        $('.test-block.active-test').find('.test-block__card__answers__item').removeClass('animated');
        $('.test-block.active-test').find('.test-block__card__answers__item').each(function(index, el) {
            setTimeout(function() {
                $(el).addClass('animated');
            }, ++index * 300);
        });
	}, 0);
};

Beeline.takeTest = function() {
    var testArr = {};
    var currTestId;
    var currTestLength;
    var testJson = [
		{
			idTest: 1,
      testTitle: 'Какой ты стартапер?',
			internals: [
                {
                    idQuestion: 1,
                    titleQuestion: 'Начнём с&nbsp;детства, но&nbsp;не&nbsp;с&nbsp;вашего&nbsp;&mdash; этот стартап вы&nbsp;уже успешно реализовали. Представьте, ваш ребёнок стал печатать на&nbsp;компьютере и&nbsp;продавать товарищам свою газету &laquo;О&nbsp;жизни нашего двора&raquo;. Каждую неделю два десятка экземпляров раскупаются подчистую. Ребёнок хочет увеличить тираж и&nbsp;число полос в&nbsp;газете. Но&nbsp;возникает проблема: из-за нового увлечения его успеваемость в&nbsp;школе начинает хромать. Как вы&nbsp;поступите?',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'Поговорите с&nbsp;ним о&nbsp;пользе учёбы, но&nbsp;серьёзно влиять не&nbsp;станете. Бизнес есть бизнес, особенно успешный.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'Возьмёте на&nbsp;себя техническую работу по&nbsp;газете&nbsp;&mdash; например, вёрстку, печать&nbsp;и, конечно, подсчёт выручки.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: 'Станете делать за&nbsp;ребёнка уроки, чтобы он&nbsp;смог дальше развивать своё дело.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 4,
                            titleAnswer: 'Объясните ему, что школа важнее бизнеса. Пусть он&nbsp;хорошо учится, а&nbsp;всем остальным занимается в&nbsp;свободное время.',
                            correctAnswer: true
                        }
                    ]
                },
                {
                    idQuestion: 2,
                    titleQuestion: 'Стартап&nbsp;&mdash; дело рискованное: можно заработать миллионы, а&nbsp;можно лишиться всего. Допустим, так и&nbsp;случилось, только наоборот: вы&nbsp;потеряли всё, потому что ваш первый и&nbsp;единственный бизнес прогорел, а&nbsp;потом вдруг выиграли в&nbsp;лотерею пять миллионов рублей. Как вы&nbsp;ими распорядитесь?',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'Опять рискнёте всем и&nbsp;создадите новый бизнес. Вы&nbsp;же выиграли в&nbsp;лотерею&nbsp;&mdash; значит, удача не&nbsp;покинула вас.',
                            correctAnswer: true
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'Инвестируете в&nbsp;чужой бизнес, и&nbsp;лишь половину выигрыша. Если уж&nbsp;снова рисковать, то&nbsp;не&nbsp;собственным делом и&nbsp;попивая коктейли в&nbsp;Таиланде.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: 'Потратите с&nbsp;умным риском&nbsp;&mdash; попробуете выучиться на&nbsp;степень MBA за&nbsp;границей и&nbsp;устроиться на&nbsp;высокооплачиваемую работу.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 4,
                            titleAnswer: 'Купите квартиру&nbsp;&mdash; это самый надёжный риск.',
                            correctAnswer: false
                        }
                    ]
                },
                {
                    idQuestion: 3,
                    titleQuestion: 'Вам снова крупно повезло&nbsp;&mdash; у&nbsp;вас возникла гениальная бизнес-идея. Но&nbsp;её&nbsp;реализации мешает одно обстоятельство: вы&nbsp;уже получили ту&nbsp;самую степень MBA и&nbsp;устроились на&nbsp;отличную работу, которая занимает почти всё ваше время. Как быть с&nbsp;идеей?',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'Никак. Зарабатывать миллионы&nbsp;&mdash; это, конечно, хорошо, но&nbsp;вам вполне хватает и&nbsp;шестизначной зарплаты.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'Отдаться страстно. Вы&nbsp;всё тщательно продумаете, составите бизнес-план и&nbsp;начнёте искать инвестора. И&nbsp;да&nbsp;&mdash; между делом уволитесь с&nbsp;работы.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: 'Отдаться сдержанно. Вы&nbsp;будете заниматься бизнесом в&nbsp;свободное от&nbsp;работы время. Если дело пойдёт в&nbsp;гору, уволитесь и&nbsp;полностью посвятите себя своему начинанию.',
                            correctAnswer: true,
                        },
                        {
                            idAnswer: 4,
                            titleAnswer: 'На&nbsp;время воздержаться. Вы&nbsp;поработаете несколько лет, чтобы скопить достаточно денег, затем уволитесь и&nbsp;спокойно начнёте свой бизнес.',
                            correctAnswer: false
                        }
                    ]
                },
                {
                    idQuestion: 4,
                    titleQuestion: 'Итак, вы&nbsp;создали собственный бизнес, поздравляем! Но&nbsp;бизнес&nbsp;&mdash; это время, а&nbsp;время&nbsp;&mdash; это деньги. Сколько всего времени вы&nbsp;готовы отдать своему делу, если деньги на&nbsp;него есть, но&nbsp;само оно дохода не&nbsp;приносит?',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'Сколько потребуется. Вы&nbsp;будете развивать бизнес до&nbsp;тех пор, пока он&nbsp;не&nbsp;станет прибыльным.',
                            correctAnswer: true
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'Несколько месяцев. Вы&nbsp;быстро &laquo;сгораете&raquo;, и, если дело не&nbsp;приносит дохода, вы&nbsp;очень скоро потеряете к&nbsp;нему интерес.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: 'Минимум год. Вы&nbsp;оцениваете результаты по&nbsp;долгосрочным периодам и&nbsp;только потом принимаете хорошо продуманные решения.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 4,
                            titleAnswer: 'Как получится. Вы&nbsp;просто делаете&nbsp;то, что нужно, и&nbsp;вообще не&nbsp;думаете о&nbsp;времени.',
                            correctAnswer: false
                        }
                    ]
                },
                {
                    idQuestion: 5,
                    titleQuestion: 'И&nbsp;всё-таки да, ваша бизнес-идея не&nbsp;работает. Прибыли как не&nbsp;было, так и&nbsp;нет, и&nbsp;ничто не&nbsp;помогает&nbsp;&mdash; ни&nbsp;&laquo;холодные&raquo; звонки, ни&nbsp;контекстная реклама, ни&nbsp;даже 75%-ные скидки. Вы&nbsp;решаете свернуть бизнес, но&nbsp;тут к&nbsp;вам подходит ваш маркетолог и&nbsp;говорит, что теперь-то точно знает, как добиться взрывных продаж. Ваши действия?',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'Даже слушать не&nbsp;станете, потому что вы&nbsp;человек действия и&nbsp;уже всё решили.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'Выслушаете, но&nbsp;следовать совету не&nbsp;станете, даже если идея интересная. Возможно, вы&nbsp;используете её&nbsp;в&nbsp;новом бизнесе&nbsp;&mdash; после того как ликвидируете этот.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: 'Выслушаете&nbsp;и, если идея интересная, попробуете её&nbsp;реализовать, чтобы спасти тонущий корабль.',
                            correctAnswer: true
                        },
                        {
                            idAnswer: 4,
                            titleAnswer: 'Выслушаете, а&nbsp;затем вежливо пошлёте маркетолога вместе с&nbsp;его советом за&nbsp;заявлением об&nbsp;увольнении в&nbsp;связи с&nbsp;банкротством вашей компании.',
                            correctAnswer: false
                        }
                    ]
                },
                {
                    idQuestion: 6,
                    titleQuestion: 'И&nbsp;напоследок простой вопрос. Оптимизм&nbsp;&mdash; это про вас?',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'Да.',
                            correctAnswer: true
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'Нет.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: 'Скорее нет, чем&nbsp;да.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 4,
                            titleAnswer: 'И&nbsp;нет, и&nbsp;да&nbsp;&mdash; зависит от&nbsp;настроения.',
                            correctAnswer: false
                        }
                    ]
                }
			]
		},
        {
            idTest: 2,
            testTitle: 'Способны ли вы привлекать инвестиции?',
            internals: [
                {
                    idQuestion: 1,
                    titleQuestion: 'Итак, гениальный продукт придуман, бизнес-план готов, и&nbsp;вы&nbsp;точно рассчитали, какие нужны инвестиции, чтобы поставить стартап на&nbsp;ноги. И&nbsp;всё-таки сколько денег вы&nbsp;согласитесь получить от&nbsp;инвестора?',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'Меньше, чем нужно, потому что больше могут не&nbsp;дать. Лучше уж&nbsp;меньше, чем вообще ничего.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'Ровно столько, сколько нужно. Просто так никто не&nbsp;инвестирует: чем больше возьмёшь, тем больше отдашь. Лишние потери вам ни&nbsp;к&nbsp;чему.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: 'Больше, чем нужно, но&nbsp;в&nbsp;разумных пределах. Бизнес сопряжён с&nbsp;рисками, и&nbsp;в&nbsp;любой момент могут возникнуть непредвиденные расходы.',
                            correctAnswer: true
                        },
                        {
                            idAnswer: 4,
                            titleAnswer: 'Гораздо больше, чем нужно. Должно хватать и&nbsp;на&nbsp;развитие бизнеса, и&nbsp;на&nbsp;неожиданные траты, смузи и&nbsp;маффинами. Чтобы добиться максимальной отдачи, всё должно быть тоже по&nbsp;максимуму.',
                            correctAnswer: false
                        }
                    ]
                },
                {
                    idQuestion: 2,
                    titleQuestion: 'Вы&nbsp;изобрели уникальный, революционный, недорогой и&nbsp;социально значимый продукт. Например, бесконечную батарейку, которая непрерывно заряжается от&nbsp;воздуха, для чего её&nbsp;даже не&nbsp;нужно вынимать из&nbsp;прибора. На&nbsp;организацию производства и&nbsp;сбыта вам понадобится всего миллион рублей. Куда первым делом отправитесь за&nbsp;деньгами?',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'В&nbsp;кредитный отдел банка.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'На&nbsp;краудфандинг-платформу.',
                            correctAnswer: true
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: 'К&nbsp;венчурному инвестору.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 4,
                            titleAnswer: 'К&nbsp;производителю батареек.',
                            correctAnswer: false
                        }
                    ]
                },
                {
                    idQuestion: 3,
                    titleQuestion: 'Пусть вы&nbsp;не&nbsp;придумали бесконечную батарейку, зато ваш стартап настолько перспективен, что может заинтересовать даже западных инвесторов. Это вы&nbsp;и&nbsp;собираетесь попробовать. Как будете действовать?',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'Подготовите объёмистую презентацию&nbsp;&mdash; и&nbsp;вперёд. Пока стартап живёт только на&nbsp;красочных слайдах, но&nbsp;ваши харизма и&nbsp;умение убеждать вам помогут. Медлить нельзя: инвестиции могут уйти к&nbsp;конкурентам.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'Сначала создадите бизнес в&nbsp;России и&nbsp;выведете на&nbsp;минимальную окупаемость. Отправитесь за&nbsp;инвестициями на&nbsp;Запад только после того, как подкрепите вашу перспективность реальными цифрами. Тише едешь&nbsp;&mdash; дальше будешь.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: 'Организуете более-менее стабильный бизнес в&nbsp;России, затем добьётесь первых продаж на&nbsp;Западе и&nbsp;только после этого станете искать там инвесторов. Лучше быть последним, но&nbsp;предельно убедительным.',
                            correctAnswer: true,
                        }
                    ]
                },
                {
                    idQuestion: 4,
                    titleQuestion: 'И&nbsp;вот вы&nbsp;на&nbsp;переговорах с&nbsp;инвестором. Рассказываете, ерошите волосы, хватаетесь за&nbsp;сердце&nbsp;&mdash; отдаётесь делу всей душой. Тем временем инвестор молчит и&nbsp;разглядывает муху на&nbsp;столе. Ему явно неинтересно, насколько социально ценен ваш продукт. Едва вы&nbsp;переходите к&nbsp;прогнозу прибыли, инвестор прихлопывает муху и&nbsp;оживляется. Стоит&nbsp;ли иметь с&nbsp;ним дело?',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'Стоит. Если инвестора интересует лишь выгода, а&nbsp;не&nbsp;сам проект, это даже хорошо. Не&nbsp;будет вмешиваться в&nbsp;управление бизнесом.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'Стоит. Не&nbsp;важно, интересны&nbsp;ли инвестору детали стартапа. Главное&nbsp;&mdash; получить деньги, а&nbsp;уж&nbsp;как ими распорядиться, вы&nbsp;сами знаете.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: 'Не&nbsp;стоит. Инвестор должен заинтересоваться проектом и&nbsp;быть согласен с&nbsp;вами во&nbsp;всём. Создать успешный бизнес могут только единомышленники.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 4,
                            titleAnswer: 'Не&nbsp;стоит. Возможно, без быстрых финансовых результатов такой инвестор прихлопнет ваш проект, как ту&nbsp;же муху.',
                            correctAnswer: true
                        }
                    ]
                },
                {
                    idQuestion: 5,
                    titleQuestion: 'Кстати, кто такие бизнес-ангелы?',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'Инвесторы, которые спасают тонущие, но&nbsp;не&nbsp;безнадёжные стартапы. Как ваш после того парня с&nbsp;мухой.<br>Они возобновляют финансирование, а&nbsp;взамен получают б&oacute;льшую долю в&nbsp;бизнесе.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'Инвесторы, оказывающие стартапам не&nbsp;только финансовую, но&nbsp;и&nbsp;экспертную поддержку.',
                            correctAnswer: true
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: 'Инвесторы, которые помогают исключительно как эксперты&nbsp;&mdash; вкладывают в&nbsp;стартап не&nbsp;деньги, а&nbsp;время, опыт и&nbsp;знания. Взамен они получают небольшую долю в&nbsp;бизнесе.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 4,
                            titleAnswer: 'Это необязательно инвесторы. Туфли на&nbsp;шпильках, узкая юбка, строгая блузка, классические очки, волосы, собранные в&nbsp;хвост,&nbsp;&mdash; ну&nbsp;вы&nbsp;поняли.',
                            correctAnswer: false
                        }
                    ]
                },
                {
                    idQuestion: 6,
                    titleQuestion: 'И&nbsp;вот он&nbsp;&mdash; долгожданный финал. Вы&nbsp;блестяще провели переговоры по&nbsp;первому раунду инвестирования, и&nbsp;в&nbsp;ваш стартап готовы вложиться. Какую долю в&nbsp;бизнесе вы&nbsp;согласитесь отдать взамен на&nbsp;финансирование? Не&nbsp;забывайте: вполне возможно, за&nbsp;первым последуют другие раунды инвестирования.',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: '10–15%',
                            correctAnswer: true
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: '45–50%',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: '70–75%',
                            correctAnswer: false
                        }
                    ]
                }
            ]
        }, {
            idTest: 3,
            testTitle: 'Разбираетесь ли вы в маркетинге?',
            internals: [
                {
                    idQuestion: 1,
                    titleQuestion: 'Начнем с&nbsp;разминки. Маркетинг, маркетинг, маркетинг. Нет, это не&nbsp;речевая гимнастика&nbsp;&mdash; отдел с&nbsp;таким названием сегодня есть едва&nbsp;ли не&nbsp;в&nbsp;каждой компании. А&nbsp;в&nbsp;чем, собственно, заключается одна из&nbsp;главных функций маркетинга?',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'Убедить клиента, что ваш товар уникален.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'Убедить клиента, что ваш товар самый лучший.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: 'Убедить клиента, что ваш товар ему нужен.',
                            correctAnswer: true
                        },
                        {
                            idAnswer: 4,
                            titleAnswer: 'Убедить клиента, что ваш товар ему выгоден.',
                            correctAnswer: false
                        }
                    ]
                },
                {
                    idQuestion: 2,
                    titleQuestion: 'Вы&nbsp;бы наняли маркетолога, который способен:',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'Привести компанию к&nbsp;&laquo;золотой горе&raquo;.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'Открыть компании голубой океан.',
                            correctAnswer: true
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: 'Поставить компанию на&nbsp;&laquo;твердую почву&raquo;.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 4,
                            titleAnswer: 'Поднять компанию на&nbsp;&laquo;заоблачную высоту&raquo;.',
                            correctAnswer: false
                        }
                    ]
                },
                {
                    idQuestion: 3,
                    titleQuestion: 'Допустим, вы&nbsp;создали массовый продукт, который интересен людям и&nbsp;аналогов которому на&nbsp;рынке нет. Первое время он&nbsp;пользуется ажиотажным спросом, но&nbsp;вскоре продажи почему-то начинают быстро падать. Как вы&nbsp;поступите?',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'Запустите рекламу по&nbsp;всем каналам коммуникации, определите самые эффективные и&nbsp;полностью сосредоточитесь на&nbsp;них.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'Изучите отзывы клиентов, поймете, что не&nbsp;так с&nbsp;продуктом, и&nbsp;усовершенствуете его.',
                            correctAnswer: true
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: 'Станете проводить специальные акции для покупателей: программы лояльности, скидки, подарки и&nbsp;прочее.',
                            correctAnswer: false,
                        },
                        {
                            idAnswer: 4,
                            titleAnswer: 'Проверите, не&nbsp;появились&nbsp;ли у&nbsp;вас конкуренты, и&nbsp;если&nbsp;да, то&nbsp;ударите по&nbsp;ним черным пиаром под светлым лозунгом: не&nbsp;укради.',
                            correctAnswer: false,
                        }
                    ]
                },
                {
                    idQuestion: 4,
                    titleQuestion: 'Другая история. Многие клиенты не&nbsp;очень хорошо отзываются о&nbsp;вашем продукте. Несмотря на&nbsp;это, его продажи стабильно высоки, потому что конкурентов у&nbsp;вас нет (вы&nbsp;проверили). По&nbsp;отзывам покупателей, ясно, как довести продукт до&nbsp;совершенства, однако это влетит в&nbsp;копеечку. Вы&nbsp;не&nbsp;обанкротитесь, но&nbsp;придется закрыть несколько доходных торговых точек.<br>Разумно&nbsp;ли пойти на&nbsp;такое?',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'Да.',
                            correctAnswer: true
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'Нет.',
                            correctAnswer: false
                        }
                    ]
                },
                {
                    idQuestion: 5,
                    titleQuestion: 'Про совершенный продукт поговорили, перейдем к&nbsp;&laquo;идеальному покупателю&raquo;.<br>Вопрос простой: кто это?',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'Тот, кто готов купить ваш товар по&nbsp;максимальной цене.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'Тот, кто покупает только ваш товар, игнорируя аналоги.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: 'Тот, кого можно заинтересовать в&nbsp;покупке вашего товара.',
                            correctAnswer: true
                        },
                        {
                            idAnswer: 4,
                            titleAnswer: 'Тот, кого необязательно заинтересовывать, он&nbsp;купит ваш товар сам.',
                            correctAnswer: false
                        }
                    ]
                },
                {
                    idQuestion: 6,
                    titleQuestion: 'Вспомним и&nbsp;про воронку продаж. Вопрос на&nbsp;логику. Один продажник в&nbsp;день делает 40&nbsp;&laquo;холодных&raquo; звонков, отправляет 20&nbsp;коммерческих предложений и&nbsp;заключает 10&nbsp;сделок.<br>Второй&nbsp;&mdash; 80&nbsp;звонков, 40&nbsp;предложений и&nbsp;20&nbsp;сделок. Кто из&nbsp;них эффективнее?',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'Первый.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'Второй.',
                            correctAnswer: true
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: 'Оба одинаково эффективны.',
                            correctAnswer: false
                        }
                    ]
                }
            ]
        },{
            idTest: 4,
            testTitle: 'Способны ли вы оптимизировать бизнес-расходы?',
            internals: [
                {
                    idQuestion: 1,
                    titleQuestion: 'Хочешь что-то изменить&nbsp;&mdash; начни с&nbsp;себя. С&nbsp;вас и&nbsp;начнем. Готовы&nbsp;ли вы&nbsp;ради инвестиций в&nbsp;бизнес экономить на&nbsp;личных расходах&nbsp;&mdash; например, отказаться от&nbsp;долгожданной покупки новой машины или квартиры попросторнее?',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'Да, ради бизнеса можно пожертвовать чем угодно.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'Возможно, если вложение действительно пойдет бизнесу на&nbsp;пользу.',
                            correctAnswer: true
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: 'Нет, бизнес должен приносить деньги, а&nbsp;не&nbsp;наоборот.',
                            correctAnswer: false
                        }
                    ]
                },
                {
                    idQuestion: 2,
                    titleQuestion: 'С&nbsp;самопожертвованием разобрались, перейдем к&nbsp;кадрам. Как думаете, допустимо&nbsp;ли в&nbsp;интересах компании провести оптимизацию персонала и&nbsp;уволить ценного сотрудника?',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'Нет. Если человек работает хорошо, уволить его&nbsp;&mdash; неправильно.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'Да. Если в&nbsp;будущем такой специалист опять понадобится, его всегда можно будет нанять.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: 'Нет. Главный ресурс компании&nbsp;&mdash; сильная команда, и&nbsp;сильнее ее&nbsp;делает каждый человек.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 4,
                            titleAnswer: 'Да. Но&nbsp;лишь если результат это оправдывает.',
                            correctAnswer: true
                        }
                    ]
                },
                {
                    idQuestion: 3,
                    titleQuestion: 'Для дальнейшего развития бизнеса вам нужны инвестиции. Деньги можно добыть, отказавшись от&nbsp;аренды офиса. Готовы&nbsp;ли вы&nbsp;перевести сотрудников на&nbsp;удаленный формат работы, если характер их&nbsp;деятельности это вполне позволяет?',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'Нет. Работа вне офиса губит дисциплину, а&nbsp;вместе с&nbsp;нею и&nbsp;эффективность.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'Можно попробовать. Проверим эффективность, и&nbsp;если она упадет, вернемся к&nbsp;офисному формату.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: 'Да. Люди могут работать одинаково эффективно как в&nbsp;офисе, так и&nbsp;удаленно.',
                            correctAnswer: true
                        }
                    ]
                },
                {
                    idQuestion: 4,
                    titleQuestion: 'А&nbsp;коворкинг&nbsp;&mdash; это выход, если, например, денег не&nbsp;хватает ни&nbsp;на&nbsp;аренду офиса, ни&nbsp;на&nbsp;организацию удаленной работы?',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'Вполне. Люди могут отлично работать и&nbsp;в&nbsp;присутствии посторонних. Главное&nbsp;&mdash; мотивация.',
                            correctAnswer: true
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'Да. Но&nbsp;это очень экстремальный выход. Будем использовать этот вариант лишь до&nbsp;тех пор, пока не&nbsp;появятся деньги на&nbsp;офис.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: 'Нет. Лучше влезть в&nbsp;долги и&nbsp;снять какой-никакой офис, зато отдельный. У&nbsp;сотрудников должно быть свое пространство.',
                            correctAnswer: false
                        }
                    ]
                },
                {
                    idQuestion: 5,
                    titleQuestion: 'Допустим, в&nbsp;последнее время ваш бизнес терпит убытки. Их&nbsp;можно сократить, оптимизировав расходы на&nbsp;доставку сырья из-за рубежа. Но&nbsp;для этого придется скооперироваться с&nbsp;единственным конкурентом, у&nbsp;которого дела тоже идут неважно. Выход следующий: платить за&nbsp;доставку удвоенной партии сырья нужно будет совместно, зато заметно меньше для каждого из&nbsp;вас. Вы&nbsp;согласитесь на&nbsp;такое?',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'Нет. Лучше терпеть убытки, чем сотрудничать с&nbsp;тем, кто прямо или косвенно помогает их&nbsp;причинять.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'Да. Даже если это поможет вывести бизнес из&nbsp;кризиса не&nbsp;только мне, но&nbsp;и&nbsp;конкуренту.',
                            correctAnswer: true
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: 'И&nbsp;нет, и&nbsp;да. Разумнее подождать&nbsp;&mdash; вполне возможно, конкурент &laquo;утонет&raquo;, и&nbsp;дела наладятся сами. Если такое не&nbsp;случится, можно будет пойти на&nbsp;сотрудничество.',
                            correctAnswer: false
                        }
                    ]
                },
                {
                    idQuestion: 6,
                    titleQuestion: 'Как думаете, на&nbsp;чем из&nbsp;перечисленного можно существенно оптимизировать бизнес-расходы?',
                    leaves: [
                        {
                            idAnswer: 1,
                            titleAnswer: 'На&nbsp;страховании.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 2,
                            titleAnswer: 'На&nbsp;кредитовании.',
                            correctAnswer: false
                        },
                        {
                            idAnswer: 3,
                            titleAnswer: 'И&nbsp;на&nbsp;том, и&nbsp;на&nbsp;другом.',
                            correctAnswer: true
                        },
                        {
                            idAnswer: 4,
                            titleAnswer: 'Ни&nbsp;на&nbsp;том, ни&nbsp;на&nbsp;другом.',
                            correctAnswer: false
                        }
                    ]
                }
            ]
        },
				{
					idTest: 5,
					testTitle: 'Знаете ли вы своих сотрудников?',
					internals: [
							{
									idQuestion: 1,
									titleQuestion: 'Этот человек круглый год ходит в&nbsp;растянутом свитере, и&nbsp;на&nbsp;его рабочем столе вечный беспорядок. Он&nbsp;каждый день трудится в&nbsp;поте лица и&nbsp;допоздна задерживается в&nbsp;офисе. На&nbsp;вопрос зачем, отвечает: чтобы успеть то, что не&nbsp;успел за&nbsp;день. Как можно назвать такого человека?',
									leaves: [
											{
													idAnswer: 1,
													titleAnswer: 'Разгильдяй.',
													correctAnswer: false
											},
											{
													idAnswer: 2,
													titleAnswer: 'Трудоголик.',
													correctAnswer: true
											},
											{
													idAnswer: 3,
													titleAnswer: 'Карьерист.',
													correctAnswer: false
											}
									]
							},
							{
									idQuestion: 2,
									titleQuestion: 'Этот человек строго соблюдает дресс-код, и&nbsp;на&nbsp;его рабочем месте всегда полный порядок. Он&nbsp;каждый день без задержки приходит на&nbsp;работу и, кстати, уходит тоже. Он&nbsp;весь в&nbsp;делах: без умолку говорит по&nbsp;телефону и&nbsp;не&nbsp;поднимает головы от&nbsp;компьютера, но&nbsp;объективно результатов нет. Как&nbsp;бы вы&nbsp;охарактеризовали его одним словом?',
									leaves: [
											{
													idAnswer: 1,
													titleAnswer: 'Педант.',
													correctAnswer: false
											},
											{
													idAnswer: 2,
													titleAnswer: 'Трудоголик.',
													correctAnswer: false
											},
											{
													idAnswer: 3,
													titleAnswer: 'Имитатор.',
													correctAnswer: true
											}
									]
							},
							{
									idQuestion: 3,
									titleQuestion: 'Ее&nbsp;внешний вид всегда идеален, как и&nbsp;рабочее место, как и&nbsp;квартальный отчет. Она никогда не&nbsp;отказывает коллегам в&nbsp;помощи и&nbsp;выполняет любые поручения начальства. Кто она?',
									leaves: [
											{
													idAnswer: 1,
													titleAnswer: 'Карьеристка.',
													correctAnswer: true
											},
											{
													idAnswer: 2,
													titleAnswer: 'Идеалистка.',
													correctAnswer: false
											},
											{
													idAnswer: 3,
													titleAnswer: 'Формалистка.',
													correctAnswer: false
											}
									]
							},
							{
									idQuestion: 4,
									titleQuestion: 'Этот человек носит яркие футболки, хотя это не&nbsp;по&nbsp;дресс-коду. Монитор его компьютера пестрит разноцветными стикерами-напоминалками, а&nbsp;на&nbsp;рабочем месте такой беспорядок, что сама уборщица ногу сломит. Он&nbsp;постоянно фонтанирует новыми идеями и, если руководство одобрит, будет работать над ними, выкладываясь на&nbsp;полную. Словом, заметная личность, или точнее&hellip;',
									leaves: [
											{
													idAnswer: 1,
													titleAnswer: 'Независимая.',
													correctAnswer: false
											},
											{
													idAnswer: 2,
													titleAnswer: 'Инициативная.',
													correctAnswer: false
											},
											{
													idAnswer: 3,
													titleAnswer: 'Творческая.',
													correctAnswer: true
											}
									]
							},
							{
									idQuestion: 5,
									titleQuestion: 'Ну, а&nbsp;этот одевается абы как, его стол завален макулатурой и&nbsp;обертками от&nbsp;шоколада. Работает тоже так себе. По&nbsp;утрам постоянно опаздывает, зато вечером уходит строго вовремя, откладывая незаконченные задачи на&nbsp;завтра. Но&nbsp;стоит устроить нагоняй, как он&nbsp;тут&nbsp;же усердно принимается за&nbsp;дело и&nbsp;в&nbsp;итоге показывает неплохие результаты. Как&nbsp;бы вы&nbsp;его назвали?',
									leaves: [
											{
													idAnswer: 1,
													titleAnswer: 'Прокрастинатор.',
													correctAnswer: true
											},
											{
													idAnswer: 2,
													titleAnswer: 'Лентяй.',
													correctAnswer: false
											},
											{
													idAnswer: 3,
													titleAnswer: 'Неудачник.',
													correctAnswer: false
											}
									]
							},
							{
									idQuestion: 6,
									titleQuestion: 'Своим внешним видом она предпочитает не&nbsp;выделяться среди остальных. Ведет себя с&nbsp;коллегами так&nbsp;же. Рабочее место содержит в&nbsp;порядке. На&nbsp;работу не&nbsp;опаздывает, с&nbsp;обязанностями справляется неплохо, но&nbsp;только когда точно знает, что и&nbsp;как делать. Если&nbsp;же предложить нестандартную задачу, теряется и&nbsp;просит поручить ей&nbsp;что-то более привычное. Кто она?',
									leaves: [
											{
													idAnswer: 1,
													titleAnswer: 'Интроверт.',
													correctAnswer: false
											},
											{
													idAnswer: 2,
													titleAnswer: 'Неудачница.',
													correctAnswer: false
											},
											{
													idAnswer: 3,
													titleAnswer: 'Формалистка.',
													correctAnswer: true
											}
									]
							}
					]
				},
				{
				idTest: 7,
				testTitle: 'Где и как искать хорошие кадры?',
				internals: [
						{
								idQuestion: 1,
								titleQuestion: 'Начнем с&nbsp;элементарного. Вы, конечно, знаете, чем занимается <nobr>HR-служба</nobr> в&nbsp;компании. А&nbsp;вот что точно не&nbsp;входит в&nbsp;сферу ее&nbsp;деятельности?',
								leaves: [
										{
												idAnswer: 1,
												titleAnswer: 'Поиск и&nbsp;привлечение новых специалистов.',
												correctAnswer: false
										},
										{
												idAnswer: 2,
												titleAnswer: 'Определение оклада будущих сотрудников.',
												correctAnswer: true
										},
										{
												idAnswer: 3,
												titleAnswer: 'Помощь в&nbsp;адаптации свежих кадров.',
												correctAnswer: false
										},
										{
												idAnswer: 4,
												titleAnswer: 'Работа над мотивацией новичков.',
												correctAnswer: false
										}
								]
						},
						{
								idQuestion: 2,
								titleQuestion: 'Допустим, вы&nbsp;нашли подходящего специалиста. У&nbsp;него впечатляющее резюме, он&nbsp;блестяще прошел тестовые испытания, и&nbsp;ваш <nobr>HR-менеджер</nobr> заверяет, что лучше кандидата не&nbsp;найти. И&nbsp;<nobr>все-таки</nobr> при личной встрече с&nbsp;потенциальным сотрудником у&nbsp;вас складывается не&nbsp;самое приятное впечатление о&nbsp;нем&nbsp;&mdash; он&nbsp;вам просто не&nbsp;нравится. Как поступите?',
								leaves: [
										{
												idAnswer: 1,
												titleAnswer: 'Примите. Главное&nbsp;&mdash; профессионализм кандидата, а&nbsp;все остальное лирика.',
												correctAnswer: false
										},
										{
												idAnswer: 2,
												titleAnswer: 'Дадите шанс. Возможно, со&nbsp;временем новый специалист отроется вам с&nbsp;лучшей стороны. Если нет&nbsp;&mdash; уволите.',
												correctAnswer: false
										},
										{
												idAnswer: 3,
												titleAnswer: 'Возьмете. И&nbsp;постараетесь, чтобы ваша личная неприязнь никак не&nbsp;влияла на&nbsp;профессиональные отношения.',
												correctAnswer: true
										},
										{
											idAnswer: 4,
											titleAnswer: 'Откажете. Новый человек должен устраивать вас во&nbsp;всем.',
											correctAnswer: false
										}
								]
						},
						{
								idQuestion: 3,
								titleQuestion: 'Другая ситуация. Вам подвернулся более чем подходящий спец. У&nbsp;него отличное резюме, он&nbsp;успешно прошел все тесты, и&nbsp;вам очень понравился. Но&nbsp;есть одно обстоятельство. Сейчас этот человек трудится у&nbsp;вашего конкурента и&nbsp;говорит, что, если вы&nbsp;его примите, он&nbsp;охотно поделится всеми секретами своего бывшего работодателя. Возьмете его?',
								leaves: [
										{
												idAnswer: 1,
												titleAnswer: 'Да. Знать слабости конкурента&nbsp;&mdash; это сила.',
												correctAnswer: false
										},
										{
												idAnswer: 2,
												titleAnswer: 'Да. Но&nbsp;сначала не&nbsp;помешает проверить,&nbsp;действительно&nbsp;ли он&nbsp;знает <nobr>какие-то</nobr> секреты.',
												correctAnswer: false
										},
										{
												idAnswer: 3,
												titleAnswer: 'Нет. Это может быть &laquo;засланный казачок&raquo;, а&nbsp;его секреты&nbsp;&mdash; &laquo;отравленными&raquo;.',
												correctAnswer: false
										},
										{
											idAnswer: 4,
											titleAnswer: 'Нет. Не&nbsp;стоит доверять человеку, который торгует чужими секретами ради собственной выгоды.',
											correctAnswer: true
										}
								]
						},
						{
								idQuestion: 4,
								titleQuestion: 'Перейдем к&nbsp;действующим кадрам. Как думаете, каким образом лучше всего поднять эффективность работы команды?',
								leaves: [
										{
												idAnswer: 1,
												titleAnswer: 'Повысить зарплату.',
												correctAnswer: false
										},
										{
												idAnswer: 2,
												titleAnswer: 'Повысить мотивацию.',
												correctAnswer: true
										},
										{
												idAnswer: 3,
												titleAnswer: 'Повысить в&nbsp;должности.',
												correctAnswer: false
										},
										{
											idAnswer: 4,
											titleAnswer: 'Повысить уровень дисциплины.',
											correctAnswer: false
										}
								]
						},
						{
								idQuestion: 5,
								titleQuestion: 'А&nbsp;теперь представьте страшное. Ваши дела идут не&nbsp;очень хорошо, денег на&nbsp;офис больше не&nbsp;хватает, и&nbsp;перед вами два радикальных решения: снизить зарплату сотрудникам, чтобы продолжать платить за&nbsp;аренду помещений, либо перевести всю команду на&nbsp;домашний формат работы, благо, все условия это позволяют. Как поступите?',
								leaves: [
										{
												idAnswer: 1,
												titleAnswer: 'Снизите зарплату и&nbsp;постараетесь убедить сотрудников, что это временная мера, но&nbsp;скоро дела наладятся, и&nbsp;вы&nbsp;возместите им&nbsp;все убытки.',
												correctAnswer: false
										},
										{
												idAnswer: 2,
												titleAnswer: 'Снизите зарплату, даже если сотрудники будут категорически против. Работа из&nbsp;дома убьет дисциплину, а&nbsp;вместе с&nbsp;нею и&nbsp;ваш бизнес.',
												correctAnswer: false
										},
										{
												idAnswer: 3,
												titleAnswer: 'Разрешите работать из&nbsp;дома. Вполне возможно, в&nbsp;более свободных условиях люди станут работать даже еще эффективнее.',
												correctAnswer: true
										},
										{
												idAnswer: 4,
												titleAnswer: 'Перейдете на&nbsp;домашний формат, но&nbsp;серьезно ужесточите контроль за&nbsp;дисциплиной.',
												correctAnswer: false
										}
								]
						},
						{
								idQuestion: 6,
								titleQuestion: 'И&nbsp;напоследок&nbsp;&mdash; приятная встреча. К&nbsp;вам приходит устраиваться человек, который уже работал в&nbsp;вашей компании. <nobr>Когда-то</nobr> он&nbsp;зарекомендовал себя первоклассным специалистом и&nbsp;сам уволился, сохранив с&nbsp;вами хорошие отношения. Вы&nbsp;возьмете его на&nbsp;работу снова?',
								leaves: [
										{
												idAnswer: 1,
												titleAnswer: 'Да, только если он&nbsp;действительно нужен.',
												correctAnswer: true
										},
										{
												idAnswer: 2,
												titleAnswer: 'Да, даже если такой специалист не&nbsp;сильно нужен. Пусть останется на&nbsp;всякий случай&nbsp;&mdash; хороших сотрудников днем с&nbsp;огнем не&nbsp;сыщешь.',
												correctAnswer: false
										},
										{
												idAnswer: 3,
												titleAnswer: 'Нет, просто потому, что сейчас такой специалист не&nbsp;нужен.',
												correctAnswer: false
										},

										{
												idAnswer: 4,
												titleAnswer: 'Нет, даже если он&nbsp;очень нужен. Однажды этот человек уже отказался от&nbsp;работы на&nbsp;вас, второго раза не&nbsp;будет.',
												correctAnswer: false
										}
								]
						}
				]
			},
			{
				idTest: 8,
				testTitle: 'Умеете ли вы экономить на связи?',
				internals: [
						{
								idQuestion: 1,
								titleQuestion: 'Сегодня многие компании стараются сокращать траты, в&nbsp;том числе на&nbsp;мобильную связь. Давайте проверим, насколько эффективно вы&nbsp;сможете оптимизировать эту статью расходов. Начнём с&nbsp;простейшего. Как&nbsp;бы вы&nbsp;сэкономили на&nbsp;корпоративной связи для сотрудников?',
								leaves: [
										{
												idAnswer: 1,
												titleAnswer: 'Запретить звонки в&nbsp;нерабочее время.',
												correctAnswer: false
										},
										{
												idAnswer: 2,
												titleAnswer: 'Установить месячный лимит трат на&nbsp;связь.',
												correctAnswer: true
										},
										{
												idAnswer: 3,
												titleAnswer: 'Ограничить продолжительность звонков.',
												correctAnswer: false
										},
										{
												idAnswer: 4,
												titleAnswer: 'Разрешить звонки только в&nbsp;пределах вашего региона.',
												correctAnswer: false
										}
								]
						},
						{
								idQuestion: 2,
								titleQuestion: 'А&nbsp;как&nbsp;бы вы&nbsp;сократили расходы на&nbsp;мобильный интернет?',
								leaves: [
										{
												idAnswer: 1,
												titleAnswer: 'Ограничить объём трафика.',
												correctAnswer: true
										},
										{
												idAnswer: 2,
												titleAnswer: '	Закрыть доступ к&nbsp;соцсетям.',
												correctAnswer: false
										},
										{
												idAnswer: 3,
												titleAnswer: 'Отключать интернет в&nbsp;выходные.',
												correctAnswer: false
										},
										{
											idAnswer: 4,
											titleAnswer: 'Вообще его не&nbsp;подключать.',
											correctAnswer: false
										}
								]
						},
						{
								idQuestion: 3,
								titleQuestion: 'Допустим, сотрудникам вашей компании приходится много общаться по&nbsp;межгороду. Как выгоднее всего делать такие звонки?',
								leaves: [
										{
												idAnswer: 1,
												titleAnswer: 'Через сотовую связь.',
												correctAnswer: false
										},
										{
												idAnswer: 2,
												titleAnswer: 'Через проводную связь.',
												correctAnswer: false
										},
										{
												idAnswer: 3,
												titleAnswer: 'Через спутниковую связь.',
												correctAnswer: false
										},
										{
											idAnswer: 4,
											titleAnswer: 'Через <nobr>IP-телефонию</nobr>.',
											correctAnswer: true
										}
								]
						},
						{
								idQuestion: 4,
								titleQuestion: 'В&nbsp;чём одно из&nbsp;преимуществ облачной АТС?',
								leaves: [
										{
												idAnswer: 1,
												titleAnswer: 'Можно отказаться от&nbsp;услуг стороннего <nobr>кол-центра</nobr>.',
												correctAnswer: false
										},
										{
												idAnswer: 2,
												titleAnswer: 'Можно пользоваться мобильным интернетом бесплатно.',
												correctAnswer: false
										},
										{
												idAnswer: 3,
												titleAnswer: 'Можно сэкономить на&nbsp;оборудовании связи.',
												correctAnswer: true
										},
										{
											idAnswer: 4,
											titleAnswer: 'Можно делать дешёвые <nobr>смс-рассылки</nobr>.',
											correctAnswer: false
										}
								]
						},
						{
								idQuestion: 5,
								titleQuestion: 'С&nbsp;помощью корпоративной связи можно оптимизировать и&nbsp;расходы на&nbsp;рекламу. Кстати, каким образом?',
								leaves: [
										{
												idAnswer: 1,
												titleAnswer: 'Установить для каждого рекламного канала свой телефонный номер.',
												correctAnswer: true
										},
										{
												idAnswer: 2,
												titleAnswer: 'Делать недорогие смс- и&nbsp;<nobr>пуш-рассылки</nobr> с&nbsp;рекламой.',
												correctAnswer: false
										},
										{
												idAnswer: 3,
												titleAnswer: 'Установить единый телефонный номер для всех рекламных каналов.',
												correctAnswer: false
										},
										{
												idAnswer: 4,
												titleAnswer: 'Крутить рекламу по&nbsp;телефону, пока клиент ожидает ответа оператора.',
												correctAnswer: false
										}
								]
						},
						{
								idQuestion: 6,
								titleQuestion: 'В&nbsp;каком бизнесе траты на&nbsp;корпоративную связь можно списать на&nbsp;производственные расходы и&nbsp;тем самым сэкономить на&nbsp;налогах?',
								leaves: [
										{
												idAnswer: 1,
												titleAnswer: 'Только в&nbsp;крупном.',
												correctAnswer: false
										},
										{
												idAnswer: 2,
												titleAnswer: 'Только в&nbsp;среднем.',
												correctAnswer: false
										},
										{
												idAnswer: 3,
												titleAnswer: 'В&nbsp;среднем и&nbsp;малом.',
												correctAnswer: false
										},

										{
												idAnswer: 4,
												titleAnswer: 'В&nbsp;любом.',
												correctAnswer: true
										}
								]
						}
				]
			},{
				idTest: 9,
				testTitle: 'Вы — инноватор?',
				internals: [
						{
								idQuestion: 1,
								titleQuestion: 'Допустим, вы&nbsp;выпускаете и&nbsp;продаёте дизайнерские чехлы для смартфонов&nbsp;&mdash; дела идут отлично. И&nbsp;вот появляется возможность внедрить в&nbsp;бизнес <nobr>3D-печать</nobr>. Это удешевит производство и&nbsp;принесёт дополнительную прибыль. Но&nbsp;сначала придётся основательно вложиться, а&nbsp;инвестиции окупятся лишь через год. Вы&nbsp;пойдёте на&nbsp;такое?',
								leaves: [
										{
												idAnswer: 1,
												titleAnswer: 'Да. Но&nbsp;только если на&nbsp;это будут свободные деньги.',
												correctAnswer: false
										},
										{
												idAnswer: 2,
												titleAnswer: 'Да. Даже если свободных денег не&nbsp;будет, как-нибудь найду.',
												correctAnswer: true
										},
										{
												idAnswer: 3,
												titleAnswer: 'Нет. Даже если будут свободные деньги. Лучше вложусь в&nbsp;расширение бизнеса&nbsp;&mdash; стану производить чехлы и&nbsp;для планшетов.',
												correctAnswer: false
										},
										{
												idAnswer: 4,
												titleAnswer: 'Нет. Лучше синица в&nbsp;руках, чем журавль в&nbsp;небе.',
												correctAnswer: false
										}
								]
						},
						{
								idQuestion: 2,
								titleQuestion: 'У&nbsp;вас небольшой интернет-магазин. Один оператор успевает общаться со&nbsp;всеми клиентами для подтверждения заказов. Но&nbsp;ему приходится платить крупный оклад, что не&nbsp;лучшим образом сказывается на&nbsp;вашем бюджете. Есть вариант сэкономить&nbsp;&mdash; вместо человека использовать более дешёвого робота, который будет общаться с&nbsp;покупателями синтезированным голосом. Как вам такой выход?',
								leaves: [
										{
												idAnswer: 1,
												titleAnswer: 'Отлично. Если робот может заменить человека,<br>я&nbsp;только за.',
												correctAnswer: true
										},
										{
												idAnswer: 2,
												titleAnswer: 'Неплохо. Я&nbsp;не&nbsp;очень доверяю роботам, но&nbsp;как минимум стоит попробовать.',
												correctAnswer: false
										},
										{
												idAnswer: 3,
												titleAnswer: 'Не&nbsp;очень. Лучше найму не&nbsp;такого эффективного, но&nbsp;дешёвого сотрудника&nbsp;&mdash; всяко лучше, чем робот.',
												correctAnswer: false
										},
										{
											idAnswer: 4,
											titleAnswer: 'Никак. Лучше продолжу платить человеку большой оклад&nbsp;&mdash; робот никогда не&nbsp;заменит живого собеседника.',
											correctAnswer: false
										}
								]
						},
						{
								idQuestion: 3,
								titleQuestion: 'У&nbsp;вас собственная пекарня, которая успешно работает уже пару лет. Пришла пора развиваться и&nbsp;покорять новые вершины хлебного бизнеса. Для этого придётся автоматизировать производство и&nbsp;уволить большинство пекарей. За&nbsp;эти годы они стали для вас второй семьёй&nbsp;&mdash; в&nbsp;самом лучшем смысле. Вы&nbsp;расстанетесь с&nbsp;ними?',
								leaves: [
										{
												idAnswer: 1,
												titleAnswer: 'Да. Но&nbsp;сначала подыщу им&nbsp;не&nbsp;менее достойные места в&nbsp;других пекарнях.',
												correctAnswer: false
										},
										{
												idAnswer: 2,
												titleAnswer: 'Нет. Мы&nbsp;все вместе добьёмся ещё большего успеха и&nbsp;без технологий.',
												correctAnswer: false
										},
										{
												idAnswer: 3,
												titleAnswer: 'Да. И&nbsp;как можно скорее. Новые технологии лучше внедрять сразу, пока они не&nbsp;устарели.',
												correctAnswer: true
										},
										{
											idAnswer: 4,
											titleAnswer: 'Нет. Я&nbsp;не&nbsp;променяю дорогих людей на&nbsp;сколь угодно выгодные технологии.',
											correctAnswer: false
										}
								]
						},
						{
								idQuestion: 4,
								titleQuestion: 'Вы&nbsp;создали онлайн-сервис знакомств, который быстро набирает популярность. Чтобы справляться с&nbsp;растущим трафиком, придётся докупить дорогие серверы или хранить данные ваших пользователей в&nbsp;более дешёвом облаке, которое можно арендовать у&nbsp;сторонней компании. Что вы&nbsp;выберете?',
								leaves: [
										{
												idAnswer: 1,
												titleAnswer: 'Серверы. Это наши пользователи, и&nbsp;их&nbsp;данные мы&nbsp;никому не&nbsp;передадим.',
												correctAnswer: false
										},
										{
												idAnswer: 2,
												titleAnswer: 'Облако. Это дешевле, чем серверы, а&nbsp;результат одинаковый.',
												correctAnswer: true
										},
										{
												idAnswer: 3,
												titleAnswer: 'Облако. Но&nbsp;только до&nbsp;тех пор, пока не&nbsp;купим серверы.',
												correctAnswer: false
										},
										{
											idAnswer: 4,
											titleAnswer: 'Серверы. Каким&nbsp;бы надёжным ни&nbsp;было облако, данные пользователей всё равно могут из&nbsp;него утечь.',
											correctAnswer: false
										}
								]
						},
						{
								idQuestion: 5,
								titleQuestion: 'Реклама&nbsp;&mdash; двигатель прогресса и, кстати, вашего бизнеса. Вы&nbsp;продвигаете свой продукт в&nbsp;интернете, что даёт отличные продажи. И&nbsp;вот появляется новый вид рекламы&nbsp;&mdash; голографический. Люди выстраиваются в&nbsp;очереди, чтобы увидеть это чудо. Оно может обеспечить вам ещё больший приток покупателей, но, чтобы такое запустить, придётся отказаться от&nbsp;бюджета на&nbsp;онлайн-рекламу. Вы&nbsp;готовы рискнуть?',
								leaves: [
										{
												idAnswer: 1,
												titleAnswer: 'Да. Я&nbsp;обеими руками за&nbsp;новое в&nbsp;рекламе.',
												correctAnswer: true
										},
										{
												idAnswer: 2,
												titleAnswer: 'Да. Но&nbsp;сначала удостоверюсь, что это действительно эффективно. Возможно, людей тут привлекает сама реклама, а&nbsp;не&nbsp;её объект.',
												correctAnswer: false
										},
										{
												idAnswer: 3,
												titleAnswer: 'Нет. Лучше использовать хорошо проверенное старое.',
												correctAnswer: false
										},
										{
												idAnswer: 4,
												titleAnswer: 'Нет. А&nbsp;зачем, если у&nbsp;нас и&nbsp;так высокие продажи?',
												correctAnswer: false
										}
								]
						},
						{
								idQuestion: 6,
								titleQuestion: 'Важность бухгалтера трудно переоценить. Он&nbsp;знает всё&nbsp;&mdash; сколько, за&nbsp;что, кому, куда и&nbsp;когда. А&nbsp;если компьютерная программа будет отлично справляться с&nbsp;бухгалтерскими обязанностями, вы&nbsp;замените человека ею?',
								leaves: [
										{
												idAnswer: 1,
												titleAnswer: 'Нет. Если что-то случится, с&nbsp;человека спросишь, а&nbsp;с&nbsp;программы нет.',
												correctAnswer: false
										},
										{
												idAnswer: 2,
												titleAnswer: 'Нет. Программа может идеально считать, но&nbsp;на&nbsp;неё невозможно повлиять, как на&nbsp;человека,&nbsp;&mdash; убедить, пригрозить, подмаслить.',
												correctAnswer: false
										},
										{
												idAnswer: 3,
												titleAnswer: 'Да. Программа считает быстрее и&nbsp;точнее человека.',
												correctAnswer: true
										},

										{
												idAnswer: 4,
												titleAnswer: 'Да. Но&nbsp;всё равно назначу человека, который будет контролировать программу для подстраховки.',
												correctAnswer: false
										}
								]
						}
				]
			}
	];
    var testResult = [
		{
			id: 1,
			internals: [
				{
					idResult: 1,
					title: 'Вы стартапер хоть куда',
					description: 'Готовы рискнуть всем, а когда нужно, можете принять взвешенное решение. Вы инициативны, упорны, верите в успех и способны всей душой отдаваться делу. Вам свойственно чувство ответственности, и вы умеете прислушиваться к чужому мнению. Стартаперу с таким набором качеств, пожалуй, не хватает только одного — своего бизнеса. Если у вас его ещё нет, дерзайте, дело того точно стоит.',
					min: 6,
					max: 6
				},
        {
          idResult: 2,
          title: 'Из вас выйдет отличный стартапер',
          description: 'Если вы ещё не пробовали себя в бизнесе, сделайте это. А если уже пробовали, но не получилось, возможно, вам просто не хватило толики удачи. Обязательно попытайтесь ещё — с таким набором качеств у вас есть все шансы добиться успеха.',
        	min: 4,
					max: 5
				},
        {
          idResult: 3,
          title: 'У вас есть все шансы стать успешным стартапером',
					description: 'Если вы ещё не пробовали создать бизнес, попробуйте. Рискуйте, но и тщательно продумывайте шаги. Верьте в свои идеи, но и прислушивайтесь к мнению других. Уверенно двигайтесь к успеху, но и не бегите от собственных ошибок — учитесь на них. И тогда всё получится.',
        	min: 3,
					max: 3
				},
				{
					idResult: 4,
					title: 'Вы можете стать хорошим стартапером.',
					description: 'Но, прежде чем открыть своё дело, советуем потренироваться на чужом бизнесе. Если у вас уже созрела перспективная идея — будь то онлайн-сервис, мобильное приложение или обычный магазин, — устройтесь на работу в компанию, которая занимается чем-то похожим. Посмотрите, как всё устроено изнутри, наберитесь опыта и знаний — и вперёд, к собственному успеху. У вас всё получится.',
					min: 2,
					max: 2
				},
        {
          idResult: 5,
          title: 'Вас можно назвать успешным стартапером, но с оговоркой: только не в бизнесе.',
          description: 'Посвятите себя чему-нибудь другому, менее рискованному и не такому беспощадному. Например, походите на курсы итальянской кухни, напишите автобиографию или, если у вас ещё нет ребёнка, заведите его. В конце концов, это самый главный стартап в нашей жизни.',
        	min: 0,
					max: 1
				}
			],
			testId: 1
		}, {
    		id: 2,
			internals: [
                {
                    idResult: 1,
                    title: 'Рокки',
                    description: 'Вы прирождённый фаундер — феноменальный боец. Вам вполне по силам выбить инвестиции для своего проекта, и вы сделаете это с умом, что тоже важно. Для этого не нужно изобретать бесконечную батарейку — она уже у вас внутри. Дело за малым — придумайте стартап, и в бой. Даже если вам попадётся Апполо Крид инвестиционного бизнеса — не сдавайтесь, и победа будет за вами.',
                    min: 5,
                    max: 6
                },
                {
                    idResult: 2,
                    title: 'Али',
                    description: 'У вас есть все задатки успешного фаундера, и вам вполне по силам выбить инвестиции для своего стартапа. Главное — во время каждого раунда используйте все внутренние ресурсы. Даже если вам попадётся Сонни Листон инвестиционного бизнеса, продолжайте выкладываться максимально. Благодаря уму, находчивости, упорству и подготовке вы сможете добиться блестящей победы.',
					min: 4,
                    max: 5
                },
                {
                    idResult: 3,
                    title: 'Бешеный бык',
                    description: 'Вы можете выбить инвестиции для своего проекта — даже если это не бесконечная батарейка. Более того, вам по плечу не только первый раунд. Правда, для этого придётся сильно попотеть и хорошо продумывать тактику. Но если вам попадётся Рэй Робинсон инвестиционного бизнеса — для подстраховки всё-таки лучше будет иметь в кармане ту самую батарейку.',
					min: 2,
                    max: 4
                },
                {
                    idResult: 4,
                    title: 'Тайсон',
                    description: 'У вас есть реальный шанс выбить финансирование для своего стартапа, но для этого не помешает как следует подготовиться перед боем — подтянуть знания и навыки. Даже если вам попадётся Эвандер Холифилд инвестиционного бизнеса и в первом же раунде станет лупить вас почём зря, не отчаивайтесь. Шанс на успех есть — его не нужно дожидаться, его нужно не упустить. Сохраняйте хладнокровие, действуйте продуманно, старайтесь изо всех сил — и пусть не лёгкая, но победа будет за вами.',
					min: 2,
                    max: 2
                },
                {
                    idResult: 5,
                    title: 'Роскошный Джордж',
                    description: 'У вас есть некоторый шанс выбить финансирование в первом раунде, даже если вам попадётся Микки О’Нил инвестиционного бизнеса. В любом случае тактика простая: придумайте бесконечную батарейку. ',
					min: 0,
                    max: 1
                }
			],
			testId: 2
		}, {
    		id: 3,
			internals: [
                {
                    idResult: 1,
                    title: '',
                    description: 'Вы отлично разбираетесь в голубых океанах и «идеальных клиентах». С вашими знаниями хоть куда — хоть в свой бизнес, хоть в маркетологи.',
                    min: 5,
                    max: 6
                },
                {
                    idResult: 2,
                    title: '',
                    description: 'Вы кое-что понимаете в маркетинге, и для бизнесмена этого вполне достаточно. А все остальное предоставьте профессиональному маркетологу — ваших познаний в этой сфере хватит, чтобы нанять толкового специалиста.',
					min: 2,
                    max: 4
                },
                {
                    idResult: 3,
                    title: '',
                    description: 'Похоже, маркетинг — это не для вас. Если у вас есть свой бизнес, но еще нет маркетолога, обязательно наймите его. Только сначала узнайте, каким должен быть хороший специалист в этой сфере. Ведь для некоторых маркетологов «идеальный клиент» — это работодатель, который ничего не смыслит в маркетинге и готов выделять на него любые деньги.',
					min: 0,
                    max: 1
                }
			],
			testId: 3
		},{
    		id: 4,
			internals: [
                {
                    idResult: 1,
                    title: '',
                    description: 'Оптимизация бизнес-расходов — задача непростая. В одних случаях нужно всего лишь знать, на чем можно сэкономить. В других — еще и пойти на компромисс с собой: отказаться сейчас от чего-то важного, чтобы в будущем получить гораздо больше. Вам свойственно и то, и другое — и вашему бизнесу это вдвойне на пользу. ',
                    min: 5,
                    max: 6
                },
                {
                    idResult: 2,
                    title: '',
                    description: 'В некоторых случаях для оптимизации бизнес-расходов нужно не только знать, как это сделать, но и пойти на компромисс с собой: отказаться сейчас от чего-то важного, чтобы в будущем получить гораздо больше. Последнее вам не всегда удается, но это не катастрофа. Трезво и своевременно оценивайте ваши возможности и перспективы — и ваш бизнес будет процветать. ',
					min: 2,
                    max: 4
                },
                {
                    idResult: 3,
                    title: '',
                    description: 'Вы знаете, как оптимизировать те или иные бизнес-расходы. Но далеко не всегда поступаете обдуманно, с расчетом на перспективу и с готовностью пойти на компромисс с собой: отказаться сейчас от чего-то важного, чтобы в будущем получить гораздо больше. Попробуйте пойти против своих желаний, больше прислушивайтесь к мнению коллег, действуйте максимально рассудительно — вашему бизнесу все это пойдет только на пользу.',
								min: 0,
                    max: 1
                }
			],
			testId: 4
		},{
    		id: 5,
			internals: [
        {
            idResult: 1,
            title: '',
            description: 'Вы&nbsp;видите людей насквозь&nbsp;&mdash; это дорогого стоит. Успех в&nbsp;бизнесе зиждется на&nbsp;силе и&nbsp;сплоченности коллектива. С&nbsp;вашей <nobr>прямо-таки</nobr> рентгеновской проницательностью вам вполне по&nbsp;силам собрать команду мечты. ',
            min: 6,
            max: 6
        },
        {
            idResult: 2,
            title: '',
            description: 'Вы&nbsp;отлично разбираетесь в&nbsp;людях, хотя порой вам попадаются личности, которых не&nbsp;так-то просто раскусить. Да&nbsp;и&nbsp;не&nbsp;нужно. Главное&nbsp;&mdash; со&nbsp;столь глубокой проницательностью вы&nbsp;всегда сможете разглядеть в&nbsp;человеке сильные стороны, чтобы найти им&nbsp;эффективное применение в&nbsp;вашем бизнесе. ',
						min: 4,
            max: 5
        },
        {
            idResult: 3,
            title: '',
            description: 'Вы&nbsp;неплохо разбираетесь в&nbsp;тонкостях человеческой натуры, но&nbsp;только если она не&nbsp;скрыта под толстым слоем грима, невидимого простым глазом. Присматривайтесь к&nbsp;людям повнимательнее&nbsp;&mdash; это поможет увидеть в&nbsp;них сильные стороны. А&nbsp;уж&nbsp;как их&nbsp;применить с&nbsp;пользой для бизнеса, никто не&nbsp;знает лучше вас.',
						min: 3,
            max: 3
        },
        {
            idResult: 4,
            title: '',
            description: 'Вы&nbsp;кое-что понимаете в&nbsp;людях, но&nbsp;зачастую видите человека таким, каким хотите, а&nbsp;не&nbsp;каким он&nbsp;является на&nbsp;самом деле. Почаще приглядывайтесь к&nbsp;людям. Это может видеть в&nbsp;них сильные и&nbsp;слабые стороны&nbsp;&mdash; качество, обязательное для любого успешного бизнесмена.',
						min: 2,
            max: 2
        },
        {
            idResult: 5,
            title: '',
            description: 'Чтобы научиться разбираться в&nbsp;хитросплетениях человеческой натуры, читайте книги по&nbsp;психологии. А&nbsp;главное&nbsp;&mdash; больше общайтесь с&nbsp;самыми разными людьми, приглядывайтесь к&nbsp;ним и&nbsp;анализируйте их&nbsp;поступки. Успешный предприниматель должен знать сильные и&nbsp;слабые стороны не&nbsp;только конкурентов, но&nbsp;и&nbsp;своих коллег.',
						min: 0,
            max: 1
        }
			],
			testId: 5
		},
		{
    		id: 7,
			internals: [
        {
            idResult: 1,
            title: '',
            description: 'Кадры решают все, и&nbsp;вам это прекрасно известно. Вы&nbsp;отличный руководитель&nbsp;&mdash; понимающий, рассудительный и&nbsp;дальновидный. Ваши коллеги ценят это и&nbsp;верят в&nbsp;вас. Какой&nbsp;бы курс дальнейшего развития бизнеса вы&nbsp;ни&nbsp;выбрали, верная команда всегда пойдет за&nbsp;вами&nbsp;&mdash; хоть через финансовый шторм, хоть на&nbsp;конкурентное столкновение. ',
            min: 6,
            max: 6
        },
        {
            idResult: 2,
            title: '',
            description: 'Вы&nbsp;умелый руководитель, но&nbsp;не&nbsp;все ваши кадровые решения можно назвать удачными. Чаще прислушивайтесь к&nbsp;мнению коллег, но&nbsp;и&nbsp;не&nbsp;игнорируйте, что подсказывают вам собственный опыт и&nbsp;здравый смысл. И&nbsp;тогда вам удастся собрать команду мечты, которая обязательно приведет вас к&nbsp;успеху.',
						min: 4,
            max: 5
        },
        {
            idResult: 3,
            title: '',
            description: 'Вы&nbsp;знаете, как набирать сотрудников и&nbsp;руководить командой, но&nbsp;далеко не&nbsp;всегда делаете это эффективно. Принимая важные кадровые решения, консультируйтесь с&nbsp;HR&nbsp;и&nbsp;следуйте советам, даже если с&nbsp;ними не&nbsp;согласны. Ваша главная задача&nbsp;&mdash; вести бизнес правильным курсом, а&nbsp;более узкие задачи предоставьте профильным специалистам.',
						min: 3,
            max: 3
        },
        {
            idResult: 4,
            title: '',
            description: 'Вы&nbsp;<nobr>кое-что</nobr> смыслите в&nbsp;кадровом управлении, но, чтобы набрать сильную команду, этого недостаточно. Предоставьте эту функцию <nobr>HR-отделу</nobr>, а&nbsp;сами просто контролируйте его работу, высказывайте пожелания, но&nbsp;не&nbsp;сильно настаивайте на&nbsp;них. Пусть кадровыми вопросами занимаются те, кто в&nbsp;этом действительно разбирается.',
						min: 2,
            max: 2
        },
        {
            idResult: 5,
            title: '',
            description: 'Вас можно назвать специалистом по&nbsp;кадрам, вернее, пока только начинающим. Но&nbsp;разве вам это так нужно? Пусть работой с&nbsp;персоналом занимается <nobr>HR-отдел</nobr> с&nbsp;минимумом вашего участия. В&nbsp;конце концов, у&nbsp;вас есть более крупная задача&nbsp;&mdash; вести бизнес правильным курсом. Лучше полностью посвятите себя этому.',
						min: 0,
            max: 1
        }
			],
			testId: 7
		},{
    		id: 8,
				internals: [
          {
              idResult: 1,
              title: '',
              description: 'Вы&nbsp;превосходно разбираетесь в&nbsp;технической части. Для вас телефон и&nbsp;интернет&nbsp;&mdash; это не&nbsp;только средства связи, но&nbsp;и&nbsp;хорошая возможность оптимизировать траты. В&nbsp;бизнесе не&nbsp;бывает лишних денег, и&nbsp;каждый сбережённый рубль в&nbsp;дальнейшем может принести два. Вы&nbsp;умеете экономить, а&nbsp;значит, у&nbsp;вас есть все шансы зарабатывать ещё больше. Так держать!',
              min: 6,
              max: 6
          },
          {
              idResult: 2,
              title: '',
              description: 'Вы&nbsp;хорошо разбираетесь в&nbsp;технической части и&nbsp;знаете, как экономить на&nbsp;корпоративной связи. Возможно, пока вы&nbsp;оптимизировали эти расходы не&nbsp;оптимально, но&nbsp;это не&nbsp;минус, а&nbsp;плюс. Ведь вы&nbsp;можете экономить на&nbsp;телефоне и&nbsp;интернете ещё больше&nbsp;&mdash; просто подумайте получше, как это сделать.',
							min: 4,
              max: 5
          },
          {
              idResult: 3,
              title: '',
              description: 'Вы&nbsp;умеете экономить на&nbsp;корпоративной связи, но, если вникните в&nbsp;детали глубже, сможете экономить ещё больше. Посоветуйтесь со&nbsp;знающими людьми, почитайте полезные статьи и&nbsp;форумы, чтобы эффективнее оптимизировать эту статью расходов. Ведь в&nbsp;бизнесе не&nbsp;бывает лишних денег, и&nbsp;каждый сэкономленный рубль в&nbsp;будущем может принести два. Чем не&nbsp;повод подтянуть технические знания?',
							min: 3,
              max: 3
          },
          {
              idResult: 4,
              title: '',
              description: 'Вы&nbsp;кое-что понимаете в&nbsp;экономии на&nbsp;корпоративной связи. Но, чтобы эффективно оптимизировать траты на&nbsp;телефон и&nbsp;интернет, этого мало. Обязательно пообщайтесь с&nbsp;теми, кто в&nbsp;этом разбирается. Пусть они расскажут вам, как устроен сложный мир проводов, спутников, сигналов и&nbsp;как всё это можно использовать с&nbsp;максимальной выгодой для бизнеса.',
							min: 2,
              max: 2
          },
          {
              idResult: 5,
              title: '',
              description: 'Если&nbsp;бы вы&nbsp;сдавали экзамен, вам&nbsp;бы наверняка влепили неуд. Но&nbsp;бизнес&nbsp;&mdash; это не&nbsp;учёба, это деньги. И&nbsp;только на&nbsp;корпоративной связи вы&nbsp;можете потерять их&nbsp;достаточно. Пообщайтесь со&nbsp;знающими людьми, почитайте полезные статьи и&nbsp;постарайтесь хотя&nbsp;бы немного оптимизировать эту статью расходов. В&nbsp;бизнесе не&nbsp;бывает пересдач&nbsp;&mdash; не&nbsp;ждите подходящего момента, начните прямо сейчас.',
							min: 0,
              max: 1
          }
				],
			testId: 8
		},{
    		id: 9,
				internals: [
          {
              idResult: 1,
              title: '',
              description: 'Вы&nbsp;не&nbsp;Илон Маск, но&nbsp;вашему стремлению к&nbsp;инновациям позавидуют многие. Вы&nbsp;не&nbsp;цепляетесь за&nbsp;старое и&nbsp;готовы пробовать любые новые решения, которые могут привести к&nbsp;успеху. Бизнес должен постоянно двигаться вперёд, и&nbsp;с&nbsp;таким продвинутым человеком, как вы, это движение ему обеспечено.',
              min: 6,
              max: 6
          },
          {
              idResult: 2,
              title: '',
              description: 'Вы&nbsp;настоящий инноватор и&nbsp;готовы использовать любые передовые технологии, чтобы прийти к&nbsp;успеху в&nbsp;бизнесе. Вернее почти любые&nbsp;&mdash; иногда сомнения всё-таки берут верх, и&nbsp;вы&nbsp;отказываетесь от&nbsp;риска, предпочитая новому хорошо проверенное старое. Но&nbsp;это не&nbsp;плохо, это здравый смысл. Продолжайте в&nbsp;том&nbsp;же духе&nbsp;&mdash; стремитесь к&nbsp;новому, но&nbsp;с&nbsp;умом, и&nbsp;у&nbsp;вас всё получится.',
							min: 4,
              max: 5
          },
          {
              idResult: 3,
              title: '',
              description: 'Вас можно назвать инноватором, но&nbsp;пока только начинающим. Вы&nbsp;открыты передовым решениям в&nbsp;бизнесе, но&nbsp;не&nbsp;всегда готовы пойти на&nbsp;риск, связанный с&nbsp;их&nbsp;внедрением. Не&nbsp;бойтесь рисковать&nbsp;&mdash; почаще пробуйте новое. Со&nbsp;временем вы&nbsp;почувствуете себя увереннее, и&nbsp;кто знает, быть может, станете новым Илоном Маском.',
							min: 3,
              max: 3
          },
          {
              idResult: 4,
              title: '',
              description: 'Вас трудно назвать инноватором. Вы&nbsp;не&nbsp;против передовых решений в&nbsp;бизнесе, но&nbsp;всё&nbsp;же предпочитаете использовать проверенные технологии. Не&nbsp;цепляйтесь за&nbsp;старое, хоть иногда пробуйте <nobr>что-нибудь</nobr> новое. Вряд&nbsp;ли вы&nbsp;станете вторым Илоном Маском, но&nbsp;вашему бизнесу это может пойти на&nbsp;пользу.',
							min: 1,
              max: 2
          },
          {
              idResult: 5,
              title: '',
              description: 'Вам чужды новые <nobr>бизнес-технологии</nobr>, вас вполне устраивает хорошо проверенное старое. А&nbsp;зря. Бизнес&nbsp;&mdash; это постоянное движение вперёд, он&nbsp;любит тех, кто готов рисковать и&nbsp;не&nbsp;боится использовать передовые решения. Попробуйте хоть раз внедрить <nobr>что-то</nobr> новое&nbsp;&mdash; быть может, вам понравится, а&nbsp;ваш бизнес полюбит вас ещё больше.',
							min: 0,
              max: 0
          }
				],
			testId: 9
		}
	];
    var trueCount = {};
    const myTestObj = {};

    function getTestResult(testElement) {
    	let totalVal = 0;
    	let testName;

        ga("send", "event", "test", "finish", $(testElement).find('.test-block__title').text());

    	Object.keys(testArr[testElement.attr('data-test')]).forEach((el, ind) => {
            trueCount[testElement.attr('data-test')][testElement.attr('data-test')] =  totalVal;

    		if (testArr[testElement.attr('data-test')][el].indexOf('true') !== -1) {
                trueCount[testElement.attr('data-test')][testElement.attr('data-test')] = ++totalVal;
			}
		});


        testResult.forEach((element, ind) => {
			if (element.testId === +testElement.attr('data-test')) {
				element.internals.forEach((val, ind) => {
				   if (trueCount[testElement.attr('data-test')][testElement.attr('data-test')] >= val.min && trueCount[testElement.attr('data-test')][testElement.attr('data-test')] <= val.max) {
                       $('.test-block__results').attr('data-result', val.idResult);
                       $('.test-block__results__share').attr('data-result', val.idResult);
                       testElement.find('.test-block__results__content h3').text(val.title);
                       testElement.find('.test-block__results__content').append(`<p>${val.description}</p>`);
					}
				})
			}
		});
	}

    const currentTestLength = {};

	setCurrentQuestionTitle();

    function setCurrentQuestionTitle() {
        [].slice.call(document.querySelectorAll('.test-block')).forEach((element, identifier) => {
            testJson.forEach(function (el) {
                if (el.idTest === +element.getAttribute('data-test')) {
                    $(element).find('.test-block__title').text(el.testTitle);
                    myTestObj[element.getAttribute('data-test')] = {};
                    trueCount[element.getAttribute('data-test')] = {};
                    currentTestLength[+element.getAttribute('data-test')] = el.internals.length;
                };
            });
        });
    }

    function setCurrentQuestion(currentTest, extraComponent) {
        Beeline.setQuestionsAnimation();


        if (currentTest === undefined) {
            // setTimeout(function() {
            //     ga("send", "event", "test", "question show " + extraComponent.find('.test-block__card').attr('data-question'), extraComponent.find('.test-block__title').text(), {nonInteraction: true});
            // }, 100);

            [].slice.call(document.querySelectorAll('.test-block')).forEach((element, identifier) => {
                testJson.forEach(function(val) {
                    if (val.idTest === +element.getAttribute('data-test')) {

                        currTestLength = val.internals.length;

                        val.internals.forEach(function(el){
                            if (+$(element).find('.test-block__card').attr('data-question') === el.idQuestion) {
                                $(element).find('.test-block__card__number__quest-number').text(el.idQuestion + '/' + currTestLength);
                                $(element).find('.test-block__card__question').append(`<p>${el.titleQuestion}</p>`);

                                $(element).find('.test-block__card__answers').html("");

                                el.leaves.forEach(function (el) {
                                    $(element).find('.test-block__card__answers').append(`
								<div class="test-block__card__answers__item" data-answer="${el.idAnswer}" data-truth="${el.correctAnswer}">
									<div class="test-block__card__answers__item--radio"></div>
									<div class="test-block__card__answers__item--text">${el.titleAnswer}</div>
								</div>
							`);
                                });
                            }
                        });
                    }
                });
            });
		} else {

            testJson.forEach(function(val) {
                if (val.idTest === +currentTest.attr('data-test')) {
                    setTimeout(function() {
                        ga("send", "event", "test", "question show " + currentTest.find('.test-block__card').attr('data-question'), currentTest.find('.test-block__title').text(), {nonInteraction: true});
                    }, 100);

                    val.internals.forEach(function(el){
                        if (+currentTest.find('.test-block__card').attr('data-question') === el.idQuestion) {
                            currentTest.find('.test-block__card__number__quest-number').text(el.idQuestion + '/' + currTestLength);
                            currentTest.find('.test-block__card__question').empty().append(`<p>${el.titleQuestion}</p>`);

                            currentTest.find('.test-block__card__answers').html("");

                            el.leaves.forEach(function (el) {
                                currentTest.find('.test-block__card__answers').append(`
								<div class="test-block__card__answers__item" data-answer="${el.idAnswer}" data-truth="${el.correctAnswer}">
									<div class="test-block__card__answers__item--radio"></div>
									<div class="test-block__card__answers__item--text">${el.titleAnswer}</div>
								</div>`);
                            });
                        }
                    });
                }
            });
		}
    }

	// setTimeout(() => setCurrentQuestion(undefined, ($('.beeline-wrapper').find('.active-test'))), 100);
    setTimeout(() => setCurrentQuestion(), 100);

    $(document).on('click', '.test-block__card__answers__item', function(e) {
        $(this).parent().find('.test-block__card__answers__item').removeClass('active');
        $(this).addClass('active');

        $(this).parent().next().find('a').addClass('active');

        myTestObj[$(this).parents('.test-block').attr('data-test')][$(this).parent().parent().attr('data-question')] = ($(this).attr("data-truth"));
        testArr[$(this).parents('.test-block').attr('data-test')] = myTestObj[$(this).parents('.test-block').attr('data-test')];

    });

    $('.test-block__card__next').on('click', function(e) {
    	e.preventDefault();
    	let w = $(window).width();

        $(this).find('a').removeClass('active');

        if (+$(this).parents('.test-block').find('.test-block__card').attr('data-question') === currentTestLength[$(this).parents('.test-block').attr('data-test')]
			&& $(this).parent().find('.test-block__card__answers__item.active').length > 0) {
            ga("send", "event", "test", "question answer " + (+$(this).parent().attr('data-question')), $(this).parent().parent().parent().find('.test-block__title').text());
            $(this).parents('.test-block').find('.test-block__card').addClass('card-visible');

            if(w < 700) {
            	$('body,html').animate({ scrollTop: $('.test-block__back').outerHeight() + $('.header-rbc').outerHeight() + $('.header-more').outerHeight() }, 800);
            }
            getTestResult($(this).parents('.test-block'));
            $(this).parents('.test-block').find('.test-block__results').removeClass('card-visible');
        }

        //made here a fix
    	if ($(this).parents('.test-block').find('.active').length > 0 && +$(this).parents('.test-block').find('.test-block__card').attr('data-question') < currentTestLength[$(this).parents('.test-block').attr('data-test')]) {
            $(this).parents('.test-block').find('.test-block__card').attr('data-question', +$(this).parents('.test-block').find('.test-block__card').attr('data-question') + 1);
            setCurrentQuestion($(this).parents('.test-block'));

			Beeline.setFlexMargin();
			if(w < 700) {
				$('body,html').animate({ scrollTop: $('.test-block__back').outerHeight() + $('.header-rbc').outerHeight() + $('.header-more').outerHeight() }, 800);
            }
            ga("send", "event", "test", "question answer " + (+$(this).parent().attr('data-question') - 1), $(this).parent().parent().parent().find('.test-block__title').text());
        }
    })
};

Beeline.testFunction = {
    init1() {
    	$('.interview-block__video__decypher').addClass('disabled-decypher');

        $(window).scroll(function() {
            this.init2();
        });

        $(window).load(function() {
            this.init2();
        });
    },
    init2() {
        $('.interview-block__main-tab--active .hidden-block').each(function(ind, val) {
            let blockPosition = $(val).offset().top;
            let windowPosition = $(window).scrollTop();

            if (blockPosition < windowPosition + 700) {
                $(val).addClass('animated-block');
            }
        })
	}

};

Beeline.decypherInterview = function() {
	$('.interview-block__video__decypher--img').hover(function() {
		$(this).prev().css('opacity', 1);
	}, function() {
		if (!$(this).hasClass('active')) {
			//$('.interview-block__video__decypher--text').css('opacity', 1);
		} else {
			$(this).prev().css('opacity', 0.5);
		}
	})
};

Beeline.animateAppearance = function() {
	let self = this;

	$('#show-interview-business, #show-interview-client').on('click', function() {

		if (!$(this).hasClass('active')) {
			if ($(window).width() < 1100) {
				$('.external-speaker-block').css('margin-top', '45px');
			}
			$(this).addClass('active');
			$(this).removeAttr('style');
			$(this).parents('.interview-block--wrapper').find('.interview-block__main-tab--active').find('.interview-block__interview').css('display', 'block');
			$(this).prev().css('opacity', 0.5);

	        $(window).scroll(function() {
	            animateIT()
	        });

	        $(window).load(function() {
	            animateIT()
	        });
		} else {
			$(this).removeClass('active');
			if ($(window).width() < 1100) {
				$('.external-speaker-block').css('margin-top', '45px');
			}
			$(window).off();
			$(this).parents('.interview-block--wrapper').find('.interview-block__main-tab--active').find('.interview-block__interview').css('display', 'none');
			$(this).parents('.interview-block--wrapper').find('.interview-block__main-tab--active').find('.interview-block__interview').children().removeClass('animated-block');

		}
	});

    function animateIT(){
        $('.interview-block__main-tab--active .hidden-block').each(function(ind, val) {
            let blockPosition = $(val).offset().top;
            let windowPosition = $(window).scrollTop();

            if ($(window).width() > 1000) {
	            if (blockPosition < windowPosition + 700) {
	                $(val).addClass('animated-block');
	            }
	        } else {
	        	if (blockPosition < windowPosition + 1100) {
	                $(val).addClass('animated-block');
	            }
	        }
        })
    }
};

Beeline.playInterview = function() {
	document.addEventListener('click', function(e) {
		if (e.target.id.indexOf('start-client-video') !== -1 || e.target.id.indexOf('start-business-video') !== -1) {
			$(e.target).parent().parent().find('.interview-block__video__block__filter').addClass('fading-interview');
			$(e.target).parent().parent().find('.interview-block__video__block__info').addClass('fading-interview');
		}
	});
};

Beeline.fixedTable = function() {

	if($('#title').length){
		let div = $('#title');
		let table = $('#content');
		let start = $(div).offset().top;
		let end = $(table).offset().top + $(table).height() - 250;

	  $.event.add(window, "scroll", function() {

	    let top = $(window).scrollTop();

	    $(div).css('position',((top)>start) ? 'fixed' : 'static');
	    $(div).css('top',((top)>start) ? '64px' : '');

	    if(top > end) {
	    	$(div).css('opacity','0');
	    }
	    if(top < end) {
	    	$(div).css('opacity','1');
	    }
	  });
	}
};

Beeline.getCurrentBookmark = function() {
	if (window.location.href.indexOf('.htmlbusinessVideoman') !== -1) {
		$('.interview-block__tab--bman').trigger('click');
	} else if (window.location.href.indexOf('.html#client') !== -1) {
		$('.interview-block__tab--client').trigger('click');
	} else if (window.location.href.indexOf('.htmlbusinessVideo-client') !== -1) {
		$('.interview-block__tab--bman').trigger('click');
	} else if (window.location.href.indexOf('interview-1.html')) {
		$('.interview-block__tab--bman').trigger('click');
	}
};

Beeline.playStop = function () {

	let currObj = this;

	currObj.flag_play_stop = true;
	let timerHover, moveHover;

	if(currObj.flag_play_stop) {

		$('.block-control').mousemove(function(event) {
			let self = $(this);
		  clearTimeout(moveHover);
		  if($(this).next().find('.full-block-control__slider--play').length) {
				$(this).next().find('.full-block-control__slider--play').css('opacity', '1');
			}else{
		  	$(this).next().find('.full-block-control__play').css('opacity', '1');
			}
		  $(this).next().find('.full-block-control__time').css('opacity', '0.3');
		 	$(this).next().find('.full-block-control__main-line').css('opacity', '0.6');
		  $(this).next().find('.full-block-control__sound').css('opacity', '1');

			moveHover = setTimeout(function() {
				if($(self).next().find('.full-block-control__slider--play').length) {
					$(self).next().find('.full-block-control__slider--play').css('opacity', '0');
				}else{
			  	$(self).next().find('.full-block-control__play').css('opacity', '0');
				}
				$(self).next().find('.full-block-control__play').css('opacity', '0');
		  	$(self).next().find('.full-block-control__time').css('opacity', '0');
		  	$(self).next().find('.full-block-control__main-line').css('opacity', '0');
		  	$(self).next().find('.full-block-control__sound').css('opacity', '0');
		  	}, 2000);
		});

		$('.block-control').hover(
		  function(event) {

		  	let  self = $(this);

				if($(this).hasClass('pause')) {
					event.preventDefault();
				}else{
					clearTimeout(moveHover);
					if($(this).next().find('.full-block-control__slider--play').length) {
						$(this).next().find('.full-block-control__slider--play').css('opacity', '1');
					}else{
				  	$(this).next().find('.full-block-control__play').css('opacity', '1');
					}
			  	$(this).next().find('.full-block-control__time').css('opacity', '0.3');
			  	$(this).next().find('.full-block-control__main-line').css('opacity', '0.6');
			  	$(this).next().find('.full-block-control__sound').css('opacity', '1');

			  	timerHover = setTimeout(function() {
			  		if($(this).next().find('.full-block-control__slider--play').length) {
							$(this).next().find('.full-block-control__slider--play').css('opacity', '0');
						}else{
					  	$(this).next().find('.full-block-control__play').css('opacity', '0');
						}
			  		$(self).next().find('.full-block-control__play').css('opacity', '0');
			  		$(self).next().find('.full-block-control__time').css('opacity', '0');
			  		$(self).next().find('.full-block-control__main-line').css('opacity', '0');
			  		$(self).next().find('.full-block-control__sound').css('opacity', '0');
			  	}, 3000);
				}
		  },

		  function() {
		  	if($(this).hasClass('pause')) {
					event.preventDefault();
				}else{
					clearTimeout(timerHover);
					clearTimeout(moveHover);
					if($(this).next().find('.full-block-control__slider--play').length) {
						$(this).next().find('.full-block-control__slider--play').css('opacity', '0');
					}else{
				  	$(this).next().find('.full-block-control__play').css('opacity', '0');
					}
			  	$(this).next().find('.full-block-control__play').css('opacity', '0');
			  	$(this).next().find('.full-block-control__time').css('opacity', '0');
			  	$(this).next().find('.full-block-control__main-line').css('opacity', '0');
			  	$(this).next().find('.full-block-control__sound').css('opacity', '0');
			  }
		  }
		);

		//Для полосы контролов
		$('.full-block-control').hover(

		  function(event) {
		  	if($(this).find('.full-block-control__play').hasClass('full-block-control__play--pause')) {
					event.preventDefault();
				}else{
					clearTimeout(timerHover);
					clearTimeout(moveHover);
					if($(this).find('.full-block-control__slider--play').length) {
						$(this).find('.full-block-control__slider--play').css('opacity', '1');
					}else{
			  		$(this).find('.full-block-control__play').css('opacity', '1');
					}
			  	$(this).find('.full-block-control__time').css('opacity', '0.3');
			  	$(this).find('.full-block-control__main-line').css('opacity', '0.6');
			  	$(this).find('.full-block-control__sound').css('opacity', '1');
			  }
		  },

		  function(event) {
		  	if($(this).find('.full-block-control__play').hasClass('full-block-control__play--pause')) {
					event.preventDefault();
				}else{
					if($(this).find('.full-block-control__slider--play').length) {
						$(this).find('.full-block-control__slider--play').css('opacity', '0');
					}else{
			  		$(this).find('.full-block-control__play').css('opacity', '0');
					}
			  	$(this).find('.full-block-control__play').css('opacity', '0');
			  	$(this).find('.full-block-control__time').css('opacity', '0');
			  	$(this).find('.full-block-control__main-line').css('opacity', '0');
			  	$(this).find('.full-block-control__sound').css('opacity', '0');
			  }
		  }
		);
	}

	$('.block-control').on('click', function(ev){

		let self = $(this);

		if($(this).hasClass('pause')) {
      		ga("send", "event", "video", "play", $(this).parent().find('.interview-block__video__block__info h3').text());
      		//console.log(myTimer, 123);

			$(this).next().find('.full-block-control__play').removeClass('full-block-control__play--pause');
			$(this).removeClass('pause');

			$(this).children('.block-control__play').css('display', 'block');
			$(this).children('.block-control__play').css('opacity', '1');
			$(this).children('.block-control__play').addClass('play-pause-second');
			//Если ролик на паузе
			let timerHover1 = setTimeout(function() {
		  		$(self).children('.block-control__play').removeAttr('style')
		  		$(self).children('.block-control__play').removeClass('play-pause-second');
		  }, 500);

		  //Плашка
		  $(this).next().find('.full-block-control__play').removeClass('for-control');
		  $(this).next().find('.full-block-control__time').removeClass('for-control-time');
		  $(this).next().find('.full-block-control__main-line').removeClass('for-control-bar');
		  $(this).next().find('.full-block-control__sound').removeClass('for-control');

			//Воспроизводим видео
			if(currObj.flag_video) {
        playerBusiness.playVideo();
			  ev.preventDefault();
	      currObj.flag_play1 = true;
			} else{
				playerClient.playVideo();
	      currObj.flag_play2 = true;
			}

      currObj.flag_play_stop = true;

		} else {
			clearInterval(myTimer);
      		ga("send", "event", "video", "pause", $(this).parent().find('.interview-block__video__block__info h3').text())

			$(this).next().children('.full-block-control__play').addClass('full-block-control__play--pause');
			$(this).addClass('pause');

			$(this).next().find('.full-block-control__play').addClass('for-control');
		  $(this).next().find('.full-block-control__time').addClass('for-control-time');
		  $(this).next().find('.full-block-control__main-line').addClass('for-control-bar');
		  $(this).next().find('.full-block-control__sound').addClass('for-control');

			$(this).children('.block-control__play').css('display', 'none');
			$(this).children('.block-control__pause').css('display', 'block');
			$(this).children('.block-control__pause').addClass('play-pause-second');
			// $(this).children('.block-control__pause').css('opacity', '1');
			//Если ролик на паузе
			let timerHover1 = setTimeout(function() {
		  		$(self).children('.block-control__pause').removeAttr('style');
		  		$(self).children('.block-control__pause').removeClass('play-pause-second');
		  }, 500);

			//Паузим видео
			if(currObj.flag_video) {

				//Если видео было запущена на второй вкладке
				if(currObj.flag_play2){

	        		playerClient.pauseVideo();
		    		ev.preventDefault();

		      		currObj.flag_play2 = false;
				}

				playerBusiness.pauseVideo();
	      currObj.flag_play1 = false;

			}else {

				//Если видео было запущена на первой вкладке вкладке
				if(currObj.flag_play1){
					playerBusiness.pauseVideo();
			    ev.preventDefault();
		     	currObj.flag_play1 = false;
				}

				playerClient.pauseVideo();
			  ev.preventDefault();
	      currObj.flag_play2 = false;
			}

      currObj.flag_play_stop = false;
		}
	});

	$('.full-block-control__play').on('click', function(ev){
		$(this).parent().prev('.block-control').trigger('click');
	});
};

Beeline.muteVideo = function() {

	let currObj = this;

	$('.full-block-control__sound').on('click', function() {

		let player = $(this).parent().next().find('iframe').attr('id');
		if(player === 'business-video') {
			if($(this).hasClass('full-block-control__sound--mute')) {
				playerBusiness.unMute();
				$(this).removeClass('full-block-control__sound--mute');
			}else{
				playerBusiness.mute();
				$(this).addClass('full-block-control__sound--mute');
			}
		}
		if(player === 'client-video') {
			if($(this).hasClass('full-block-control__sound--mute')) {
				playerClient.unMute();
				$(this).removeClass('full-block-control__sound--mute');
			}else{
				playerClient.mute();
				$(this).addClass('full-block-control__sound--mute');
			}
		}

		//Слайдеры
		if(player === 'client-video-1') {
			if($(this).hasClass('full-block-control__sound--mute')) {
				playerClient1.unMute();
				$(this).removeClass('full-block-control__sound--mute');
			}else{
				playerClient1.mute();
				$(this).addClass('full-block-control__sound--mute');
			}
		}
		if(player === 'client-video-2') {
			if($(this).hasClass('full-block-control__sound--mute')) {
				playerClient2.unMute();
				$(this).removeClass('full-block-control__sound--mute');
			}else{
				playerClient2.mute();
				$(this).addClass('full-block-control__sound--mute');
			}
		}
		if(player === 'client-video-3') {
			if($(this).hasClass('full-block-control__sound--mute')) {
				playerClient3.unMute();
				$(this).removeClass('full-block-control__sound--mute');
			}else{
				playerClient3.mute();
				$(this).addClass('full-block-control__sound--mute');
			}
		}
		if(player === 'client-video-4') {
			if($(this).hasClass('full-block-control__sound--mute')) {
				playerClient4.unMute();
				$(this).removeClass('full-block-control__sound--mute');
			}else{
				playerClient4.mute();
				$(this).addClass('full-block-control__sound--mute');
			}
		}
		if(player === 'client-video-5') {
			if($(this).hasClass('full-block-control__sound--mute')) {
				playerClient5.unMute();
				$(this).removeClass('full-block-control__sound--mute');
			}else{
				playerClient5.mute();
				$(this).addClass('full-block-control__sound--mute');
			}
		}
		if(player === 'client-video-6') {
			if($(this).hasClass('full-block-control__sound--mute')) {
				playerClient6.unMute();
				$(this).removeClass('full-block-control__sound--mute');
			}else{
				playerClient6.mute();
				$(this).addClass('full-block-control__sound--mute');
			}
		}

		if(player === 'client-video-7') {
			if($(this).hasClass('full-block-control__sound--mute')) {
				playerClient7.unMute();
				$(this).removeClass('full-block-control__sound--mute');
			}else{
				playerClient7.mute();
				$(this).addClass('full-block-control__sound--mute');
			}
		}

		if(player === 'client-video-8') {
			if($(this).hasClass('full-block-control__sound--mute')) {
				playerClient8.unMute();
				$(this).removeClass('full-block-control__sound--mute');
			}else{
				playerClient8.mute();
				$(this).addClass('full-block-control__sound--mute');
			}
		}

    if(player === 'client-video-9') {
      if($(this).hasClass('full-block-control__sound--mute')) {
        playerClient9.unMute();
        $(this).removeClass('full-block-control__sound--mute');
      }else{
        playerClient9.mute();
        $(this).addClass('full-block-control__sound--mute');
      }
    }
	});
};


Beeline.changeInterviewTab = function() {
	let currObj = this;

	$('.interview-block__tab__interview').on('click', function() {

		if($(window).width() < 1100) {
			$('.external-speaker-block').css('margin-top', '45px');
			$('.external-speaker-block').css('padding-top', '45px');
		}

		$('.external-speaker-block').css('margin-top', '45px');

		let self = $(this);
		let currentClickTab = $(this).attr('tab-index');

        $(window).off();

		//currObj.animateAppearance(); //{mark}

		$('.interview-block__main-tab').each((ind, el) => {
			if ($(el).attr('data-tab') === currentClickTab) {

				if($(el).attr('data-tab') == 2) {
					//Вторая вкладка
					currObj.flag_video = false;

					if(currObj.flag_play1) {
						let example = $('.interview-block__main-tab').get(0);
						$(example).find('.block-control').trigger('click');
					}

				}else{
					//Первая вкладка
					currObj.flag_video = true;

					if(currObj.flag_play2) {
						let example = $('.interview-block__main-tab').get(-1);
						$(example).find('.block-control').trigger('click');
					}
				}

				let currentEl = +$(el).attr('data-tab');

				$('.interview-block__tab__interview').removeClass('active');
                $('.interview-block__main-tab').removeClass('interview-block__main-tab--active');

                $('.interview-block__main-tab[data-tab=' + currentEl + ']').addClass('interview-block__main-tab--active');

				$('.interview-block__main-tab').css('display', 'none');

				self.addClass('active');
				// self.removeAttr('style');
				$(el).css('display', 'block');

                if ($('.interview-block__main-tab--active').find('.interview-block__video__decypher--img').hasClass('active')) {
                    $('.interview-block__main-tab--active').find('.interview-block__video__decypher--img').trigger('click');
										$('.interview-block__main-tab--active').find('.interview-block__video__decypher--img').css('opacity', '1');
										$('.interview-block__main-tab--active').find('.interview-block__video__decypher--text').css('opacity', '1');
				}
			}
		});

		$('.inter-block__speakers--wrapper').each((ind, el) => {
			if ($(el).attr('speakers-tab') === currentClickTab) {
                $('.inter-block__speakers--wrapper').removeClass('active');

                $(el).addClass('active');
			}
		})
	})
};

Beeline.getNextPrevTest = function() {
	let self  = this;

	function showTest() {
		$('.test-block').each((ind, val) => {
			if (+$(val).attr('data-test') === +window.location.href.match(/test_\d/)[0].match(/\d/)[0]) {
				$('.test-block').removeClass('active-test');
				$(val).addClass('active-test');

				Beeline.setFlexMargin();

				self.setQuestionsAnimation();

                ga("send", "event", "test", "question show " + $('.beeline-wrapper').find('.active-test').find('.test-block__card').attr('data-question'), $('.beeline-wrapper').find('.active-test').find('.test-block__title').text(), {nonInteraction: true})
                ga("send", "event", "test", "start", $('.beeline-wrapper').find('.active-test').find('.test-block__title').text(), {nonInteraction: true});
			}
		});
	};

	showTest();

    $('.test-block__other-test__prev a').on('click', function() {
        setTimeout(function() {
						Beeline.setFlexMargin();
            showTest()
        }, 0);
    });
    $('.test-block__other-test__next a').on('click', function() {
        setTimeout(function() {
						Beeline.setFlexMargin();
            showTest()
        }, 0);
    });
};

Beeline.disableTestLink = function() {
	$('.disabled-test__prev').on('click', function(e) {
		$(this).click(false);
	})
}

Beeline.formValidation = function () {

	var name,
		email,
		company,
		telephone;

	//Проверка "Представтесь"
	$("#name").change(function () {
		name = $.trim($("#name").val());
		var expName = /^[а-яА-ЯёЁa-zA-Z\s-]+$/g;
		var resName = name.search(expName);
		if (resName == -1) {
			$('#name').removeClass('ok').addClass('error');
			Statname = 0;
		} else {
			$("#name").removeClass('error').addClass('ok');
			Statname = 1;
		}
	});

	$("#company").change(function () {
		company = $.trim($("#company").val());
		var expCompany = /^[а-яА-ЯёЁa-zA-Z\s-]+$/g;
		var resCompany = company.search(expCompany);
		if (resCompany == -1) {
			$('#company').removeClass('ok').addClass('error');
			Statcompany = 0;
		} else {
			$("#company").removeClass('error').addClass('ok');
			Statcompany = 1;
		}
	});

	//Проверка email
	$("#email").change(function () {
		email = $("#email").val();
		var expEmail = /^[a-z0-9_\-\.]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
		var resEmail = email.search(expEmail);
		if (resEmail == -1) {
			$('#email').removeClass('ok').addClass('error');
			Statemail = 0;
		} else {
			$('#email').removeClass('error').addClass('ok');
			Statemail = 1;
		}
	});

	//telephone
	$("#telephone").change(function () {
		telephone = $.trim($("#telephone").val());
		var expTelephone = /^( +)?((\+?7|8) ?)?((\(\d{3}\))|(\d{3}))?( )?(\d{3}[\- ]?\d{2}[\- ]?\d{2})( +)?$/i;
		var resTelephone = telephone.search(expTelephone);
		if (resTelephone == -1) {
			$('#telephone').removeClass('ok').addClass('error');
			Stattelephone = 0;
		} else {
			$("#telephone").removeClass('error').addClass('ok');
			Stattelephone = 1;
		}
	});

	jQuery(function($){
 		$("#telephone").mask("+7 (999) 999-99-99");
	});

	$('#submit-form').on('click', function(event) {
		event.preventDefault();

		if(Statname == 1 && Statcompany == 1 && Statemail == 1 && Stattelephone == 1) {

			let slide = $('.slick-active').attr('data-id');

			let data = {
				workFlowId: Beeline.workFlowId,
				name: $(this).parent().find('#name').val(),
				email: $(this).parent().find('#email').val(),
				companyName: $(this).parent().find('#company').val(),
				ctn: $(this).parent().find('#telephone').val().slice(2, $(this).parent().find('#telephone').val().length).match(/\d/g).join('')
			};

			let path = $(this).parent().attr('action');

			$.ajax({
				method: 'GET',
				url: 'https://apipromo.beeline.ru/B2BRbk/submit',
				data: data
			}).done(function (data) {
				if (data.crmCaseId) {
					$('.connect-form').css('display', 'none');
					$('.form-block__container__ok').fadeIn('slow');
	                ga("send", "event", "form", "success");
	                $('#submit-form').append('<img src="https://ad.doubleclick.net/ddm/activity/src=5291139;type=doubl018;cat=doubl0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" alt="" style="visibility: hidden; opacity: 0; position: absolute;"/>');
				}
			});

		} else{
			if(Statname == 0) {
				$('#name').addClass('error').removeClass('ok')
			}
			if(Statcompany == 0) {
				$('#company').addClass('error').removeClass('ok');
			}
			if(Statemail == 0) {
				$('#email').addClass('error').removeClass('ok');
			}
			if(Stattelephone == 0) {
				$('#telephone').addClass('error').removeClass('ok');
			}
		}
	});
};

Beeline.borderAnimate = function() {
	if ($(window).width() > 1100) {
		$('.case-animate').hover(function () {
			$(this).find('.border-block').addClass('border-block--animated');
	    }, function() {
	        $(this).find('.border-block').removeClass('border-block--animated');
		})
	}
};

Beeline.playVideo = function() {
 //    $('.video-slider').delegate('.slick-arrow', 'click', function() {
 //        if ($('.slick-slide').hasClass('slick-active') === true ) {
 //            $("#client-video").each(function() {
 //                $(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
 //                $('.interview-block__video__block__info').removeClass('fading-interview');
 //                $('.interview-block__video__block__filter').removeClass('fading-interview');
 //            });
 //        }
 //    });

    let currObj = this;

    $('#start-business-video').on('click', function(e) {
    	currObj.flag_play1 = true;
    	playerBusiness.playVideo();

    	setTimeout(()=>{
    		$(this).parent().parent().find('.full-block-control').css('display', 'block');
    	}, 1500);
			$(this).parent().parent().find('.video_muted').css('display', 'block');

        ga("send", "event", "video", "start",  $(this).parent().find('h3').text())
        e.preventDefault();
	});

	$(document).delegate('#start-client-video', 'click', function(e) {
    	currObj.flag_play2 = true;
        playerClient.playVideo();
        setTimeout(()=>{
        	$(this).parent().parent().find('.full-block-control').css('display', 'block');
        }, 1500);
        $(this).parent().parent().find('.video_muted').css('display', 'block');

        ga("send", "event", "video", "start",  $(this).parent().find('h3').text())
        e.preventDefault();
    });
}

Beeline.sendCRM = {
	startMethod() {
		$.ajax({
			url: 'https://apipromo.beeline.ru/B2BRbk/start',
			method: 'GET'
		}).done((data) => {
			Beeline.workFlowId = data.id;
		})
	},
	saveMethod() {
		let isFilled = false;
		let testArr = [];

		$('#form-reg').on('focusout', function() {

			$('#form-reg input').each((ind, el) => {
				if ($(el).val() === '') {
					testArr.push(false);
				}
			});

			if (testArr.indexOf(false) === -1 && !isFilled && Statname === 1 && Statemail === 1 && Statcompany === 1) {
				let data = {
					workFlowId: Beeline.workFlowId,
					name: $(this).find('#name').val(),
					email: $(this).find('#email').val(),
					companyName: $(this).find('#company').val(),
					ctn: $(this).find('#telephone').val().slice(2, $(this).parent().find('#telephone').val().length).match(/\d/g).join('')
					// slide: $('.slick-active').attr('data-id')
				};

				$.ajax({
					url: 'https://apipromo.beeline.ru/B2BRbk/save',
					method: 'GET',
					data: data
				}).done(() => {
					isFilled = true;
				}).fail(() => {
					console.log('Please check all your fields on correct filled!');
				});
			} else {
				testArr = [];
			}
		})
	}
}

Beeline.toggleSpeakersSlider = function() {
	if ($(window).width() < 699) {
		$('.speakers').slick({
			arrows: true,
			autoplay: false,
			prevArrow: '<button class="interview-block__speakers__button interview-block__speakers__button--prev"></button>',
			nextArrow: '<button class="interview-block__speakers__button interview-block__speakers__button--next"></button>',
			responsive: [
			    {
			      breakpoint: 699,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			      }
			    },
			]
		});
	}
}

$(document).ready(function() {
		let togglePopUp = window.location.hash.length > 3 ? true: false;

		if (togglePopUp) {
			$('.contest-modal-popup 	.modal-popup').addClass('modal-popup--show');
			$('.modal-popup__bg').addClass('modal-popup__bg--show');
		}

    $('.button_popup').click(function(e) {
        e.preventDefault();
		$('.button-popup').show();
        $('.modal-popup').addClass('modal-popup--show');
        $('.modal-popup__bg').addClass('modal-popup__bg--show');
        $('.modal-popup__popup').addClass('modal-popup__popup--show');
    });
    $('.modal-popup__bg, .modal-popup__close').click(function(e) {
        e.preventDefault();
        $('.button-popup').hide();
        $('.modal-popup').removeClass('modal-popup--show');
        $('.modal-popup__bg').removeClass('modal-popup__bg--show');
        $('.modal-popup__popup').removeClass('modal-popup__popup--show');
        //$("#business-video").each(function() {
            playerBusiness.stopVideo();
            //$(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
        //});
        $('.interview-block__video__block__info').removeClass('fading-interview');
        $('.interview-block__video__block__filter').removeClass('fading-interview');
        //Временное решение проблемы
        $('.block-control').attr('style','');
        $('.block-control__pause').attr('style','');
        $('.block-control__play').attr('style','');

        //Плашка контролов
        if($(this).prev().find('.full-block-control__play').hasClass('full-block-control__play--pause')) {
        	$(this).prev().find('.full-block-control__play').removeClass('full-block-control__play--pause');
        }
        $(this).prev().find('.full-block-control').removeAttr('style');
        $(this).prev().find('.full-block-control').children('.full-block-control__main-line__progress').removeAttr('style');
    });
});

Beeline.moveDown = function() {
	if ($(window).width() < 1100) {
		$('.extra-mobile-content').append('<span class="extra-mobile-content__arrow"></span>');

		$('.extra-mobile-content__arrow').on('click', function() {
		    $('html, body').animate({scrollTop: ($('.jumbotron').offset().top + $('.jumbotron').outerHeight()) + 'px'}, 800);
		});
	}
};

Beeline.addMarginClass = function() {
	if ($(window).width() < 1100 && /test-1/.test(location.pathname)) {
		$('.beeline-wrapper').addClass('beeline-wrapper--margin');
	}
};

Beeline.imageArticle = function () {

	var w = $(window).width();

	if (w > 700) {
		var sizeImage = function sizeImage() {
			if ($('.container').length && $('.image_artical').length) {
				var widthLeft = ($(window).width() - 780) / 2;
				var widthForImage = 780 + widthLeft;
				$('.image_artical').css('width', widthForImage + 'px');
			}
		};

		sizeImage();

		$(window).resize(function () {
			sizeImage();
		});
	}
};


Beeline.addSlickListeners = function() {
    let currObj = this;

    $('.slick-next, .slick-prev').on('click', function() {
    	clearInterval(myTimer);

    	playerClient1.pauseVideo();
    	playerClient2.pauseVideo();


		//Cтатьи
    	if (location.pathname.match(/article-3/) !== null && location.pathname.match(/article-3/).length > 0) {
    		playerClient3.pauseVideo();
    	}
      if (location.pathname.match(/article-4/) !== null && location.pathname.match(/article-4/).length > 0) {
          playerClient3.pauseVideo();
          playerClient4.pauseVideo();
      }
      if (location.pathname.match(/article-5/) !== null && location.pathname.match(/article-5/).length > 0) {
          playerClient3.pauseVideo();
          playerClient4.pauseVideo();
          playerClient5.pauseVideo();
      }
      if (location.pathname.match(/article-6/) !== null && location.pathname.match(/article-6/).length > 0) {
          playerClient3.pauseVideo();
          playerClient4.pauseVideo();
          playerClient5.pauseVideo();
          playerClient6.pauseVideo();
      }
    	if (location.pathname.match(/article-7/) !== null && location.pathname.match(/article-7/).length > 0) {
	      playerClient3.pauseVideo();
	      playerClient4.pauseVideo();
	      playerClient5.pauseVideo();
	      playerClient6.pauseVideo();
	      playerClient7.pauseVideo();
    	}
			if (location.pathname.match(/article-8/) !== null && location.pathname.match(/article-8/).length > 0) {
	      playerClient3.pauseVideo();
	      playerClient4.pauseVideo();
	      playerClient5.pauseVideo();
	      playerClient6.pauseVideo();
	      playerClient7.pauseVideo();
	      playerClient8.pauseVideo();
    	}

      if (location.pathname.match(/article-9/) !== null && location.pathname.match(/article-9/).length > 0) {
        playerClient3.pauseVideo();
        playerClient4.pauseVideo();
        playerClient5.pauseVideo();
        playerClient6.pauseVideo();
        playerClient7.pauseVideo();
        playerClient8.pauseVideo();
        playerClient9.pauseVideo();
      }

		//Cоветы
        if (location.pathname.match(/advice-3/) !== null && location.pathname.match(/advice-3/).length > 0) {
    		playerClient3.pauseVideo();
    	}
    	if (location.pathname.match(/advice-4/) !== null && location.pathname.match(/advice-4/).length > 0) {
    		playerClient3.pauseVideo();
    		playerClient4.pauseVideo();
    	}
    	if (location.pathname.match(/advice-5/) !== null && location.pathname.match(/advice-5/).length > 0) {
    		playerClient3.pauseVideo();
    		playerClient4.pauseVideo();
    		playerClient5.pauseVideo();
    	}
    	if (location.pathname.match(/advice-6/) !== null && location.pathname.match(/advice-6/).length > 0) {
    		playerClient3.pauseVideo();
    		playerClient4.pauseVideo();
    		playerClient5.pauseVideo();
    		playerClient6.pauseVideo();
    	}
    	if (location.pathname.match(/advice-7/) !== null && location.pathname.match(/advice-7/).length > 0) {
    		playerClient3.pauseVideo();
    		playerClient4.pauseVideo();
    		playerClient5.pauseVideo();
    		playerClient6.pauseVideo();
    		playerClient7.pauseVideo();
    	}
			if (location.pathname.match(/advice-8/) !== null && location.pathname.match(/advice-8/).length > 0) {
    		playerClient3.pauseVideo();
    		playerClient4.pauseVideo();
    		playerClient5.pauseVideo();
    		playerClient6.pauseVideo();
    		playerClient7.pauseVideo();
    		playerClient8.pauseVideo();
    	}
      if (location.pathname.match(/advice-9/) !== null && location.pathname.match(/advice-9/).length > 0) {
        playerClient3.pauseVideo();
        playerClient4.pauseVideo();
        playerClient5.pauseVideo();
        playerClient6.pauseVideo();
        playerClient7.pauseVideo();
        playerClient8.pauseVideo();
        playerClient9.pauseVideo();
      }
    	//Лайфхаки
			if (location.pathname.match(/lifehack-3/) !== null && location.pathname.match(/lifehack-3/).length > 0) {
					playerClient3.pauseVideo();
			}
			if (location.pathname.match(/lifehack-4/) !== null && location.pathname.match(/lifehack-4/).length > 0) {
					playerClient3.pauseVideo();
					playerClient4.pauseVideo();
			}
			if (location.pathname.match(/lifehack-5/) !== null && location.pathname.match(/lifehack-5/).length > 0) {
					playerClient3.pauseVideo();
					playerClient4.pauseVideo();
					playerClient5.pauseVideo();
			}
			if (location.pathname.match(/lifehack-6/) !== null && location.pathname.match(/lifehack-6/).length > 0) {
					playerClient3.pauseVideo();
					playerClient4.pauseVideo();
					playerClient5.pauseVideo();
					playerClient6.pauseVideo();
			}
			if (location.pathname.match(/lifehack-7/) !== null && location.pathname.match(/lifehack-7/).length > 0) {
					playerClient3.pauseVideo();
					playerClient4.pauseVideo();
					playerClient5.pauseVideo();
					playerClient6.pauseVideo();
					playerClient7.pauseVideo();
			}
			if (location.pathname.match(/lifehack-8/) !== null && location.pathname.match(/lifehack-8/).length > 0) {
					playerClient3.pauseVideo();
					playerClient4.pauseVideo();
					playerClient5.pauseVideo();
					playerClient6.pauseVideo();
					playerClient7.pauseVideo();
					playerClient8.pauseVideo();
			}

			if (location.pathname.match(/lifehack-9/) !== null && location.pathname.match(/lifehack-9/).length > 0) {
				playerClient3.pauseVideo();
				playerClient4.pauseVideo();
				playerClient5.pauseVideo();
				playerClient6.pauseVideo();
				playerClient7.pauseVideo();
				playerClient8.pauseVideo();
				playerClient9.pauseVideo();
			}

    	$('.block-control--slider-1, .block-control--slider-2, .block-control--slider-3, .block-control--slider-4, .block-control--slider-5, .block-control--slider-6, .block-control--slider-7, .block-control--slider-8, .block-control--slider-9').addClass('pause');
    	$('.full-block-control__slider--play').addClass('full-block-control__slider--play--pause')
    });
};

Beeline.playVideoSlider = function() {
    let currObj = this;

    let moveHover, timerHover;

    $('#start-client-video-1, #start-client-video-2, #start-client-video-3, #start-client-video-4, #start-client-video-5, #start-client-video-5, #start-client-video-6, #start-client-video-7, #start-client-video-8, #start-client-video-9').on('click', function(e) {

    	setTimeout(()=>{
    		$(this).parent().parent().find('.full-block-control').css('display', 'block');
    		if($(this).parent().parent().find('.full-block-control__slider--play').hasClass('full-block-control__slider--play--pause')) {
					$(this).parent().parent().find('.full-block-control__slider--play').removeClass('full-block-control__slider--play--pause');
    		}
    	}, 1500);

    	$(this).parent().parent().find('.interview-block__video__block__muted').removeClass('pause');
    	$(this).parent().parent().find('.interview-block__video__block__muted');

    	$('.block-control--slider-1, .block-control--slider-2, .block-control--slider-3, .block-control--slider-4, .block-control--slider-5, .block-control--slider-6, .block-control--slider-7, .block-control--slider-8, .block-control--slider-9').each((ind, el) => {
				//Начало большого блока с ховерами
				$(el).mousemove(function(event) {
					let self = $(this);
				  clearTimeout(moveHover);
				  if($(this).next().find('.full-block-control__slider--play').length) {
						$(this).next().find('.full-block-control__slider--play').css('opacity', '1');
					}else{
				  	$(this).next().find('.full-block-control__play').css('opacity', '1');
					}
				  $(this).next().find('.full-block-control__time').css('opacity', '0.3');
				 	$(this).next().find('.full-block-control__main-line').css('opacity', '0.6');
				  $(this).next().find('.full-block-control__sound').css('opacity', '1');

					moveHover = setTimeout(function() {
						if($(self).next().find('.full-block-control__slider--play').length) {
							$(self).next().find('.full-block-control__slider--play').css('opacity', '0');
						}else{
					  	$(self).next().find('.full-block-control__play').css('opacity', '0');
						}
						$(self).next().find('.full-block-control__play').css('opacity', '0');
				  	$(self).next().find('.full-block-control__time').css('opacity', '0');
				  	$(self).next().find('.full-block-control__main-line').css('opacity', '0');
				  	$(self).next().find('.full-block-control__sound').css('opacity', '0');
				  }, 2000);
				});

				$(el).hover(
				  function(event) {
				  	let  self = $(this);

						if($(this).hasClass('pause')) {
							event.preventDefault();
						}else{
							clearTimeout(moveHover);
							if($(this).next().find('.full-block-control__slider--play').length) {
								$(this).next().find('.full-block-control__slider--play').css('opacity', '1');
							}else{
						  	$(this).next().find('.full-block-control__play').css('opacity', '1');
							}
					  	$(this).next().find('.full-block-control__time').css('opacity', '0.3');
					  	$(this).next().find('.full-block-control__main-line').css('opacity', '0.6');
					  	$(this).next().find('.full-block-control__sound').css('opacity', '1');

					  	timerHover = setTimeout(function() {
					  		if($(this).next().find('.full-block-control__slider--play').length) {
									$(this).next().find('.full-block-control__slider--play').css('opacity', '0');
								}else{
							  	$(this).next().find('.full-block-control__play').css('opacity', '0');
								}
					  		$(self).next().find('.full-block-control__play').css('opacity', '0');
					  		$(self).next().find('.full-block-control__time').css('opacity', '0');
					  		$(self).next().find('.full-block-control__main-line').css('opacity', '0');
					  		$(self).next().find('.full-block-control__sound').css('opacity', '0');
					  	}, 3000);
						}
				  },

				  function() {
				  	if($(this).hasClass('pause')) {
							event.preventDefault();
						}else{
							clearTimeout(timerHover);
							clearTimeout(moveHover);
							if($(this).next().find('.full-block-control__slider--play').length) {
								$(this).next().find('.full-block-control__slider--play').css('opacity', '0');
							}else{
						  	$(this).next().find('.full-block-control__play').css('opacity', '0');
							}
					  	$(this).next().find('.full-block-control__play').css('opacity', '0');
					  	$(this).next().find('.full-block-control__time').css('opacity', '0');
					  	$(this).next().find('.full-block-control__main-line').css('opacity', '0');
					  	$(this).next().find('.full-block-control__sound').css('opacity', '0');
					  }
				  }
				);
			//Конец большого блока с ховерами
			});

      switch($(this)[0].id.slice($(this)[0].id.length - 1)) {
      	case '1':
      		playerClient1.playVideo();
      		break;
      	case '2':
      		playerClient2.playVideo();
      		break;
      	case '3':
      		playerClient3.playVideo();
      		break;
        case '4':
            playerClient4.playVideo();
            break;
        case '5':
            playerClient5.playVideo();
            break;
        case '6':
            playerClient6.playVideo();
            break;
        case '7':
            playerClient7.playVideo();
            break;
				case '8':
            playerClient8.playVideo();
            break;
        case '9':
          playerClient9.playVideo();
          break;
        default:
      		break;
      }

      $(this).parent().parent().find('.video_muted').css('display', 'block');

      ga("send", "event", "video", "start",  $(this).parent().find('h3').text())
      e.preventDefault();
    });
}

Beeline.setFlexMargin = function() {
	if ($('.active-test .test-block__card__answers').children().length < 4) {
		$('.active-test .test-block__card__answers').css('justify-content', 'center');
		$('.test-block__card__answers__item').css('width', '25.86%');
	} else {
		if ($('.active-test .test-block__card__answers').css('justify-content') === 'center') {
			$('.active-test .test-block__card__answers').css('justify-content', 'space-between');
      $('.test-block__card__answers__item').css('width', '21.86%');
		}
	}
}

Beeline.eventContest = function() {
	let formFlag = false;

	setTimeout(() => {
		formFlag = true;
	}, 5000);

	$('.work-item--wrapper').mouseover(function(){
		$(this).find('.work-item--link').removeClass('work-item--hidden');
		$(this).find('.work-item--line').addClass('work-item--hidden-line');
	}).mouseout(function(){
		$(this).find('.work-item--link').addClass('work-item--hidden');
		$(this).find('.work-item--line').removeClass('work-item--hidden-line');
	});


	$('.contest-block__tab__interview').on('click', function() {
		var currTab = $(this).attr("tab-index");
		$('.contest-block__tab__interview').removeClass('active');
		$(this).addClass('active');
		$('.contest-wrap--list-participant').each((ind, el) => {
			if ($(el).attr('participant-tab') === currTab) {
                $('.contest-wrap--list-participant').removeClass('contest-wrap--list-participant--active');
                $(el).addClass('contest-wrap--list-participant--active');
			}
		});
	});
	//форма регистрации
	$('.radio-check--1').on('click', function() {
		if(!$(this).parents('label').hasClass('check--active')) {
			$(this).parents('label').addClass('check--active');
			$(this).attr('checked', 'true');
		} else {
			$(this).parents('label').removeClass('check--active');
			$(this).removeAttr('checked');
		}
	});
	$('.radio-check--2').on('click', function() {
		if(!$(this).parents('label').hasClass('check--active')) {
			$(this).parents('label').addClass('check--active');
			$(this).attr('checked', 'true');
		} else {
			$(this).parents('label').removeClass('check--active');
			$(this).removeAttr('checked');
		}
	});
	$('.link-contest--call-form').click(function(e) {
    e.preventDefault();

    let titleContent = $(this).parents('section').find('h1').length > 0 ? $(this).parents('section').find('h1').text(): $(this).parents('section').find('h2').text();
    $('#submit-form-link').attr('data-title', titleContent);

    $('.contest-modal-popup .modal-popup').addClass('modal-popup--show');
    $('.contest-modal-popup .modal-popup__bg').addClass('modal-popup__bg--show');
    $('.contest-modal-popup .modal-popup__popup').addClass('modal-popup__popup--show');
	});
	$('.contest-modal-popup .modal-popup__bg, .contest-modal-popup .modal-popup__close').click(function(e) {
			e.preventDefault();
			$('.contest-modal-popup .modal-participant-popup').removeClass('modal-participant-popup--show');
			$('.contest-modal-popup .modal-participant-popup__bg').removeClass('modal-participant-popup__bg--show');
			$('.contest-modal-popup .modal-participant-popup__popup').removeClass('modal-participant-popup__popup--show');
	});

	$('.work-item--link').click(function(e) {
		e.preventDefault();
		$('.contest-participant-popup .modal-popup').addClass('modal-popup--show');
		$('.contest-participant-popup .modal-popup__bg').addClass('modal-popup__bg--show');
		$('.contest-participant-popup .modal-popup__popup').addClass('modal-popup__popup--show');
	});


	// $('.contest-participant-popup .slick-slider').slick({
	// 	arrows: true,
	// 	autoplay: false,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	prevArrow: '<button class="interview-block__speakers__button interview-block__speakers__button--prev"></button>',
	// 	nextArrow: '<button class="interview-block__speakers__button interview-block__speakers__button--next"></button>'
	// });




		var   	firstname,
				lastname,
				telephone,
				upload,
				social,
				company,
				position,
				business,
				technologies,
				regulations,
				Statfirstname = 0,
				Statlastname = 0,
				Stattelephone = 0,
				Statupload = 0,
				Statsocial = 0,
				Statcompany = 0,
				Statposition = 0,
				Statbusiness = 0,
				Stattechnologies = 0,
				Statregulations = 0;


		$("#firstname").change(function () {
			firstname = $.trim($("#firstname").val());
			var expName = /^[а-яА-ЯёЁa-zA-Z\s-]+$/g;
			var resName = firstname.search(expName);
			if (resName == -1) {
				$('#firstname').removeClass('ok').addClass('error');
				Statfirstname = 0;
			} else {
				$("#firstname").removeClass('error').addClass('ok');
				Statfirstname = 1;
			}
		});

		$("#lastname").change(function () {
			lastname = $.trim($("#lastname").val());
			var expName = /^[а-яА-ЯёЁa-zA-Z\s-]+$/g;
			var resName = lastname.search(expName);
			if (resName == -1) {
				$('#lastname').removeClass('ok').addClass('error');
				Statlastname = 0;
			} else {
				$("#lastname").removeClass('error').addClass('ok');
				Statlastname = 1;
			}
		});

		$("#telephone").change(function () {
			telephone = $.trim($("#telephone").val());
			var expTelephone = /^( +)?((\+?7|8) ?)?((\(\d{3}\))|(\d{3}))?( )?(\d{3}[\- ]?\d{2}[\- ]?\d{2})( +)?$/i;
			var resTelephone = telephone.search(expTelephone);
			if (resTelephone == -1) {
				$('#telephone').removeClass('ok').addClass('error');
				Stattelephone = 0;
			} else {
				$("#telephone").removeClass('error').addClass('ok');
				Stattelephone = 1;
			}
		});
		// console.log($('#upload').change(function() {}))

		//проверка загрузки изображения
		$("#upload").change(function () {
			if($("#upload").val() == "" || $(this).val().match(/(png|jpg|jpeg)/) === null) {
				$('.fileform').removeClass('ok').addClass('error');
				Statupload = 0;
				
			} else {
				$('.fileform').removeClass('error').addClass('ok');
				Statupload = 1;
			}
		});
		//проверка раздела соц.сетей`
		$(".input-holder--four .selectBox").click(function(e) {
			if($(".input-holder--four .selectBox").attr('value') == "Option 0") {
				$('.input-holder--four .selected').removeClass('ok').addClass('error');
				$('.input-holder--four .selectArow').removeClass('ok').addClass('error');
				$('input[type=social]').prop('disabled', false);
				$('.input-holder--four .selected').addClass('selected--js-before-style');
				Statsocial = 0;
			} else {
				$(".input-holder--four .selected").removeClass('error').addClass('ok');
				$(".input-holder--four .selectArow").removeClass('error').addClass('ok');
				$('input[type=social]').prop('disabled', true);
				$('.input-holder--four .selected').addClass('selected--js-before-style');
				Statsocial = 1;
			}
			if($(".input-holder--four .selectBox").attr('value') == "facebook") {
				$('.input-holder--four .selectArow').val('facebook.com/');
				$('.input-holder--four .selectArow').prop("disabled", false);
				$('.input-holder--four .selected').addClass('selected--js-before-style');	
				$('.input-holder--four .selected').removeClass('selectArrow--top').addClass('selectArrow--bottom');	
			}
			if($(".input-holder--four .selectBox").attr('value') == "vk") {
				$('.input-holder--four .selectArow').val('vk.com/');
				$('.input-holder--four .selectArow').prop("disabled", false);
				$('.input-holder--four .selected').addClass('selected--js-before-style');
				$('.input-holder--four .selected').removeClass('selectArrow--top').addClass('selectArrow--bottom');			
			}
			if($(".input-holder--four .selectBox").attr('value') == "tw") {
				$('.input-holder--four .selectArow').val('twitter.com/');
				$('.input-holder--four .selectArow').prop("disabled", false);	
				$('.input-holder--four .selected').addClass('selected--js-before-style');
				$('.input-holder--four .selected').removeClass('selectArrow--top').addClass('selectArrow--bottom');		
			}
			if($(".input-holder--four .selectBox").attr('value') == "ok") {
				$('.input-holder--four .selectArow').val('ok.ru/');
				$('.input-holder--four .selectArow').prop("disabled", false);	
				$('.input-holder--four .selected').addClass('selected--js-before-style');
				$('.input-holder--four .selected').removeClass('selectArrow--top').addClass('selectArrow--bottom');		
			}
		});

		$("#company").change(function () {
			company = $.trim($("#company").val());
			var expCompany = /^[а-яА-ЯёЁa-zA-Z\s-]+$/g;
			var resCompany = company.search(expCompany);
			if (resCompany == -1) {
				$('#company').removeClass('ok').addClass('error');
				Statcompany = 0;
			} else {
				$("#company").removeClass('error').addClass('ok');
				Statcompany = 1;
			}
		});

		//проверка раздела должности
		$(".input-holder--six .selectBox").click(function(e) {
			if($(".input-holder--six .selectBox").attr('value') == "Option 0") {
			$('.input-holder--six .selected').removeClass('ok').addClass('error');
			$('.input-holder--six .selectArrow').removeClass('ok').addClass('error');
			Statposition = 0;
			} else {
			$(".input-holder--six .selected").removeClass('error').addClass('ok');
			$(".input-holder--six .selectArrow").removeClass('error').addClass('ok');
			Statposition = 1;
			}
		});

		$("#business").change(function(e) {
				if  ($("#business").val() == '') {
								$('#business').removeClass('ok').addClass('error');
								Statbusiness = 0;
				} else {
								$('#business').removeClass('error').addClass('ok');
								Statbusiness = 1;
				}
		});

		$("#technologies").change(function(e) {
				if  ($("#technologies").val() == '') {
								$('#technologies').removeClass('ok').addClass('error');
								Stattechnologies = 0;
				} else {
								$('#technologies').removeClass('error').addClass('ok');
								Stattechnologies = 1;
				}
		});

		$("#regulations").change(function () {
				if  ($("#regulations").is(':checked') !== true) {
								$('#regulations').removeClass('ok').addClass('error');
								Statregulations = 0;
				} else {
								$('#regulations').removeClass('error').addClass('ok');
								Statregulations = 1;
				}
		});

		// $("#invitation").change(function () {
		// 		if  ($("#invitation").is(':checked') !== true) {
		// 						$('#invitation').removeClass('ok').addClass('error');
		// 						Statinvitation = 0;
		// 		} else {
		// 						$('#invitation').removeClass('error').addClass('ok');
		// 						Statinvitation = 1;
		// 		}
		// });


	$('#submit-form-link').on('click', function(e) {
			e.preventDefault();
			
			const arrOfInputs = [Statfirstname,
								Statlastname,
								Stattelephone,
								Statupload,
								Statsocial,
								Statcompany,
								Statposition,
								Statbusiness,
								Stattechnologies,
								Statregulations];
			const haveAll = arrOfInputs.filter(val => 1 == val).length == arrOfInputs.length;

			if(haveAll && formFlag) {
							const fileInput = document.querySelector('#upload');
							const formData = new FormData();
							const firstname = document.querySelector('#firstname').value;
							const lastname = document.querySelector('#lastname').value;
							const phone = document.querySelector('#telephone').value;
							const sociallink = document.querySelector('.input-holder--four .selectArow').value;
							const companyname = document.querySelector('#company').value;
							const position = document.querySelector('.input-holder--six .selectBox').getAttribute('value');
							const performance = document.querySelector('#business').value;
							const moreperformance = document.querySelector('#technologies').value;

							console.log('Aloha', fileInput.files[0]);

							formData.append('first_name', firstname);
							formData.append('last_name', lastname);
							formData.append('phone', phone);
							formData.append('social_link', sociallink);
							formData.append('company_name', companyname);
							formData.append('position', position);
							formData.append('performance', performance);
							formData.append('more_performance', moreperformance);
							formData.append('images', fileInput.files[0]);
							
							$.ajax({
								url: 'http://beeline-contest.grapheme.ru/add_apply',
								method: 'POST',
								data: formData,
								contentType: false,
								processData: false,
								success: function(data) {
									if (true) {
										$('.submit-form-link').hide();
										$('.modal-popup').removeClass('modal-popup--show');
										$('.modal-popup__bg').removeClass('modal-popup__bg--show');
										$('.modal-popup__popup').removeClass('modal-popup__popup--show');
										$('.contest-popup--thanks .modal-popup').addClass('modal-popup--show');
										$('.contest-popup--thanks .modal-popup__bg').addClass('modal-popup__bg--show');
										$('.contest-popup--thanks .modal-popup__popup').addClass('modal-popup__popup--show');
										//успешная отправка формы
										if($('.contest-popup--thanks .modal-popup').hasClass('modal-popup--show')) {
											ga("send", "event", "contest", "success send");
										}
									}	
									else {
										$('.modal-popup').removeClass('modal-popup--show');
										$('.modal-popup__bg').removeClass('modal-popup__bg--show');
										$('.modal-popup__popup').removeClass('modal-popup__popup--show');
										$('.contest-popup--error .modal-popup').addClass('modal-popup--show');
										$('.contest-popup--error .modal-popup__bg').addClass('modal-popup__bg--show');
										$('.contest-popup--error .modal-popup__popup').addClass('modal-popup__popup--show');
									}
								}
							});

							} else{
											if(Statfirstname == 0) {
													$('#firstname').addClass('error').removeClass('ok')
											}
											if(Statlastname == 0) {
													$('#lastname').addClass('error').removeClass('ok');
											}
											if(Stattelephone == 0) {
													$('#telephone').addClass('error').removeClass('ok');
											}
											if(Statupload == 0) {
													$('.fileform').removeClass('ok').addClass('error');
											}
											if(Statsocial == 0) {
													$('.input-holder--four .selected').removeClass('ok').addClass('error');
													$('.input-holder--four .selectArow').removeClass('ok').addClass('error');
											}
											if(Statcompany  == 0) {
													$('#company ').addClass('error').removeClass('ok');
											}
											if(Statposition  == 0) {
													$('.input-holder--six .selected').removeClass('ok').addClass('error');
													$('.input-holder--six .selectArrow').removeClass('ok').addClass('error');
											}
											if(Statbusiness  == 0) {
													$('#business').removeClass('ok').addClass('error');
											}
											if(Stattechnologies  == 0) {
													$('#technologies').removeClass('ok').addClass('error');
											}
											if(Statregulations  == 0) {
													$('#regulations').removeClass('ok').addClass('error');
											}
											// if(Statinvitation  == 0) {
											// 		$('#invitation').removeClass('ok').addClass('error');
											// }
							}
	});
	$('.link-contest--call-form').on('click', function() {
		$('html, body').animate({'scrollTop': 0}, 1000);
	});	
}

Beeline.eventParticipants = function() {
	$('.participants-block__tab__interview').on('click', function() {
		var currTab = $(this).attr("tab-index");
		$('.participants-block__tab__interview').removeClass('active');
		$(this).addClass('active');
		$('.participants-wrap--list-participant').each((ind, el) => {
			if ($(el).attr('participant-tab') === currTab) {
                $('.participants-wrap--list-participant').removeClass('participants-wrap--list-participant--active');
                $(el).addClass('participants-wrap--list-participant--active');
			}
		});
	});
	$( ".participants-popular__work-item--1" ).each(function(indx, element) {
		if(indx >= 6) {
			$(this).addClass('participants-popular__work-item--hidden');
		}
	});
	$( ".participants-popular__work-item--2" ).each(function(indx, element) {
		if(indx >= 6) {
			$(this).addClass('participants-popular__work-item--hidden');
		}
	});
	$('.link-see-all').on('click', function() {
		if($('.participants-block__tab__interview--popular').hasClass('active')) {
			$( ".participants-popular__work-item--1").removeClass('participants-popular__work-item--hidden');
		}
		if($('.participants-block__tab__interview--new').hasClass('active')) {
			$( ".participants-popular__work-item--2").removeClass('participants-popular__work-item--hidden');
		}
	});
	//открытие формы(закрытие попапов в разделе Beeline.toggleSpeakersSlider)
	// $('.link-participants').click(function(e) {
    // e.preventDefault();
    // $('.button-popup').show();
    // $('.modal-popup').addClass('modal-popup--show');
    // $('.modal-popup__bg').addClass('modal-popup__bg--show');
    // $('.modal-popup__popup').addClass('modal-popup__popup--show');
	// });
	// $('.modal-popup__bg, .modal-popup__close').click(function(e) {
	// 		e.preventDefault();
	// 		$('.submit-form-link').hide();
	// 		$('.modal-popup').removeClass('modal-popup--show');
	// 		$('.modal-popup__bg').removeClass('modal-popup__bg--show');
	// 		$('.modal-popup__popup').removeClass('modal-popup__popup--show');
	// });


	$('.work-item--wrapper').click(function(e) {
		let currentSlide = +$(this).attr('data-tab');

		$('html, body').animate({'scrollTop': 0}, 1000);
		e.preventDefault();
		$('.button-popup').show();
		$('.modal-participant-popup').addClass('modal-participant-popup--show');
		$('.modal-participant-popup__bg').addClass('modal-participant-popup__bg--show');
		$('.modal-participant-popup__popup').addClass('modal-participant-popup__popup--show');

		$('.slick-slider').slick('slickGoTo', currentSlide);
	});

	$('.modal-participant-popup__bg, .modal-participant-popup__close').click(function(e) {
			e.preventDefault();
			$('.button-popup').hide();
			$('.modal-participant-popup').removeClass('modal-participant-popup--show');
			$('.modal-participant-popup__bg').removeClass('modal-participant-popup__bg--show');
			$('.modal-participant-popup__popup').removeClass('modal-participant-popup__popup--show');
	});

	//слайдер для поп апа с рассказом участника
	$('.contest-participant-popup .slick-slide--contest').slick({
		dots: false,
		infinite: true,
		speed: 600,
		adaptiveHeight: false,
		slide: '.wrapp',
		arrows: true,
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="interview-block__speakers__button interview-block__speakers__button--prev"></button>',
		nextArrow: '<button class="interview-block__speakers__button interview-block__speakers__button--next"></button>'
	});

}
Beeline.selectFormСheckin = function() {
	$(document).ready(function() {
		enableSelectBoxes();
	});
	/---------------------------------/
	function enableSelectBoxes(){
		$('.input-holder--six .selectOption').on('click', function() {
			$('.selected').css({color: '#393939'});
		});

    $('div.selectBox').each(function(){
        $(this).children('span.selected').html($(this).children('div.selectOptions').children('span.selectOption:first').html());
        $(this).attr('value',$(this).children('div.selectOptions').children('span.selectOption:first').attr('value'));

        $(this).children('.selected,.selectArrow').click(function(){
            if($(this).parent().children('div.selectOptions').css('display') == 'none')
            {
                $(this).parent().children('div.selectOptions').css('display','block');
				$('.input-holder--six .selectArrow').removeClass('selectArrow--bottom').addClass('selectArrow--top');
				$('.input-holder--six span.selectOption:first').css('display','none');
            }
            else
            {
                $(this).parent().children('div.selectOptions').css('display','none');
				$('.input-holder--six .selectArrow').removeClass('selectArrow--top').addClass('selectArrow--bottom');
				$('.input-holder--six span.selectOption:first').css('display','block');
            }
			// if($(".input-holder--six .selectBox").attr('value') !== "Option 0") {
			// 	$('.input-holder--six .selected').removeClass('selectArrow--top').addClass('selectArrow--bottom');		
			// }
        });

        $(this).find('span.selectOption').click(function(){
            $(this).parent().css('display','none');
            $(this).closest('div.selectBox').attr('value',$(this).attr('value'));
            $(this).parent().siblings('span.selected').html($(this).html());
        });
    });
}
/---------------------------------/
	$('span.selected').click(function(){
		if ($('div.selectOptions').css('display') == 'none') {
			$('.input-holder--four .selected').removeClass('selectArrow--bottom').addClass('selectArrow--top');
			$('.input-holder--six .selectArrow').addClass('selectArrow--bottom');
		} else {
			$('.input-holder--four .selected').addClass('selectArrow--bottom').removeClass('selectArrow--top');
			$('.input-holder--six .selectArrow').addClass('selectArrow--bottom');
		}
	});
/---------------------------------/
	$('#upload').on('change', function() {
		var filename = $(":file[name=images]").val();
 		var divFileName = $('.input-holder--three .placeholder').html("").html(filename).addClass('placeholder--opacity');
	});

	$('.input-holder--seven, .input-holder--eight').on('click', function() {
		if ($(this).hasClass('input-holder--seven')) {
			$('#business').focus();
			$('#business').removeClass('error');
		} else {
			$('#technologies').focus();
			$('#technologies').removeClass('error');
		}

		$(this).find('.placeholder').html('');
	});

	$('#business').focus(function() {
		$('.input-holder--seven .placeholder').html('');
	});
	$('#technologies').focus(function() {
		$('.input-holder--eight .placeholder').html('');
	});
}

Beeline.playStopSlider = function() {
	let currObj = this;

	$('.block-control--slider-1, .block-control--slider-2, .block-control--slider-3, .block-control--slider-4, .block-control--slider-5, .block-control--slider-6, .block-control--slider-7, .block-control--slider-8, .block-control--slider-9').on('click', function(ev){
		let currIframe = $(this)[0].className.match(/block-control--slider-\d/)[0];
		let self = $(this);

		if($(this).hasClass('pause')) {
      		ga("send", "event", "video", "play", $(this).parent().find('.interview-block__video__block__info h3').text())

			$(this).next().find('.full-block-control__slider--play').removeClass('full-block-control__slider--play--pause');
			$(this).removeClass('pause');

			$(this).children('.block-control__play').css('display', 'block');
			$(this).children('.block-control__play').css('opacity', '1');
			$(this).children('.block-control__play').addClass('play-pause-second');
			//Если ролик на паузе
			let timerHover = setTimeout(function() {
		  		$(self).children('.block-control__play').removeAttr('style')
		  		$(self).children('.block-control__play').removeClass('play-pause-second');
		  }, 500);

		  //Плашка
		  $(this).next().find('.full-block-control__slider--play').removeClass('for-control');
		  $(this).next().find('.full-block-control__time').removeClass('for-control-time');
		  $(this).next().find('.full-block-control__main-line').removeClass('for-control-bar');
		  $(this).next().find('.full-block-control__sound').removeClass('for-control');

			//Воспроизводим видео
			if(currObj.flag_video) {
			    ev.preventDefault();

			    switch($(this)[0].className.match(/block-control--slider-\d/)[0].slice(currIframe.length - 1)) {
			    	case '1':
			    		playerClient1.playVideo();
			    		break;
			    	case '2':
			    		playerClient2.playVideo();
			    		break;
			    	case '3':
			    		playerClient3.playVideo();
			    		break;
            case '4':
              playerClient4.playVideo();
            break;
						case '5':
							playerClient5.playVideo();
							break;
						case '6':
							playerClient6.playVideo();
							break;
						case '7':
							playerClient7.playVideo();
							break;
						case '8':
							playerClient8.playVideo();
							break;
            case '9':
              playerClient9.playVideo();
              break;
						default:
			    		break;
			    }
			}
		} else{
			clearInterval(myTimer);
      		ga("send", "event", "video", "pause", $(this).parent().find('.interview-block__video__block__info h3').text());

			$(this).next().children('.full-block-control__slider--play').addClass('full-block-control__slider--play--pause');
			$(this).addClass('pause');

			$(this).next().find('.full-block-control__slider--play').addClass('for-control');
			$(this).next().find('.full-block-control__time').addClass('for-control-time');
			$(this).next().find('.full-block-control__main-line').addClass('for-control-bar');
			$(this).next().find('.full-block-control__sound').addClass('for-control');

			$(this).children('.block-control__play').css('display', 'none');
			$(this).children('.block-control__pause').css('display', 'block');
			$(this).children('.block-control__pause').addClass('play-pause-second');
			// $(this).children('.block-control__pause').css('opacity', '1');
			//Если ролик на паузе
			let timerHover1 = setTimeout(function() {
		  		$(self).children('.block-control__pause').removeAttr('style');
		  		$(self).children('.block-control__pause').removeClass('play-pause-second');
		  }, 500);

			//Паузим видео
			if(currObj.flag_video) {

			    switch($(this)[0].className.match(/block-control--slider-\d/)[0].slice(currIframe.length - 1)) {
			    	case '1':
			    		playerClient1.pauseVideo();
			    		break;
			    	case '2':
			    		playerClient2.pauseVideo();
			    		break;
			    	case '3':
			    		playerClient3.pauseVideo();
			    		break;
						case '4':
							playerClient4.pauseVideo();
							break;
						case '5':
							playerClient5.pauseVideo();
								break;
						case '6':
							playerClient6.pauseVideo();
								break;
						case '7':
							playerClient7.pauseVideo();
							break;
						case '8':
							playerClient8.pauseVideo();
							break;
						case '9':
							playerClient9.pauseVideo();
							break;
			    	default:
			    		break;
			    }
	    		ev.preventDefault();
			}
		}
	});

	Beeline.setTestHeight = function() {
		var testVar = location.pathname.match(/test-1.html/);

		if (testVar !== null) {
			if (testVar.length > 0 && $(window).height() >= 1060) {
				$('.beeline-wrapper').addClass('beeline-wrapper--filled');
				$('.test-block').addClass('test-block--nopadding')
			}
		}
	}

	//Плей-пауза в слайдере(внизу страницы)
	$('.full-block-control__slider--play').on('click', function(ev){
		//Получаем номер видео(из id)
		let currIframe = $(this).parent().next().find('iframe').attr('id').match(/\d/)[0];
		$(this).parent().prev(".block-control--slider-" + currIframe).trigger('click');
	});

	
	$( ".work-item--wrapper" ).on( "click", function() {
		$.getJSON( "/apply/1", function( data ) {
			var items = [];
			$.each( data, function( key, val ) {
				items.push( "<li id='" + key + "'>" + val + "</li>" );
			});
			
			$( "<ul/>", {
				"class": "my-new-list",
				html: items.join( "" )
			}).appendTo( "body" );
		});
	});
}

$(document).ready(function () {

	let linkMain = location.pathname;

	switch(linkMain) {
		case '/popov.html': window.location.href="/interview-1.html"; break;
		case '/chaplincki.html': window.location.href="/interview-1.html#client"; break;
		case '/cherazov.html': window.location.href="/interview-2.html"; break;
		case '/shlopack.html': window.location.href="/interview-2.html#client"; break;
		case '/feldman.html': window.location.href="/interview-3.html"; break;
		case '/zamai.html': window.location.href="/interview-3.html#client"; break;
		case '/voloshuk.html': window.location.href="/interview-4.html"; break;
		case '/laskov.html': window.location.href="/interview-4.html#client"; break;
		case '/avdei.html': window.location.href="/interview-5.html"; break;
		case '/smirnov.html': window.location.href="/interview-5.html#client"; break;
		case '/panov.html': window.location.href="/interview-6.html"; break;
		case '/shelamova.html': window.location.href="/interview-6.html#client"; break;
		case '/jukov.html': window.location.href="/interview-7.html"; break;
		case '/silchev.html': window.location.href="/interview-7.html#client"; break;
		case '/tabolin.html': window.location.href="/interview-8.html"; break;
		case '/shclover.html': window.location.href="/interview-8.html#client"; break;
    case '/porednev.html': window.location.href="/interview-9.html#client"; break;

		case '/test_1_result_1.html': window.location.href="/test-1.html#test_1"; break;
		case '/test_1_result_2.html': window.location.href="/test-1.html#test_1"; break;
		case '/test_1_result_3.html': window.location.href="/test-1.html#test_1"; break;
		case '/test_1_result_4.html': window.location.href="/test-1.html#test_1"; break;
		case '/test_1_result_5.html': window.location.href="/test-1.html#test_1"; break;
		case '/test_2_result_1.html': window.location.href="/test-1.html#test_2"; break;
		case '/test_2_result_2.html': window.location.href="/test-1.html#test_2"; break;
		case '/test_2_result_3.html': window.location.href="/test-1.html#test_2"; break;
		case '/test_2_result_4.html': window.location.href="/test-1.html#test_2"; break;
		case '/test_2_result_5.html': window.location.href="/test-1.html#test_2"; break;
		case '/test_3_result_1.html': window.location.href="/test-1.html#test_3"; break;
		case '/test_3_result_2.html': window.location.href="/test-1.html#test_3"; break;
		case '/test_3_result_3.html': window.location.href="/test-1.html#test_3"; break;
		case '/test_4_result_1.html': window.location.href="/test-1.html#test_4"; break;
		case '/test_4_result_2.html': window.location.href="/test-1.html#test_4"; break;
		case '/test_4_result_3.html': window.location.href="/test-1.html#test_4"; break;
		case '/test_5_result_1.html': window.location.href="/test-1.html#test_5"; break;
		case '/test_5_result_2.html': window.location.href="/test-1.html#test_5"; break;
		case '/test_5_result_3.html': window.location.href="/test-1.html#test_5"; break;
		case '/test_5_result_4.html': window.location.href="/test-1.html#test_5"; break;
		case '/test_5_result_5.html': window.location.href="/test-1.html#test_5"; break;
		case '/test_7_result_1.html': window.location.href="/test-1.html#test_7"; break;
		case '/test_7_result_2.html': window.location.href="/test-1.html#test_7"; break;
		case '/test_7_result_3.html': window.location.href="/test-1.html#test_7"; break;
		case '/test_7_result_4.html': window.location.href="/test-1.html#test_7"; break;
		case '/test_7_result_5.html': window.location.href="/test-1.html#test_7"; break;
		case '/test_8_result_1.html': window.location.href="/test-1.html#test_8"; break;
		case '/test_8_result_2.html': window.location.href="/test-1.html#test_8"; break;
		case '/test_8_result_3.html': window.location.href="/test-1.html#test_8"; break;
		case '/test_8_result_4.html': window.location.href="/test-1.html#test_8"; break;
		case '/test_8_result_5.html': window.location.href="/test-1.html#test_8"; break;
		case '/test_9_result_1.html': window.location.href="/test-1.html#test_9"; break;
		case '/test_9_result_2.html': window.location.href="/test-1.html#test_9"; break;
		case '/test_9_result_3.html': window.location.href="/test-1.html#test_9"; break;
		case '/test_9_result_4.html': window.location.href="/test-1.html#test_9"; break;
		case '/test_9_result_5.html': window.location.href="/test-1.html#test_9"; break;
	}

	if (location.pathname === '/' || location.pathname === '/index.html') {
		Beeline.sendCRM.startMethod();
		Beeline.sendCRM.saveMethod();
	}

	Beeline.onAnswer();
	Beeline.colorMenu();
	// Beeline.saveSlider.init();
	Beeline.moreArticlesVideos.moreArticle();
	Beeline.moreArticlesVideos.moreVideos();
	Beeline.moreArticlesVideos.moreCases();
	Beeline.moreArticlesVideos.moreTests();
	Beeline.moreArticlesVideos.allCasesMain();
	Beeline.speakerSlider.init();
	Beeline.lifehack.newLifehack();
	Beeline.viewportEvents.init();
	Beeline.sideNav.init();
	// Beeline.formConnect.init();
	//Beeline.setQuestionsAnimation();
	Beeline.toggleSpeakersSlider();
	Beeline.drawSvg();
	Beeline.videoBottomSlider.init();
	Beeline.fixedYellowBlock();
	Beeline.takeTest();
	Beeline.decypherInterview();
	Beeline.animateAppearance();
	Beeline.playInterview();
	Beeline.changeInterviewTab();
  	Beeline.getCurrentBookmark();
	// Beeline.fixedYellowBlock();
    Beeline.getNextPrevTest();
	Beeline.fixedTable();
	Beeline.formValidation();
	Beeline.borderAnimate();
	Beeline.playVideo();
	Beeline.share.init();
	Beeline.Grow();
	Beeline.moveDown();
	Beeline.addMarginClass();
	Beeline.imageArticle();
	Beeline.playVideoSlider();
	Beeline.addSlickListeners();
	Beeline.playStopSlider();
	Beeline.muteVideo();
	Beeline.setTestHeight();
	//Beeline.eventContest();
	//Beeline.eventParticipants();
	Beeline.selectFormСheckin();

	if (location.pathname.match(/contest.html/) !== null) {
		Beeline.participantsWorks();
	}

	if  (location.pathname.match(/participants.html/) !== null) {
		Beeline.participantsWorksGallery();
	}

	Beeline.likeHandler();

	setTimeout(() => {
		Beeline.setFlexMargin();
	}, 100);

	Beeline.playStop();

	jQuery.scrollDepth({
		userTiming: false,
		pixelDepth: false
  	});

  	let pathToForm = window.location.hash;

	if(pathToForm === "#main-form") {

		// $('.js-call').trigger("click");

		let mainForm = $('#main-form').offset().top;

		$('body,html').animate({scrollTop: mainForm}, '500');
	}



    // var playerBusiness,
    //     playerClient;
    //
    // function onYouTubeIframeAPIReady() {
    //     playerBusiness = new YT.Player('business-video', {
    //         'onReady': onPlayerReady
    //     });
    //     alert('Works');s
    //     console.log(onPlayerReady);
    // }
    //
    // function onPlayerReady() {
    //     console.log(123);
    // }


});
