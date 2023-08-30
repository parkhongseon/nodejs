const http = require('http');
const fs = require('fs').promises ;


http
    .createSever(async (req,res)=>{
        console.log('create Sever!')

        //await 키워드를 작성하게 되면 해당 로직이 끝날때까지 기다렸다가
        //진행이 됨! 단, async와 늘 짝꿍이기 때문에 함께 사용할 것 
        const htmlFile = await fs.readFile('./ex02index.html')
        res.writeHead(200,{"Content-Type":'text/html; charset=utf-8'})
        res.end(htmlFile)
    })
    .listen(3333)
