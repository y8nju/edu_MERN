/* 
	session 직접 만들어서 제어하는 것이 불편한 작업이다
	express로 서버 구축 할 때는 cookie-session이나 express-session 중에
	하나를 선택해서 그 미들웨어를 통해 session을 사용한다

*/
const express = require('express');
const app = express();

const session = require('express-session');

app.use(session({
	secret: 'mern'
}));

const study = require('./router/study');

app.use('/study', study)

app.listen(8080);
/* const session = require("cookie-session");

app.use(session({
	name: "session",
	keys: ['abc', 'def']
}));
*/