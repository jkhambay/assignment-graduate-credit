var express = require('express');
var addressbook = require('../controllers/addressbookController');
var router = express.Router();

//Find
router.get('/', addressbook.Find);

//Save
router.post('/create', addressbook.Save);

//FindById
router.post('/findById', addressbook.FindById);

//FindByIdAndUpdate
router.post('/findByIdAndUpdate', addressbook.FindByIdAndUpdate);

//FindByIdAndRemove
router.post('/findByIdAndRemove', addressbook.FindByIdAndRemove);

//FindById
router.post('/findOne', addressbook.FindOne);

//FindOneAndUpdate
router.post('/findOneAndUpdate', addressbook.FindOneAndUpdate);

//FindOneAndRemove
router.post('/findOneAndRemove', addressbook.FindOneAndRemove);

//DeleteOne
router.post('/deleteOne', addressbook.DeleteOne);

//DeleteMany
router.post('/deleteMany', addressbook.DeleteMany);

module.exports = router;

