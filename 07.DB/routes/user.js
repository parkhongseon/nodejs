/*회원관리를 위한 경로 관리 */

const express = require('express')
const router = express.Router()
const conn = require('../config/database')

// 회원가입
router.post('/handleJoin', (req,res)=>{
    console.log('회원가입 라우터',req.body)
    let {id,pw,nick} = req.body
    console.log(id,pw,nick)

// DB 연동 : conn.query(sql구문, (선택)sql구문안에 데이터, 연동 이후 콜백함수)
    let sql = "insert into nodejs_member values(?,?,?)"
    conn.query(sql,[id,pw,nick], (err, rows)=>{

        if(rows){
            console.log('회원가입 성공!', rows)
            res.redirect('/')
        }else{
            console.log('회원가입 실패!')
        }
    })
})

// 로그인
router.post('/handleLogin',(req,res)=>{
    let {id, pw} = req.body ; 
    console.log(id, pw)

    let sql = "select * from nodejs_member where id=? and pw=?;"
    conn.query(sql,[id,pw], (err, rows)=>{
        if(rows.length > 0){
        console.log('로그인 성공!', rows)

        // 1) 세션 등록(닉네임)
        // ==> 세션 관련해서 두개의 모듈 설치
        // ==> require, 세션 미들웨어 세팅(server.js)


        // ==> 세션 등록(user.js)
        req.session.nick = rows[0].nick

        // 2) alert('환영합니다!')
        // 3) 메인창으로 이동
        res.send('<script>alert("환영합니다~!");location.href="http://localhost:3333"</script>')
        } else {
            console.log('로그인 실패!')
            res.send('<script>alert("잘못입력하셨습니다");location.href="http://localhost:3333/login"</script>')
        }
        


    })})


// 로그아웃
router.get('/logout',(req,res)=>{
    console.log('로그아웃', req.session.nick)
    // 세션을 하나만 삭제, nick
    req.session.nick =""

    // 왜 res.redirect('/')가 아닐까?
    // A. 메인창으로 이동할 때, 새로고침을 하고 이동, redirect는 새로고침이 x
    res.send('<script>location.href="http://localhost:3333"</script>')
   
})

// 회원 전체 검색
router.get('/selectAll',(req,res)=>{
    console.log('회원 전체 검색 router')

    let sql = "select * from nodejs_member"
    // console창에 회원 전체 데이터를 찍어볼 것!
    conn.query(sql, (err,rows)=>{
        console.log(rows)
        res.render('select', {list : rows})
    })
})

// 특정 회원 검색 
router.get('/select', (req,res)=>{
    // step 1. 사용자가 보내온 데이터를 확인하기 (get방식) 
    //  ** post방식으로 데이터를 받을 땐 req.body 
    //      get방식으로 데이터를 받을 땐 req.query 
 
    console.log(req.query.id)
 
    // step 2. DB 연동 작업 
    //      2-1) SQL 문 작성 (내가 받아온 아이디 값이 테이블에 있는지?) 
    //           => 참고 : 위에 로그인 로직 
 
    let sql = "select id, nick from nodejs_member where id=?"
 
 
    //      2-2) 내가 작성한 sql문 기반, DB 연결 
    //            => 참고 : 위에 로그인 로직 
 
    conn.query(sql, [req.query.id], (err,rows)=>{
       console.log(rows)
       //      2-3) 조건에 맞는 데이터를 select.html 뷰에 띄워주자! 
       //             => 참고 : selectAll 로직 
       res.render('select', {list : rows})
    })
 
 
 })

 // 회원 탈퇴 
router.post('/delete', (req,res) => {
    console.log(req.body)
    let {id, pw}= req.body
    // STEP 1. 사용자가 delete.html 에서 보내온 데이터를 확인하기 (post방식)
    //          ==> select router 로직 참고 
    
    // STEP 2. DB연동작업
    //      2-1) SQL문 작성 (데이터가 삭제가 되었는지?)
    //      2-2) 내가 작성한 SQL문을 기반으로 DB 연결 
    //            ==> 회원가입 router 참고 
    let sql = 'delete from nodejs-member where id=? and pw=?'
    conn.query(sql, [id, pw], (err,rows)=>{
        console.log(rows)

        if(rows.affectedRows>0){
            console.log('탈퇴 성공!')
            res.redirect('/')
        }else{
            console.log('탈퇴 실패')
            res.send('<script>alert("탈퇴실패"); location.href="http://localhost:3333/delete" </script>')
        }
           
    //      2-3) 회원 탈퇴 성공 시, 메인으로 이동 
    //            실패 시, '탈퇴 실패!' alert 다시 탈퇴창 보여주기 
    //          ==> 회원가입 router참고 
})  
    
 
 })
module.exports = router