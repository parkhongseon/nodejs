//서버 생성, 사용자가 원하는 구구단을 출력


res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
res.write(`<p>출력을 원하는 구구단 수를 입력하세요.</p>`)

const http = require('http');
const u_url = require('url');

http
    .createServer((req,res)=>{
        console.log('서버시작!',req.url)
        let query = u_url.parse(req.url,true).query
        console.log(query)

        res.writeHead(200,{"Content-Type" : 'text/html; charest=utf-8'})

        res.write('<table border="1px soild black">')

        for (let i=1; i<= 9; i++){
            res.write(`<tr><td>${query.num}${i}=${query.num*i}</p></td></tr>`)
        }
        res.end()
        
    })
    .listen(3333, ()=>{
        console.log('3333번 포트에서 대기중 ...')
    })