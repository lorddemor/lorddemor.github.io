<?php
	//include_once (  __DIR__ . '/core/core.php');
	$phone = $_POST['phone'];
	$name = $_POST['name'];
	$car = $_POST['car'];
	if ($_POST['call_value'] != 'undefined') {$call_value = $_POST['call_value'];} else {$call_value='';}
	$token = '879558971ctb37c2913771d86274c16a6bf3c1dc45a';

	require ('punycode.php');
	$path = explode('?', $_SERVER['HTTP_REFERER']);
	$IDN = new idna_convert();
	$path = $IDN->decode($path[0]);
	
	//$maillist = explode('||',set::allset('email_send'));
	//$maillist = array('lp.dis4@tandemadv.ru');
	$maillist = array('cpa.tandem@yandex.ru', 'mmaarriinnaa@bk.ru', 'oivanova@tandemadv.ru', 'context16@tandemadv.ru', 'sales@city-xxi.ru');
	$subject = "Заявка на ЖК Краски жизни";

	$message = '<div style="background:#ededed;font-family:Helvetica,Arial,sans-serif;margin:0;min-height:100%;height:100%;outline:none;padding:0;text-align:center" bgcolor="#ededed"><table width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;margin:0;padding:0" bgcolor="#ededed"><td bgcolor="#ededed" valign="top" style="border-collapse:collapse"><table width="590" border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;min-width:590px" align="center"><tbody><tr><td width="44" height="100" style="border-collapse:collapse;" bgcolor="#ededed" valign="top"></td></tr><tr><td width="44" height="60" style="border-collapse:collapse;min-width:44px;color:#222222;font-family:Arial,Helvetica,sans-serif;font-size:32px;font-weight:bold;line-height:22px;text-align:left;" bgcolor="#ededed" valign="top">';
	$message .= $subject;
	$message .= '</td></tr><tr><td width="44" style="border-collapse:collapse;min-width:44px;border-radius: 10px;" bgcolor="#ffffff" valign="top"><table width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;margin:0;padding:0"><tbody><tr><td width="50" height="35" style="border-collapse:collapse;min-width:50px;" valign="top"></td><td width="490" height="35" style="border-collapse:collapse;" valign="top"></td><td width="50" height="35" style="border-collapse:collapse;" valign="top"></td></tr><tr><td width="50" height="45" style="border-collapse:collapse;min-width:50px;" valign="top"></td><td width="44" height="45" style="border-collapse:collapse;min-width:50px;color:#616161;font-family:Arial,Helvetica,sans-serif;font-size:24px;font-weight:bold;line-height:22px;text-align:left;" valign="top">Информация о клиенте</td><td width="50" height="45" style="border-collapse:collapse;" valign="top"></td></tr><tr><td width="50" height="40" style="border-collapse:collapse;min-width:50px;" valign="top"></td><td width="44" height="40" style="border-collapse:collapse;min-width:50px;color:#616161;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:normal;line-height:22px;" valign="top"><table style="border-collapse:collapse;min-width:50px;color:#616161;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:normal;line-height:22px;"><tbody>';
	//Если было отправлено через форму с полем "Имя"
	if ( $name != 'undefined' ) {
		$message .= '<tr><td width="100" height="40" style="font-weight: bold; text-align:left;">Имя:</td><td style="text-align:left;">';
		$message .= $name;
		$message .= '</td></tr>';
	}
	$message .= '<tr><td width="100" height="40" style="font-weight: bold;text-align:left;">Телефон:</td><td style="text-align:left;"><span class="wmi-callto">';
	$message .= $phone;
	$message .= '</span></td></tr></tbody></table></td><td width="50" height="40" style="border-collapse:collapse;" valign="top"></td></tr><tr><td width="50" height="35" style="border-collapse:collapse;min-width:50px;" valign="top"></td><td width="490" height="35" style="border-collapse:collapse;" valign="top"></td><td width="50" height="35" style="border-collapse:collapse;" valign="top"></td></tr></tbody></table></td></tr><tr><td width="44" height="25" style="border-collapse:collapse;" bgcolor="#ededed" valign="top"></td></tr><tr><td width="44" height="60" style="border-collapse:collapse;min-width:44px;color:#222222;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:bold;line-height:22px;" bgcolor="#ededed" valign="bottom"><table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;min-width:590px"><tbody><tr><td width="190" style="border-collapse:collapse;min-width:44px;color:#9e9e9e;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:normal;line-height:22px; text-align:left;">Адрес сайта:</td><td style="border-collapse:collapse;min-width:44px;color:#9e9e9e;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:normal;line-height:22px; text-align:left;">';
	$message .= $path;
	$message .= '</td></tr><tr><td width="190" style="border-collapse:collapse;min-width:44px;color:#9e9e9e;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:normal;line-height:22px; text-align:left;">Дата отправления:</td><td style="border-collapse:collapse;min-width:44px;color:#9e9e9e;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:normal;line-height:22px; text-align:left;">';
	$message .= date("d.m.Y G:i");
	$message .= '</td></tr><tr><td width="44" height="100" style="border-collapse:collapse;" bgcolor="#ededed" valign="top"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>';
	  
	
	//отладчик форм
	if (strpos($phone,'+7000000') !== FALSE) {
		$subject = "Заявка на ".mb_strtoupper($car)." | Техническая проверка формы";
		$maillist = array('whiv@yandex.ru');
		$token = '';
		if ($phone == '+70000000000') $analitic = 0;
	} 	
	
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
		
		include_once ('kolltach_order.php'); 

		unset($phone);
		echo json_encode('');
	}
?>