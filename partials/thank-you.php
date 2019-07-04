<?php
  $fname = $_POST['fname'];
  $lname = $_POST['lname'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  $formcontent = "From: $fname $lname \n $phone \n Message: $message";
  $recipient = "ellissutehall@gmail.com";
  $mailheader = "From: $email \r\n";
  mail( $recipient, $subject, $formcontent ) or die ("Error!");
  header( "refresh:1; url=https://www.soulpower.biz/thank-you.html" );
?>
