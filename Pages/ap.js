const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Change this to your desired port

// Parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, etc.)
app.use(express.static('public'));

// Contact Form API
app.post('/contact_form', (req, res) => {
  const { name, email, message } = req.body;

  // You can perform validation on the data here

  // Respond to the client
  res.json({
    status: 'success',
    message: 'Your message has been sent successfully!',
  });
});

// Feedback Form API
app.post('/feedback_form', (req, res) => {
  const { feedback } = req.body;

  // You can perform validation on the data here

  // Respond to the client
  res.json({
    status: 'success',
    message: 'Thank you for your feedback!',
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
