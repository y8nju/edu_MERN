const express = require('express');
const app = express();

// [Express] app.use()에 대해 [https://morian-kim.tistory.com/3]

app.use('/product', (req, res, next) => {   // /product 경로에서만 작동하는 미들웨어
	// use는 라우팅 ❌, 미들웨어를 등록하는 용도이다
	console.log('어플리케이션에 설정된 미들웨어');
	next();
});
/* 
	이렇게 사용하면 ❌❌❌
	app.use('/product', (req, res, next) => {   
		res.send(`<h1>${req.path}</h1>`)
	});
 */
app.get('/product', (req, res) => {
	res.send(`<h1>${req.path}</h1>`)
});
app.get('/product/delete', (req, res) => {
	res.send(`<h1>${req.path}</h1>`)
});
app.get('/game/record', (req, res) => {
	res.send(`<h1>${req.path}</h1>`)
});

app.listen(8080);