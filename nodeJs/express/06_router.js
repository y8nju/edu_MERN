const express = require('express');

const webtoonRouter = require('./router/webtoon');

const app = express();

/* 
	가장 많이 쓰이는 형태의 라우팅 처리는 Router 라는 클래스를 활용하는 방법이다
	Router / 이식가능한 형태의 라우팅 핸들러들

	라우터의 장점: 모듈화가 가능하다
*/


app.use('/webtoon', webtoonRouter);

app.listen(8080);


