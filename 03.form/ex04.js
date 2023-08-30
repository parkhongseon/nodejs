

const http = require('http')
// post방식으로 요청이 왔을 때 처리하는 방식
// 문자열을 querystring 형태로 변환

// 1. npm i querystring (터미널에 작성)
// 2. require
const qs = require('querystring')


http
    .createServer((req,res)=>{
        console.log('서버시작!')
    

        let body =''
        // 1) 사용자가 입력한 값을 누적시켜줄 공간이 필요
        req.on('data', (data)=>{
            body += data;
            console.log(body)
        })
        // 2) 사용자가 입력한 데이터 수신 및 누적이 끝나면 데이터를 출력할 수 있게됨
        req.on('end',()=>{
            let post = qs.parse(body)
            console.log(`제가 좋아하는 노래는 ${post.song} 이며, 오늘 점심 메뉴는 ${post.song} 입니다.`)
            // console에 뜬 문장을 html 문서로 나오도록 만들어주자~
            // - 응답 (ex03.js참고~~~)
            res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
            res.write(`가 좋아하는 노래는 ${post.song} 이며, 오늘 점심 메뉴는 ${post.song} 입니다.`)
        }) 
        
        
    })
    .listen(3333, ()=>{
        console.log('3333번 포트에서 대기중 ...')
    })

    
    