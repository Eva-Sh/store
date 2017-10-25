<?php

$data = [
	'name' => strip_tags(trim( !empty($_POST['name']) ? $_POST['name'] : '' )),
	'email' => strip_tags(trim( !empty($_POST['email']) ? $_POST['email'] : '' )),
	//'id-slide-banner' => strip_tags(trim( !empty($_POST['id-slide-banner']) ? $_POST['id-slide-banner'] : '' )),
	'company' => strip_tags(trim( !empty($_POST['company']) ? $_POST['company'] : '' )),
	'telephone' => strip_tags(trim( !empty($_POST['telephone']) ? $_POST['telephone'] : '' )),
	'slide' => strip_tags(trim( !empty($_POST['slide']) ? $_POST['slide'] : '' )),
];

$hasErrors = [];

foreach ($data as $key => $value) {
	if (empty($value)) {
		$hasErrors[] = 'Error in field - ' . $key;
	}
}

if (count($hasErrors)) {
	$hasErrors['success'] = '0';
	echo json_encode($hasErrors, true);
	die('');
}

$fp = fopen('data.csv', 'a+');
fwrite($fp, implode(', ', $data) . ';' . PHP_EOL);
fclose($fp);

echo json_encode([
		'success' => '1',
	], true);
die('');
