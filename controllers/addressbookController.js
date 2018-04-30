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

}

// findById
addressbookController.FindById = function(req, res){

}

// findByIdAndUpdate
addressbookController.FindByIdAndUpdate = function(req, res){

}

// FindByIdAndRemove
addressbookController.FindByIdAndRemove = function(req, res){

}

// FindOne
addressbookController.FindOne = function(req, res){

}

// FindOneAndUpdate
addressbookController.FindOneAndUpdate = function(req, res){

}

// FindOneAndRemove
addressbookController.FindOneAndRemove = function(req, res){

}

// DeleteOne
addressbookController.DeleteOne = function(req, res){

}

// DeleteMany
addressbookController.DeleteMany = function(req, res){

}

module.exports = addressbookController;