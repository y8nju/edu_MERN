/* 
	해당 url로 요청을 보낼 때 보내준 query를 이용해서 응답을 보냄
	url은 /weekdayList로만 처리
		이 url로 접근할 때 qeury가 날아오는데, 
		week라는 이름으로 요일 데이터 (sun ~ sat)가 넘어오고, 
		rank 라는 이름으로 숫자 데이터가 넘어온다고 가정
	이 정보를 추출해서 응답을 보내달라
		/weekdayList?week=wed&rank=1
			너의 요청 처리 결과: (수요웹툰 1위)
		/weekdayList?week=sat&rank=7
			너의 요청 처리 결과: (토요웹툰 7위)
		/dayList?rank=8
			너의 요청 처리할 수 없다
*/

const http = require('http');
const url = require('url');

http.createServer((req, res) => {
	res.setHeader('content-type', 'text/html;charset=utf-8');

	let parsed = url.parse(req.url, true);
	let pathname = parsed.pathname;
	let query = parsed.query;

	if(pathname === '/weekdayList') {
		res.write('<h2> 요청처리 결과 </h2>');
		res.write(`<p>${query.week}요 웹툰 ${query.rank} 위</p>`)
	}else {
		res.write('<h2>존재하지 않음</h2>')
	}


	res.end();
}).listen(8080, () => {
	console.log('[Server] Start');
});