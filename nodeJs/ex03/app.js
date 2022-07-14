/* 
    회원가입이 필요하지 않는 간단한 방명록
    collection: visitor

    GET /write 👉아래의 정보를 입력할 수 있는 form
        방문자, 비밀번호, 코멘트, 

    POST /wirte 👉 위 form을 전달 받을 url
        사용자로부터 전달받은 데이터를 토대로 문서를 만듦
        + 방문일자 visiteDate 👉 Date.now(), new Date() insert

    GET /list
        collection 에서 data 가져와서 출력
 */
const express = require('express');
const path = require("path");

const app = express();
const visitor = require('./router/visitor');

app.use(express.urlencoded({'extended' : true}));


app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "view") );


app.use('/', visitor)
app.use('/wirte', visitor);
app.use('/list', visitor);

app.listen(8080);