/* 
    Filename: index.js
    Name: Fawzia Saad
    StudentID: 301296233
    Date: Monday, May 22, 2023
*/

// Import the necessary modules and create a new router
var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');
/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

module.exports = router;
