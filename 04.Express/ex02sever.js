const express = require('express')
const app = express();
// const u_url = require('url')

// 클라이언트의 post request data를 편리하게 추출해주는 모듈
const bodyParser = require('body-parser')

// bodyParser 미들웨어 등록
app.use(bodyParser.urlencoded({extended : true}))

app.set('port',process.env.PORT || 3333)

// public 폴더 안에 있는 문서를 사용하기 위한 준비
app.use(express.static(__dirname+'/public'))

// 메인페이지를 열었을 때, ex02login.html 파일이 보이도록
app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/public/ex02login.html')
})

// get 방식으로 데이터를 보내줬을 때
// express + get방식 => 요청.query 안에 데이터가 들어있다.
app.get('/getLogin',(req,res)=>{
    console.log(req.query)
})


// post방식으로 데이터를 보내줬을 때
// - post방식으로 데이터를 받아오고 싶을 때 필요한 모듈 body-parser
app.post('/postLogin',(req,res)=>{
    console.log('post login!', req.body)
})
/*만약 아이디가 admin이고 비밀번호가 1234라면 loginSuccess 화면을 띄어주고,
  그렇지 않다면 loginFailed 화면을 띄어준다.
  */

  if(req.body.id == "admin" && req.body.pw == 1234){
    res.sendFile(__dirname+'/public/loginSuccess.html')
  } else{
    res.sendFile(__dirname+'/public/loginFaild.html')
  }

app.listen(app.get('port'))