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
	let pathName = url.parse(req.url).pathname;
	res.setHeader('content-type', 'text/html;charset=utf-8');
	let rst = url.parse(req.url, true);
	let weekData = {mon: '월', tue: '화', wed: '수', thu: '목', fri: '금', sat: '토', sun: '일'};
	let queryWeek = rst.query.week;
	let numData = /^\d{1,}$/;
	
	if(pathName === '/weekdayList' && Object.keys(weekData).includes(queryWeek) && numData.test(rst.query.rank)) {
		for (let key in weekData) {
			res.write(`<section style="text-align: center;">
				<h1>요청처리결과 😃</h1>
				<h3>${weekData[queryWeek]}요 웹툰 ${rst.query.rank}위</h3>
			</section>`)
			break
		}
		
	}else {
		res.write('<h1 style="text-align: center;">Sorry🙏 Page Not Found</h1>');
	}
	res.end();
}).listen(8080, () => {
	console.log('[Server] Start');
});

// !function() {
// 	let rst = url.parse('dayList?rank=8&gernre=action&gernre=romance', true);	
// 	// false: defult, String
// 	// true: queryString을 Object
// 	console.log(rst.query);
// }();