// https://expressjs.com/ko/starter/basic-routing.html
// 미들웨어 기반 라우팅 시스템
const express = require('express');
// console.log(express);
const app = express();
const path = require('path');
const port = 8080;

/* 
	set
	http://expressjs.com/ko/api.html#app
*/
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"view") );

// =============================
/* 
	미들웨어
	미들웨어는 서로 다른 애플리케이션이 서로 통신하는 데 사용되는 소프트웨어입니다.
	https://www.redhat.com/ko/topics/middleware/what-is-middleware
*/
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
	// 미들웨어: 중간에서 역할을 하는 용도
	console.log('use custom middleware-1');
	// res.send('이 메세지는 미들웨어에서 전송');
	next();
});
app.use((req, res, next) => {
	console.log('use custom middleware-2');
	next();
});

app.get('/', (req, res) => {
	res.send('<h1>HELLO WORLD</h1>');
	res.end();
});
app.get('/notice', (req, res) => {
	// send 전송은 Content-Type: text/html; charset=utf-8
	res.send('<h1>공지사항</h1>');
});
app.get('/help', (req, res) => {
	// 이미 만들어진 HTML을 전송하려면?
	res.sendFile(path.join(__dirname, 'view', 'help.html'))
});
app.get('/inform', (req, res) => {
	// ejs 파일
	res.render('inform', {
		array: ['월', '화', '수', '목', '금']
	})
});
app.get('/private', (req, res) => {
	// 리다이렉트
	res.redirect('/');
});
app.get('/code', (req, res) => {
	// 상태코드
	// res.sendStatus(401);
	res.status(401).send('<h3>권한이 없습니다🙅🏻‍♀️</h3>')
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});