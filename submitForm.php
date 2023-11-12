<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $to = "asjah.marie23@gmail.com"; // Change this to your email
    $subject = "New Contact Form Submission";
    $email_body = "Name: $name\nPhone: $phone\nSubject: $subject\nMessage: $message";
    
    $headers = "From: asjah.marie23@gmail.com"; // Change this to your email
    
    // Send email
    mail($to, $subject, $email_body, $headers);
    // Redirect back to the contact page or a thank you page
    header("Location: contact.html");
}
?>
