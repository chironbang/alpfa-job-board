const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// Main route serving the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'home.html'), (err) => {
    if (err) {
      res.status(404).send('File not found');
    }
  });
});

// Route for admin page
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'admin.html'), (err) => {
    if (err) {
      res.status(404).send('File not found');
    }
  });
});

// Route for employers page
app.get('/employers', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'employers.html'), (err) => {
    if (err) {
      res.status(404).send('File not found');
    }
  });
});

// Route for applicants page
app.get('/applicants', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'applicant.html'), (err) => {
    if (err) {
      res.status(404).send('File not found');
    }
  });
});

// ... other server routes and logic ...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
