var mongoose = require('mongoose');

var AddressBookSchema = new mongoose.Schema({
    name: String,
    address: String,
    phone: String
});

module.exports = mongoose.model('AddressBook', AddressBookSchema);