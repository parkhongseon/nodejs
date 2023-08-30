const express = require('express')
const app = express()

// 쿠키
const cookieRouter = require('./routes/cookie')
const cookieParser = require('cookie-parser') // 쿠키를 확인할 수 있도록 해주는 모듈

// 세션
const sessionRouter = require('./routes/session')

// 1. 세션 기능 : express-session
// 2. 세션 저장소 : session-file-store
const session = require('express-session')
const fileStore = require('session-file-store')(session)

// **미들웨어가 라우터보다 앞에 나와야 정상적으로 작동함 
// 쿠키 미들웨어
app.use(cookieParser())
app.use('/cookie', cookieRouter)

// 세션 미들웨어
app.use(session({
    httpOnly : true, //http요청으로 온 것만 처리 
    resave : false, //세션을 항상 재 저장할지?
    secret : "secret", //암호화 할 때 쓰이는 키
    store : new fileStore() //세션을 저장하기 위한 저장소
}))
app.use('/session', sessionRouter)

app.set('port', process.env.PORT || 3333)
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'),'번 포트에서 대기중..')
})