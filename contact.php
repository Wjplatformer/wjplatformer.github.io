<?php

if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['Mail'];
    $message = $_POST['Message'];

    $mailTo = "nifak40057@teasya.com";
    $headers = "From: ".$mailFrom;
    $txt = "You are spammed by ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $header);
    header("Location: index.html?mailsend");

}

php>
