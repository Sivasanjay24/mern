const mdb = require('mongoose');
const signupSchema = mdb.Schema
({
    firstname: String,
    lastname: String, 
    email: String,
    password: String,
    phonenumber: Number
})
const signupModel = mdb.model('signup', signupSchema);
module.exports = signupModel;

