const express = require('express');
const app = express();

app.use((req, res, next) => { //route
	req.time = new Date();
	next();
});

app.all('/', (req, res) => {
	console.log(req.time);
	res.send(`<h3>👌</h3>`)
});

/* 
	/chain url 출력 결과를 한번 살펴보고
		step1 next() 주석처리하고 결과를 한번 살펴보고
		step1 next() 살리고 step2 next() 주석처리하고 결과를 한번 살펴보고
		step1 next('route') 설정해보고

*/

app.get('/chain', (req, res, next) => { // /chain이라는 경로에만 동작하는 미들웨어
	console.log('/cahin - step1');
	next('route');	// 다음 미들웨어 skip하고 그 다음으로 넘어간다
}, (req, res, next) => {
	console.log('/cahin - step2');
	next();
});
app.get('/chain', (req, res) => { // /chain이라는 경로에만 동작하는 미들웨어
	console.log('/cahin - final');
	res.status(200).send('👌');
});


app.listen(8080);