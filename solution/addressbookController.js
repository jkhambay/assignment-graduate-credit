var mongoose = require('mongoose');
var AddressBook = require('../models/AddressBook');

// Create a controller
var addressbookController = {};

// find
addressbookController.Find = function(req, res){
    AddressBook.find({})
    .then((contacts)=>{
        res.render('crud_contacts', {
            "contacts" : contacts
        }); 
    })
    .catch((err)=>{
        console.log(err);
    });
}

// save
addressbookController.Save = function(req, res){
    var contact = new AddressBook({
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone
    });
    
    contact.save()
    .then(()=>{
        res.redirect('/addressbook');
    })
    .catch((err)=>{
        console.log(err);
        res.redirect('/addressbook');
    });
}

// findById
addressbookController.FindById = function(req, res){
    AddressBook.findById({ _id: req.body.id})
    .then((contact)=>{
        res.render('find_contact', {
            "contact" : contact
        }); 
    })
    .catch((err)=>{
        console.log(err);
        res.redirect('/addressbook');
    });
}

// findByIdAndUpdate
addressbookController.FindByIdAndUpdate = function(req, res){
    AddressBook.findByIdAndUpdate(req.body.id1, { name: req.body.name1,
                                               address: req.body.address1,
                                               phone: req.body.phone1})
    .then(()=>{
        res.redirect('/addressbook');
    })
    .catch((err)=>{
        console.log(err);
        res.redirect('/addressbook');
    });
}

// FindByIdAndRemove
addressbookController.FindByIdAndRemove = function(req, res){
    AddressBook.findByIdAndRemove(req.body.id2)
    .then(()=>{
        res.redirect('/addressbook');
    })
    .catch((err)=>{
        console.log(err);
        res.redirect('/addressbook');
    });
}

// FindOne
addressbookController.FindOne = function(req, res){
    AddressBook.findOne({ name: req.body.name3})
    .then((contact)=>{
        res.render('find_contact', {
            "contact" : contact
        });
    })
    .catch((err)=>{
        console.log(err);
        res.redirect('/addressbook');
    });
}

// FindOneAndUpdate
addressbookController.FindOneAndUpdate = function(req, res){
    AddressBook.findOneAndUpdate({ name: req.body.name4 }, 
                                 { address: req.body.address4, phone: req.body.phone4})
    .then(()=>{
        res.redirect('/addressbook');
    })
    .catch((err)=>{
        console.log(err);
        res.redirect('/addressbook');
    });
}

// FindOneAndRemove
addressbookController.FindOneAndRemove = function(req, res){
    AddressBook.findOneAndRemove({ name:req.body.name5 })
    .then(()=>{
        res.redirect('/addressbook');
    })
    .catch((err)=>{
        console.log(err);
        res.redirect('/addressbook');
    });
}

// DeleteOne
addressbookController.DeleteOne = function(req, res){
    AddressBook.deleteOne({ name: req.body.name6})
    .then(()=>{
        res.redirect('/addressbook');
    })
    .catch((err)=>{
        console.log(err);
        res.redirect('/addressbook');
    });
}

// DeleteMany
addressbookController.DeleteMany = function(req, res){
    AddressBook.deleteMany({ name: req.body.name7 })
    .then(()=>{
        res.redirect('/addressbook');
    })
    .catch((err)=>{
        console.log(err);
        res.redirect('/addressbook');
    });
}

module.exports = addressbookController;