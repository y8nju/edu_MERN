/* 
    이번주 목표
        - session을 이용한 사용자 인증
        - multer middleware를 이용한 파일 업로드 구현
        - fetch를 이용한 비동기 데이터 통신
*/
const express = require('express');
const path = require("path");
const session = require('express-session');
const morgan = require('morgan');
const account = require('./router/account');
const user = require('./router/user');
const article = require('./router/article');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(morgan("short"));
app.use(express.urlencoded({'extended': true}));
app.use(express.static(path.join(__dirname, 'static')));
app.use(session({secret: "P@ssw0rd", resave: true, saveUninitialized: true}));

app.use((err, req, res, next) => {
    console.log(err.message);
    response.status(500).send(err.message);
});

app.get('/', (req, res) => res.redirect('/account/signin'));

app.use('/account', account);
app.use('/user', user);
app.use('/article', article)



app.listen(8080);