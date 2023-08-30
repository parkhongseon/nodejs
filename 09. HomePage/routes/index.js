const express = require('express')
const router = express.Router()

// Main Page 열기
router.get('/', (req,res)=>{
   console.log('main page')
   console.log('현재 세션:', req.session.user)
   res.render('index', {obj: req.session.user})
   // => 'index.html을 렌더링 할 때 obj라는 변수 안에 세션 user값을 담아주겟다.
})

// 회원가입 Page 열기
router.get('/join',(req,res)=>{
    res.render('join')
})


module.exports = router;