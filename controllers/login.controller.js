// var md5=require('md5');

var Account =require('../models/account.model');



module.exports.postLogin=async function(req,res,next){
    var userName=req.body.userName;
    var password=req.body.password;
     var dbAccount =Account.Account1;
     var getAccount =await dbAccount.findOne({email : userName});
    console.log(getAccount.password);
    // console.log(Account.Account1);
    // var account =await Account.find({email : userName});

    // console.log(account);

//     var error="";
//    if(userName !='123'){
//    	error= "Don't have user";
//    	res.render("login/log",{
//        errorsUserName :error
//    	});
//    	return;
//    }
//    if(user.password !== md5(password)){
//       error= "Wrong password";
//    	 	res.render("login/log",{
//        errorsPassword :error
//    	});
//    	return;
//    }
// 	res.redirect('../home');
}

module.exports.getLogin=function(req,res,next){
    res.render("login/log");
}