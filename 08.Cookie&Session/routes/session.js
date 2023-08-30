const express = require('express')
const router = express.Router()

/* 세션 (Session)
- server가 client에게 암호화된 아이디 (session ID)를 부여함
- 쿠키와 다른 점이 있다면?
> 세션은 서버의 자원을 쓰는 것, 너무 많은 세션을 낭비하지 않는 것이 좋다
> 브라우저가 종료되면 세션은 자동 삭제
- 로그인, 로그아웃

1) 설치
- 세션 기능 : express-session
- 세션 저장소 : session-file-store

2) require
3) 세션 미들웨어 셋팅(httpOnly, resave, secret, store)
*/

// 1) 세션 생성하기
router.get('/setsession', (req,res)=>{
    req.session.nick = "춘식이";
    res.send('세션 생성 완료!')
})

//2) 세션 값 확인하기
router.get('/getsession', (req,ress)=>{
    res.send('user : + req.session.nick')
})

// 3) 세션 삭제하기 (단일 삭제, 전체 삭제11111110
router.get('/delsession',(req,res)=>{
    //req.session.nick = ""; // 데이터 하나만 삭제
    req.session.destroy(); // 전체삭제
    res.send('삭제완료!')
})
 
module.exports = router;