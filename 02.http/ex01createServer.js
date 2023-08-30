// http 서버가 있어야 웹 브라우저 요청을 처리 할 수 있다.
// http 모듈 : 현재 파일을 서버로 만들어주는 모듈 
// 내 ip 주소 : 192.168.21.1
const http = require('http');
const ip = require('ip');

http
    .createServer((req,res)=>{
        //첫번째 인자 req(request), 요청에 관한 정보들, 클라이언트 주는 정보들
        //두번째 인자 res(response), 응답에 관한 정보들, 서버가 제공하는 정보들
        console.log('create Server!')
        let ip_res = ip.address()
        console.log('접급한 ip 주소는', ip_res)

        res.writeHead(200,{"Content-Type":'text/html; charset=utf-8'})
        res.write('<h1>배고프다</h1>')
        res.write('<p>접속한 사용자의 ip</p>'+ip_res)
        res.end()
    })
    .listen(3333,()=>{
        console.log('3333번 포트에서 서버연결 대기 중입니다...')
    })

