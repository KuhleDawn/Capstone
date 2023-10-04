<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process the form submission

    // Get the form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // You can add code here to send an email using the form data if needed

    // Display the thank you message
    echo "Thank you for contacting us. We will get back to you as soon as possible.";
} else {
    // If the form was not submitted, you can display an error or redirect to the form page.
    // For example:
    // header("Location: contact_us_page.php"); // Redirect to the contact form page
    // exit();
}
?>
