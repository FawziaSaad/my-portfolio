/* 
    Filename: contact.js
    Name: Fawzia Saad
    StudentID: 301296233
    Date: Wednesday, June 14, 2023
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let contactController = require('../controllers/contact')

//Helper function for guard purposes
function requireAuth(req, res, next)
{
    //Check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

// Get Route for the Contact List page - READ Operation
router.get('/', requireAuth, contactController.displayContactList);

// Get Route for the Add page - CREATE Operation
router.get('/add', requireAuth, contactController.displayAddPage);

// Post Route for processing the Add page - CREATE Operation
router.post('/add', requireAuth, contactController.processAddPage);

// Get Route for displaying the Update page - UPDATE Operation
router.get('/update/:id', requireAuth, contactController.displayUpdatePage);

// Post Route for processing the Update page - UPDATE Operation
router.post('/update/:id', requireAuth, contactController.processUpdatePage);

// Get to perform Deletion - Delete Operation
router.get('/delete/:id', requireAuth, contactController.performDelete);

module.exports = router;
