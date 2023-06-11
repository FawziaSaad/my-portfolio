let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Game Model
let Contact = require('../models/contact');

let contactController = require('../controllers/contact')

// Get Route for the Contact List page - READ Operation
router.get('/', contactController.displayContactList);

// Get Route for the Add page - CREATE Operation
router.get('/add', contactController.displayAddPage);

// Post Route for processing the Add page - CREATE Operation
router.post('/add', contactController.processAddPage);

// Get Route for displaying the Edit page - UPDATE Operation
router.get('/edit/:id', contactController.displayEditPage);

// Post Route for processing the Edit page - UPDATE Operation
router.post('/edit/:id', contactController.processEditPage);

// Get to perform Deletion - Delete Operation
router.get('/delete/:id', contactController.performDelete);

module.exports = router;