<?php
$fname = $_POST['fname'];

$lname = $_POST['lname'];

$email = $_POST['email'];

$phone = $_POST['phone'];

$subject = $_POST['subject'];

$message = $_POST['message'];

$formcontent = "From: $fname $lname \n $phone \n Message: $message";

$headers = "From: $fname < $email >\n";

$headers .= "Sender: <info@soulpower.biz> \n";

// $recipient = "ellissutehall@gmail.com";

$recipient = "dave145s@icloud.com";

mail( $recipient, $subject, $formcontent, $headers ) or die ("Error!");

header( "refresh:1; url=https://www.soulpower.biz/thank-you.html" );

?>
