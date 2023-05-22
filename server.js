const express = require('express');
const app = express();
const port = 3000; 

// Define routes
app.set("view engine", "ejs");
app.get('/', (req, res) => {
  // res.send('Hello, world!');
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/projects', (req, res) => {
  res.render('projects');
});

app.get('/services', (req, res) => {
  res.render('services');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
