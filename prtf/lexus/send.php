<?php
	//include_once (  __DIR__ . '/core/core.php');
$phone = $_POST['phone'];

if ($_POST['call_value'] != 'undefined') {$call_value = $_POST['call_value'];} else {$call_value='';}

require ('punycode.php');
$path = explode('?', $_SERVER['SERVER_NAME']);
$IDN = new idna_convert();
$path = $IDN->decode($path[0]);

	//$maillist = explode('||',set::allset('email_send'));
	//$maillist = array('lp.dis4@tandemadv.ru');
$maillist = explode('||', $_POST['email_addresses']);

$subject = $_POST['email_title'];

$message = '<div style="background:#ededed;font-family:Helvetica,Arial,sans-serif;margin:0;min-height:100%;height:100%;outline:none;padding:0;text-align:center" bgcolor="#ededed"><table width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;margin:0;padding:0" bgcolor="#ededed"><td bgcolor="#ededed" valign="top" style="border-collapse:collapse"><table width="590" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;min-width:590px" align="center"><tbody><tr><td width="44" height="100" style="border-collapse:collapse;" bgcolor="#ededed" valign="top"></td></tr><tr><td width="44" height="60" style="border-collapse:collapse;min-width:44px;color:#222222;font-family:Arial,Helvetica,sans-serif;font-size:32px;font-weight:bold;line-height:22px;text-align:left;" bgcolor="#ededed" valign="top">';
$message .= $subject;
$message .= '</td></tr><tr><td width="44" style="border-collapse:collapse;min-width:44px;border-radius: 10px;" bgcolor="#ffffff" valign="top"><table width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;margin:0;padding:0"><tbody><tr><td width="50" height="35" style="border-collapse:collapse;min-width:50px;" valign="top"></td><td width="490" height="35" style="border-collapse:collapse;" valign="top"></td><td width="50" height="35" style="border-collapse:collapse;" valign="top"></td></tr><tr><td width="50" height="45" style="border-collapse:collapse;min-width:50px;" valign="top"></td><td width="44" height="45" style="border-collapse:collapse;min-width:50px;color:#616161;font-family:Arial,Helvetica,sans-serif;font-size:24px;font-weight:bold;line-height:22px;text-align:left;" valign="top">Информация о клиенте</td><td width="50" height="45" style="border-collapse:collapse;" valign="top"></td></tr><tr><td width="50" height="40" style="border-collapse:collapse;min-width:50px;" valign="top"></td><td width="44" height="40" style="border-collapse:collapse;min-width:50px;color:#616161;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:normal;line-height:22px;" valign="top"><table style="border-collapse:collapse;min-width:50px;color:#616161;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:normal;line-height:22px;"><tbody>';
$message .= '<tr><td width="100" height="40" style="font-weight: bold;text-align:left;">Телефон:</td><td style="text-align:left;"><span class="wmi-callto">';
$message .= $phone;
$message .= '</span></td></tr></tbody></table></td><td width="50" height="40" style="border-collapse:collapse;" valign="top"></td></tr><tr><td width="50" height="35" style="border-collapse:collapse;min-width:50px;" valign="top"></td><td width="490" height="35" style="border-collapse:collapse;" valign="top"></td><td width="50" height="35" style="border-collapse:collapse;" valign="top"></td></tr></tbody></table></td></tr><tr><td width="44" height="25" style="border-collapse:collapse;" bgcolor="#ededed" valign="top"></td></tr><tr><td width="44" height="60" style="border-collapse:collapse;min-width:44px;color:#222222;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:bold;line-height:22px;" bgcolor="#ededed" valign="bottom"><table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;min-width:590px"><tbody><tr><td width="190" style="border-collapse:collapse;min-width:44px;color:#9e9e9e;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:normal;line-height:22px; text-align:left;">Адрес сайта:</td><td style="border-collapse:collapse;min-width:44px;color:#9e9e9e;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:normal;line-height:22px; text-align:left;">';
$message .= $path;
$message .= '</td></tr><tr><td width="190" style="border-collapse:collapse;min-width:44px;color:#9e9e9e;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:normal;line-height:22px; text-align:left;">Дата отправления:</td><td style="border-collapse:collapse;min-width:44px;color:#9e9e9e;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:normal;line-height:22px; text-align:left;">';
$message .= date("d.m.Y G:i");
$message .= '</td></tr><tr><td width="44" height="100" style="border-collapse:collapse;" bgcolor="#ededed" valign="top"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>';

if (strlen($phone) > 10 ) {	
	require ('class.phpmailer.php');

	$mail = new PHPMailer(); 
	$mail->From = 'no-reply@'.$_SERVER['SERVER_NAME'];      // от кого 
	$mail->FromName = '';   // от кого 
	$mail->IsHTML(true);        // выставляем формат письма HTML 
	$mail->Subject = $subject;  // тема письма 
	$mail->Body = $message; 	

	 // отправляем наше письмо 		
	foreach ($maillist as $mails) $mail->AddAddress($mails); 
	if (!$mail->Send()) die ('Mailer Error: '.$mail->ErrorInfo);  
	
	$mail->ClearAddresses();	

	// Отправка заявки в callTouch START
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-type: application/x-www-form-urlencoded;charset=utf-8"));

		curl_setopt($ch, CURLOPT_URL,"http://api-node3.calltouch.ru/calls-service/RestAPI/18637/requests/orders/register/");
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS,
			"clientApiId=CAQyBq5qG3A6G9cCN2dnmjictgGR6SxOvm9jpdP0O3RZv&phoneNumber=$phone&personalPhone=false&orderComment=".$_SERVER['HTTP_USER_AGENT'].", ".$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI']."".($call_value != 'undefined' ? "&sessionId=".$call_value : ""));

		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$calltouch = curl_exec ($ch);

		curl_close ($ch);
	// Отправка заявки в callTouch END

	unset($phone);
	echo json_encode('');
}
?>