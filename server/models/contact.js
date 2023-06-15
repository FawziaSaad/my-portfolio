/* 
    Filename: contact.js
    Name: Fawzia Saad
    StudentID: 301296233
    Date: Wednesday, June 14, 2023
*/

let mongoose = require('mongoose');

//Create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: 'contacts'
});

module.exports = mongoose.model('Contact', contactModel);