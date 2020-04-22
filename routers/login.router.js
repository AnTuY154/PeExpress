var express =require('express');
var router =express.Router();

var login=require("../controllers/login.controller");

router.get('/log',login.getLogin);
router.post('/log',login.postLogin);

module.exports=router;