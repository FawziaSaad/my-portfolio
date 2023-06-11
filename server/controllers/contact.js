let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Game Model
let Contact = require('../models/contact');

module.exports.displayContactList = async (req, res, next)=>{
    try {
        let contactList = await Contact.find();
        let sortedList = contactList.sort((a, b) => a.name > b.name ? 1 : -1);
        res.render('contact/list', {title: 'Contacts', ContactList: sortedList})
    } catch (err){
        console.log(err);
    }
};

module.exports.displayAddPage = async (req, res, next)=>{
    try {
        res.render('contact/add', {title: 'Contacts'})
    } catch (err){
        console.log(err);
    }
};

module.exports.processAddPage = async (req, res, next) => {
    let newContact = new Contact({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    try {
        await newContact.save();
        res.redirect('/contacts-list')
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.displayEditPage = async (req, res, next) => {
    let id = req.params.id;
    console.log("Hello World!");
    try {
        let contactToEdit = await Contact.findById(id);
        res.render('contact/edit', {title: 'Edit Contact', contact: contactToEdit});
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.processEditPage = async (req, res, next) => {
    let id = req.params.id;

    let updatedContact = {
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    };

    try {
        await Contact.updateOne({_id: id}, updatedContact);
        res.redirect('/contacts-list');
    } catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.performDelete = async (req, res, next) => {
    let id = req.params.id;

    try {
        await Contact.findByIdAndRemove(id);
        res.redirect('/contacts-list');
    }catch (err){
        console.log(err);
        res.status(500).send(err);
    }
};