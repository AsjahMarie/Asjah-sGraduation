function submitForm() {
    // Get form data
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Prepare the email message
    var emailMessage = "Name: " + name + "\n";
    emailMessage += "Phone Number: " + phone + "\n";
    emailMessage += "Email: " + email + "\n";
    emailMessage += "Subject: " + subject + "\n\n";
    emailMessage += "Message:\n" + message;

    // Configure SMTP settings
    Email.send({
        Host: "smtp.gmail.com",
        Username: "asjah.marie23@gmail.com",
        Password: "Cailankk2023!!",
        To: "asjah.marie23@gmail.com",  // Replace with your own email address
        From: "noreply@example.com",  // Set a default "From" address
        Subject: "New Contact Form Submission",
        Body: emailMessage
    }).then(
        message => alert("Message sent successfully!")
    );
}
