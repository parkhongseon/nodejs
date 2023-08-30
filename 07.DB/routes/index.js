/* Page 이동과 관련된 경로 처리 */

const express = require('express')
const router = express.Router()

// 메인페이지로 이동 
router.get('/', (req, res) => {
    console.log('main Router', req.session.nick)
    res.render('main', {nick : req.session.nick})
})

// 회원가입 페이지로 이동 
router.get('/join', (req, res) => {
    console.log('Join Router')
    res.render('join')
})
// 로그인 페이지로 이동 
router.get('/login', (req, res) => {
    res.render('login')
})

// 특정 회원 검색 페이지로 이동 
router.get('/search', (req, res) => {
    res.render('search')
})

// 회원 탈퇴 페이지로 이동
router.get('/delete', (req,res)=>{
    res.render('delete')
})
module.exports = router;