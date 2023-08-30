const express = require ('express')
const router = express.Router();
const path = require('path')

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public/ex02login.html'))
})

router.post('/postLogin', (req,res)=>{
    console.log('login Router')
 
    if (req.body.id == "admin" && req.body.pw == 1234) {
      res.render("loginResult", {msg : "성공", id : req.body.id});
    } else {
      res.render("loginResult", {msg : '실패'});
    }
 
 
 })
module.exports = router;



