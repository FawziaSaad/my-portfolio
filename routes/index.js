// Import the necessary modules and create a new router
const express = require('express');
const router = express.Router();

// Define the route for the Home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// Define the route for the Contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

// Define the route for the About page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

// Define the route for the Contact page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

// Define the route for the Contact page
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

// Export the router
module.exports = router;

