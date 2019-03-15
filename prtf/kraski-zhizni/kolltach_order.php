<?php
$token = '2039841128ct661062e14db3768d439e8b96a7005115';
$node = "node2";
$call_value = $_POST['call_value'];

$ch = curl_init();
curl_setopt($ch, CURLOPT_HTTPHEADER, array("Content-type: application/x-www-form-urlencoded;charset=utf-8"));

curl_setopt($ch, CURLOPT_URL,"http://api.".$node.".calltouch.ru/calls-service/RestAPI/requests/orders/register/");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS,
"clientApiId=".$token."&phoneNumber=$phone&personalPhone=false&orderComment=".$_SERVER['HTTP_USER_AGENT'].", ".$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI']."".($call_value != 'undefined' ? "&sessionId=".$call_value : ""));

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$calltouch = curl_exec ($ch);

curl_close ($ch);
?>