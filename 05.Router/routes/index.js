const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send(`<h1>Main Page</h>
    <a href="/user">user 페이지 </a>
    <a href="/user hhd ">황해도 페이지 </a>
    <a href="/user jbk ">전봉균 페이지 </a>
    <a href="/user syp ">선영표 페이지 </a>
    `) 
})
router.get('/', (req,res)=>{
    res.send('<h1>login Page</h>')
    
})
module.exports = router;