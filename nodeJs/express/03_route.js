const express = require('express');
const app = express();

function filter(req, res, next) {   // 매개변수 3개 👉 미들웨어
	console.log(`filtering at ${req.path}`);    // url.parse()  ===> pathname
	if(Math.random() > 0.5) {
		next()
	} else {
		res.redirect('/all');
	}
}

app.all('/all', (req, res) => {
	// app.all() : 모든 HTTP 메서드 처리, 라우팅 처리
	res.send('모든 요청 방식(method)를 처리함')
})
app.get('/gets', filter, (req, resp) => {   // 매개변수 2개 👉 핸들러 함수
	resp.send('/gets에서 요청처리 함')
})

app.get('/get', filter, (req, res, next) => {
	console.log('middleware');	// 라우팅 처리하고
	next();
}, (req, res) => {	// 응답보냄
	res.send('요청 정상적으로 받았음')
})


app.listen(8080);