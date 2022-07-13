const { response } = require('express');
const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({'extended' : true}));
// post 요청 시 추가 

app.get('/req/1', (req, res) => {
	// console.log(req);
	console.table(req.query); // query String이 parsing되서 객체로 설정되어 있다
	console.log(req.ip);    // 요청자의 ip
	console.log(req.cookies);   // 사용자 쿠키값이 나오는데 외부 미들웨어가 필요
	
	console.log(req.method);    //
	// res.sendStatus(200);
	res.sendFile(path.join(__dirname, 'view', 'form.html'))
});
app.post('/req/2', (req, res) => {  // post 처리
	console.log('post', req.body);
	res.send('👌' + req.body.visitor+'님 안녕하세요');
})
app.get('/req/2', (req, res) => {   // get요청 처리
	console.log('get', req.body);
	res.send('👌');
})

app.listen(8080);