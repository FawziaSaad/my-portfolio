/* 
    Filename: users.js
    Name: Fawzia Saad
    StudentID: 301296233
    Date: Monday, May 22, 2023
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
