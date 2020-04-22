var express=require('express');

// var mongoose =require('mongoose');

var bodyParse=require('body-parser');

// var cookieParser=require('cookie-parser');

var loginRouters=require('./routers/login.router');




// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://tuan15041999:dkmlove15@cluster0-1n42r.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri,{useUnifiedTopology: true } );

// client.connect(err => {
//   const collection = client.db("PeExpress").collection("Account");
//   // perform actions on the collection object
//   client.close();
// }
// );
// const db = require("./models/db");
// const dbName = "PeExpress";
// const collectionName = "Account";



var app=express();
app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParse.json()) // for parsing application/json
app.use(bodyParse.urlencoded({ extended: true })) // for parsing application/x-

// app.get('/',function(req,res){
//     res.render('/login/index',{
//       });
// });

app.use('/login',loginRouters);

app.listen(process.env.PORT||3000,function(){

});

