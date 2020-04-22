// var mongoose=require('mongoose');

// var userSchema =new mongoose.Schema({
//    	email:String,
//    	password:String

// },{versionKey: false});

// var Account = mongoose.model('Account',userSchema,'Account');

// module.exports=Account;
const db = require("./db");
const dbName = "PeExpress";
const collectionName = "Account";

db.initialize(dbName, collectionName, function(dbCollection) { // successCallback
    // get all items
    module.exports.Account1=dbCollection;

}, function(err) { // failureCallback
    throw (err);
});

