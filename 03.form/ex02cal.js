// 서버를 만들어서 사용자가 입력한 두개의 숫자를 더해서
// 응답하는 페이지를 구축하시오.

// 응답 페이지 :
// 첫번째 숫자 : 15
// 두번째 숫자 : 15
// 연산 결과는 30입니다.


const http = require('http')
const u_url = require('url')

const cal = (a,b, k) => {
    if (k == '+') return parseInt(a) + parseInt(b)
    if (k == '-') return a - b
    if (k == '*') return a * b
    if(k == '/') return a / b
}

http
.createServer( (req, res) => {
    console.log('create Server!')

    // await 키워드를 작성하게 되면 해당 로직이 끝날때까지 기다렸다가
    // 진행이 됨! 단, async와 늘 짝꿍이기때문에 함께 사용할 것
    let query = u_url.parse(req.url, true).query
    console.log(query)
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
    res.write(`<p>첫번째 숫자는 ${query.num1}</p>`)
    res.write(`<p>두번째 숫자는 ${query.num2}</p>`)
    res.write(`<p>연산결과는 ${parseInt(query.num1) + parseInt(query.num2)}</p>`)

    res.end()
 })
.listen(3333, () => {

    console.log('3333서버 연결중입니다.')
})



let result = "";

