const express = require('express')
const app = express();
// const u_url = require('url')

const indexRouter = require('./routes')

// 클라이언트의 post request data를 편리하게 추출해주는 모듈
const bodyParser = require('body-parser')

const nunjucks = require('nunjucks')
app.set('view engine', 'html')
nunjucks.configure('views', {
   express : app, 
   watch : true
})


// bodyParser 미들웨어 등록
app.use(bodyParser.urlencoded({extended : true}))

app.set('port',process.env.PORT || 3333)

// Case 1 : 정적인 페이지로 관리하기
// public 폴더 안에 있는 문서를 사용하기 위한 준비

// 메인페이지를 열었을 때, ex02login.html 파일이 보이도록
// app.get('/', (req,res)=>{
//     res.sendFile(__dirname+'/public/ex02login.html')
// })

// Case 2 : Router + Templat으로 관리하기
app.use('/',indexRouter)


// get 방식으로 데이터를 보내줬을 때
// express + get방식 => 요청.query 안에 데이터가 들어있다.
app.get('/getLogin',(req,res)=>{
    console.log(req.query)
})

// Case 1) 정적인 페이질 관리하기
// post방식으로 데이터를 보내줬을 때
// - post방식으로 데이터를 받아오고 싶을 때 필요한 모듈 body-parser
// app.post('/postLogin',(req,res)=>{
//     console.log('post login',req.body)

//     /*만약 아이디가 admin이고 비밀번호가 1234라면 loginSuccess 화면을 띄워주고, 그렇지 않다면 loginFaile 화면을 띄워준다*/
//     if(req.body.id == "admin" && req.body.pw == 1234){
//         res.sendFile(__dirname+'/public/loginSuccess.html')
//     }else {
//         res.sendFile(__dirname+'/public/loginFailed.html') 
//     }
// })

app.listen(app.get('port'))