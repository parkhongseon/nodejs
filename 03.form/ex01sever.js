const http = require('http');
const u_url = require('url');
// 사용자가 요청한 url을 분석하기 위해 사용하는 모듈
// 현재 넘어오는 요청 url => /?id=123&pw=123

http
    .createServer((req,res)=>{
        console.log('서버시작!',req.url)
        //front에서 back으로 넘겨준 정보? request
        //현재 가져온 url을 파싱 => 내가 사용하기 쉽게 
        let query = u_url.parse(req.url,true).query
        console.log(query)
    })
    .listen(3333, ()=>{
        console.log('3333번 포트에서 대기중 ...')
    })

    // abc님 환영합니다!
    res.writeHead(200,{"Content-Type" : 'text/html; charest=utf-8'})
    res.write('<h3>'+query.id+'님 환영합니다!</h3>')
    res.end()




//nodemon 설치가 안될 때?(w)
//1. vscode 창 전부 끄기
//2. 관리자권한으로 재실행
//3. Set-ExecutionPolicy Unrestricted 터미널에 실행
//4. nodemon ~ 재실행