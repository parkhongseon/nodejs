/*
ex05회원가입.html에서 받아온 정보들을 가지고
본인을 소개하는 페이지를 만들어주세요.

- 필수 포함 정보 : 이름, 취미, 생일, mbti, 하고싶은 말(talk)

1. 서버 생성
2. post방식으로 넘어온 데이터 누적
3. 누적이 끝났을 때 데이터 출력
4. 내가 받아온 데이터를 기반으로 홈페이지를 응답해주자
5. 응답하는 코드는 req.on('end',()=>{}) <- 해당 콜백함수 안에 들어가야 함
*/ 


const http = require('http')
const qs = require('querystring')

    const http = require('http');
    const qs = require('querystring')

    http
    .createServer((req,res)=>{
        console.log('server start!')
    })
   

    let body = "";
    // 1. 데이터 누적
    req.on('data',(data)=>{
        body += data;
    })
    //2. 누적된 데이터 출력
    req.on('end',()=>{
        let post = qs.parse(body)
        console.log(post)

        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
        res.write(`안녕하세요 저는 ${post.name}이구요, 제 취미는 ${post.hobby}입니다.저의 mbti는 ${post.nbti}입니다. `)
        
    })
.listen(3333,()=>{'3333 port ..'})