const express = require('express')
const app = express();

const indexRouter= require('./routes')
const userRouter= require('./routes/user')

// Routing (라우팅) : 사용자가 요청에 맞는 응답을 
//                    경로 기준으로 구분하여 처리하는 것

app.use('/', indexRouter)
app.use('/user',userRouter)


app.set('port',process.env.PORT || 3333)
app.listen(app.get('port'))