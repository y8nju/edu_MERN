/*
	file system을 이용하면 이미 만들어진 HTML을 응답으로 보내는 건 가능하다
	하지만 요청처리 결과를 반영해서 HTML을 만들고자하는 건 불가능 하다

	위 상황을 해결하는 동적인 HTML을 만들어내려면 templete engine 을 사용해야 한다
	templete engine은 노드에서 제공하는 것은 아니고 모듈을 설치해야한다
	(ejs, pug, handlebar, freemarker, )

	[npm]
	https://npmtrends.com/
	https://docs.npmjs.com/

	[EJS]
	https://ejs.co/

	[HTML 상태코드]
	https://developer.mozilla.org/ko/docs/Web/HTTP/Status
*/

const http = require('http');
const path = require('path');
const url = require('url');
const ejs = require('ejs');

http.createServer((req, res) => {
	// res.setHeader('content-type', 'text/html;charset=utf-8');

	const pathname = url.parse(req.url, true).pathname;
	const query = url.parse(req.url, true).query;

	if(pathname === '/rank') {
		ejs.renderFile(path.join(__dirname, 'view', 'rank.ejs'), {
			title: 'First EJS',
			weekday: query.week,
			list: ['이솔', '이혜주']
		}).then(data => {
			res.writeHead(200, {
				'content-type' : 'text/html;charset=utf-8'
			});
			res.end(data);
		})
	}else if(pathname === '/fee') {
		/* 
			주차요금 계산 
				/fee 라는 url에서 처리
				이 url 접근시 사용자는 used이라는 이름으로 이용시간(단위 분)을 쿼리로 넘겨준다
				/fee?used=180
				이 사용 시간에 해당하는 요금을 계산해서 이걸 출력할 수 있도록 ejs를 활용한다
		*/
		let used = Number.parseInt(query.used);
		let price;
		if(used<=10 ) {
			price = 0;
		}else {
			price= 1000;
			if(used > 30) {
				price += Math.ceil((used-30)/10) *400;
			}
			price = price < 10000 ? price : 10000;
		}
		ejs.renderFile(path.join(__dirname, 'view', 'fee.ejs'), {
			title: '주차요금 계산하기',
			used,
			price
		}).then(data => {
			res.writeHead(200, {
				'content-type' : 'text/html;charset=utf-8'
			});
			res.end(data);
		})
	} else {
		ejs.renderFile(path.join(__dirname, 'view', '404.ejs'), {
		}).then(data => {
			// res.statusCode = 404;
			// html 상태코드 지정
			res.writeHead(404, {
				'content-type' : 'text/html;charset=utf-8'
			});
			res.end(data);
		})
	}
}).listen(8000, _ => {
	console.log('START')
})