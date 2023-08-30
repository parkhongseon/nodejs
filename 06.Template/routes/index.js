const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    console.log('index Router Start!')

    // 동적인 페이지를 렌더링 하고 싶을 때?
    // 응답.rander('파일명)
    // 이 때,파일은 반드시 views폴더 안에 있어야 한다.
    res.render('main',{title : "HHD"})
    
})

router.get('/mapage', (req,res)=>{
    res.render('mypage')
})

module.exports = router;