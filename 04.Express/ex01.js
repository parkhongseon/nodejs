/*
** Express Framework
- 이전까지의 처리 흐름은 너무 단순했음 (서버 생성, 요청, 응답)
- DB연결, 세세한 모듈설정, 라우팅 작업 .. 해야할 일들이 많아짐
=> 너무 많은 js 파일이 생기고 코드의 중복화가 심해짐 
- 더 적은 코드로 더 많은 일을 할 수 있도록 남이 만들어놓은
    프레임워크를 가져다가 쓸꺼임( express)
    
    ##tip! 프레임워크 vs 라이브러리 차이?
    - 공통점 : 나의 개발을 쉽게 하도록 도와준다.
    - 차이점 : 개발의 주체
    > 프레임워크 : 프레임워크 (쉽게 개발 가능, 규칙을 잘 지켜야함)
    > 라이브러리 : 나! 
    
    ** 사용법
    ** "분업화" 진행 
    1) 사용자에 요청에 따른 기능을 정의 : Middleware
    2) 사용자가 요청한 경로에 따른 정의  : Router
    (ex. 나 로그인 하고싶어! => login 경로로 이동)
    3) 환경 변수에 관련된 정보 저장(DB연결, API key값) : config
    4) 응답하는 코드를 쉽게, 다양하게 작성할 수 있는 Template Engine

    ** 사용방법
    1) 원하는 폴더에 npm init -y
        => package.json 파일이 생성이 된다.
        => 이 프로젝트에 대한 전반적인 사항이 기록되어있음

    2) npm i express 
    - node_modules 이라는 폴더 생성
    - express라는 애가 제공하는 모듈을 사용
    
    3) 필요에 따라 폴더를 각각 생성
    - config : DB, API 값 저장
    - public : 이미지, 비디오, 문서 등 정적인 페이지
    - views : 동적인 페이지
    
    4) express의 메인역할을 해주는 js 파일 생성
    - server.js
    - 만약 예제 ex01.js ..
    - 이름은 자유
    
    */

    // (1) 설치한 express 기능을 가져오는 코드
    const express = require('express')

    // (2)express를 실행해주는 코드
    const app = express()

    //* port 기본 포트로 지정하는 방법 */
    app.set('port', process.env.PORT || 3333)

    // ** 정적인 파일을 클라이언트에게 바로 응답해주는게 x
    //    미들웨어를 하나 거치고 응답
    app.use(express.static(__dirname+'/public'))
    
    app.get('/', (req,res)=>{
        console.log('서버시작!')

        //CASE 1. 단순 문자 응답하기
        //res.send('Hello world')

        // case 2. html 문서를 응답하기 : sendFile
        //__dirname : 현재 경로를 기준으로
        res.sendFile(__dirname+'/ex01.html')
    })


    // (3)port 번호 설정
    // ** app.listen이 가장 하단에 와야함 
    app.listen(app.get('port'));



