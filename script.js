function submitForm() {
    console.log("submitForm function called");  // Add this line for debugging
 
    Email.send({
       Host: "smtp.gmail.com",
       Username: "asjah.marie23@gmail.com",
       Password: "cailankk",
       To: 'asjah.marie23@gmail.com',
       From: document.getElementById("email").value, // Assuming you have an element with id="email"
       Subject: "New Contact Form Inquiry",
       Body: `
          Name: ${document.getElementById("name").value}
          Email: ${document.getElementById("email").value}
          Phone: ${document.getElementById("phone").value}
          Subject: ${document.getElementById("subject").value}
          Message: ${document.getElementById("message").value}
       `
    }).then(
       message => alert(message)
    );
 }
 