<?php

$inputtedData = $_POST['inputtedData'];
$parsingResult = $_POST['parsingResult'];
$errorDescription = $_POST['errorDescription'];
$isPossibleNumber = $_POST['isPossibleNumber'];
$notPossibleReason = $_POST['notPossibleReason'];
$isValidNumber = $_POST['isValidNumber'];
$eFormat = $_POST['eFormat'];
$url = $_SERVER['SERVER_NAME'];

$ch = curl_init();
curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-type: application/x-www-form-urlencoded;charset=utf-8"));
curl_setopt($ch, CURLOPT_URL,"http://fastcpa.savemytime.ru/t_bot/get_order_wrong_number_data.php");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS,
	"url=" . $url . "&inputtedData=" . $inputtedData . "&parsingResult=" . $parsingResult . "&errorDescription=" . $errorDescription . "&isPossibleNumber=" . $isPossibleNumber . "&notPossibleReason=" . $notPossibleReason . "&isValidNumber=" . $isValidNumber . "&eFormat=" . $eFormat);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$calltouch = curl_exec ($ch);
curl_close ($ch);



	// $inputtedData = $_POST['inputtedData'];
	// $parsingResult = $_POST['parsingResult'];
	// $errorDescription = $_POST['errorDescription'];
	// $isPossibleNumber = $_POST['isPossibleNumber'];
	// $notPossibleReason = $_POST['notPossibleReason'];
	// $isValidNumber = $_POST['isValidNumber'];
	// $eFormat = $_POST['eFormat'];
	// $email_title = $_POST['email_title'];

	// require ('punycode.php');
	// $path = explode('?', $_SERVER['HTTP_REFERER']);
	// $IDN = new idna_convert();
	// $path = $IDN->decode($path[0]);

	// //$maillist = explode('||',set::allset('email_send'));
	// $maillist = array('lp.dis4@tandemadv.ru','aegorov@tandemadv.ru');

	// $message = "<table style='border-spacing: 0; border-collapse: collapse;'>";
	// 	$message .= "<tr>";
	// 	$message .= "<td style='border: 1px solid black; padding: 5px; font-weight: bold;'>inputtedData</td>";
	// 	$message .= "<td style='border: 1px solid black; padding: 5px;'>$inputtedData</td>";
	// 	$message .= "</tr>";
	// 	$message .= "<tr>";
	// 	$message .= "<td style='border: 1px solid black; padding: 5px; font-weight: bold;'>parsingResult</td>";
	// 	$message .= "<td style='border: 1px solid black; padding: 5px;'>$parsingResult</td>";
	// 	$message .= "</tr>";
	// 	$message .= "<tr>";
	// 	$message .= "<td style='border: 1px solid black; padding: 5px; font-weight: bold;'>errorDescription</td>";
	// 	$message .= "<td style='border: 1px solid black; padding: 5px;'>$errorDescription</td>";
	// 	$message .= "</tr>";
	// 	$message .= "<tr>";
	// 	$message .= "<td style='border: 1px solid black; padding: 5px; font-weight: bold;'>isPossibleNumber</td>";
	// 	$message .= "<td style='border: 1px solid black; padding: 5px;'>$isPossibleNumber</td>";
	// 	$message .= "</tr>";
	// 	$message .= "<tr>";
	// 	$message .= "<tr>";
	// 	$message .= "<td style='border: 1px solid black; padding: 5px; font-weight: bold;'>notPossibleReason</td>";
	// 	$message .= "<td style='border: 1px solid black; padding: 5px;'>$notPossibleReason</td>";
	// 	$message .= "</tr>";
	// 	$message .= "<tr>";
	// 	$message .= "<td style='border: 1px solid black; padding: 5px; font-weight: bold;'>isValidNumber</td>";
	// 	$message .= "<td style='border: 1px solid black; padding: 5px;'>$isValidNumber</td>";
	// 	$message .= "</tr>";
	// 	$message .= "<tr>";
	// 	$message .= "<td style='border: 1px solid black; padding: 5px; font-weight: bold;'>eFormat</td>";
	// 	$message .= "<td style='border: 1px solid black; padding: 5px;'>$eFormat</td>";
	// 	$message .= "</tr>";
	// 	$message .= "</table>";
	// 	$message .= "<div>";
	// 	$message .= "<h2 style='font-size:20px; font-weight: normal;'>Информация о заявке:</h2>";
	// 	$message .= "<p>Адрес сайта: $path</p>";
	// 	$message .= "<p>Дата отправления: ".date("d.m.Y G:i")."</p>";	
	// $message .= "</div>";

	// $subject = $email_title . ": НЕВЕРНЫЙ НОМЕР";

	// //отладчик форм
	// if (strpos($phone,'+7000000') !== FALSE) {
	// 	$subject = "Заявка на ".mb_strtoupper($car)." | Техническая проверка формы";
	// 	$maillist = array('whiv@yandex.ru');
	// 	$token = '';
	// 	if ($phone == '+70000000000') $analitic = 0;
	// } 	


	// 	require ('class.phpmailer.php');

 //        $mail = new PHPMailer(); 
	// 	$mail->From = 'no-reply@'.$_SERVER['SERVER_NAME'];      // от кого 
	// 	$mail->FromName = '';   // от кого 
	// 	$mail->IsHTML(true);        // выставляем формат письма HTML 
	// 	$mail->Subject = $subject;  // тема письма 
	// 	$mail->Body = $message; 	

	// 	 // отправляем наше письмо 		
	// 	foreach ($maillist as $mails) $mail->AddAddress($mails); 
	// 	if (!$mail->Send()) die ('Mailer Error: '.$mail->ErrorInfo);  
	// 	$mail->ClearAddresses();	

	// 	include_once ('kolltach_order.php');

	// 	unset($phone);
	// 	echo json_encode('');

?>