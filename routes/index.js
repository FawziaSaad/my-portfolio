/* 
    Filename: index.js
    Name: Fawzia Saad
    StudentID: 301296233
    Date: Monday, May 22, 2023
*/

// Import the necessary modules and create a new router
const express = require('express');
const router = express.Router();

// GET Home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// GET Home page
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// GET About page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

// GET Projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

// GET Services page
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

// GET Contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

// Export the router
module.exports = router;

