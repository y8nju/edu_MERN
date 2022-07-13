const express = require('express');
const app = express();

app.get('/exchange', (req, res) => {
	let won = req.query.won.toFixed(0);
	let usd = won * 0.00077;
	res.send(`환전 신청 금액 ${req.query.won}원은 ${usd}달러입니다`);
})

// 에러 처리용 미들웨어, 문서 하단에 작성(안전성)
// 라우트 핸들러 작업 중에 발생하는 에러들을 처리함
// 404 👉 없는 경로는 에러가 아니기에 여기서 처리되지 않는다
// 404 NOT FOUND를 처리하려면
app.use((req, res, next) => {
	// 가장 마지막에 404 처리를 한다
	// 다른 page에서 next를 하고 가장 마지막에 있는 미들웨어로 넘어온다
	console.log("NOT FOUND");
	res.send('<h3>해당 경로를 찾을 수 없습니다<h3>')
})
app.use((err, req, res, next) => {     // 매개변수 4개 👉 에러 처리
	res.send('<p>서버 측의 작업 오류로 요청을 처리하지 못했습니다</p>')
	console.log(err);
	console.log(err.message);
});

app.listen(8080);