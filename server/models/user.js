/* 
    Filename: user.js
    Name: Fawzia Saad
    StudentID: 301296233
    Date: Wednesday, June 14, 2023
*/

let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema(
    {
        username:
        {
            type: String,
            default: "",
            trim: true,
            require: 'Username is required.'
        },
        email:
        {
            type: String,
            default: "",
            trim: true,
            require: 'Email Address is required.'
        },
        displayName:
        {
            type: String,
            default: "",
            trim: true,
            require: 'Display Name is required.'
        },
        created:
        {
            type: Date,
            default: Date.now
        },
        update:
        {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: 'users'
    }
);

//Configure options for User Model
let options = ({missingPasswordError: 'Wrong / Missing Password'});
User.plugin(passportLocalMongoose, options);
module.exports.User = mongoose.model('User', User);