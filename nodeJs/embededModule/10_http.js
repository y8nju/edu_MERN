const http = require('http');
const url = require('url');
/* 
	url을 설계하는 방법
		- Legacy
									- Rest
*/
!function() {
	let data1 ='https://comic.naver.com/webtoon/detail?titleId=796218&no=7&weekday=wed';
	let data2 = 'https://comic.naver.com/bestChallenge/list?titleId=722846'
	// let result = url.parse(data);
	console.table(url.parse(data1));
	console.table(url.parse(data2));
};

const server = http.createServer((req, res) => {
	// req: input, res: output
	// createServer 하면서 설정하는 콜백은 on 'request'로 등록됨
	/* 
		URL: 서비스의 주소 		/article
		METHOD: 서비스를 받고자하는 목적 👉 웹용 서버 구축할 때 GET, POST 방식만 이용

	*/
	console.log('header', req.headers);
	console.log(req.url, req.method, url.parse(req.url));
	// 사용자가 서버 측에 요청한 path와 query를 분리
	
	console.log('[Server] Request Occured');
	res.setHeader('content-type', 'text/plain;charset=utf-8');
	res.write(`요청한 path는 ${url.parse(req.url).pathname}`);
	res.write(`요청한 query는 ${url.parse(req.url).query}`);
	// let requestPath = req.url.split('?')[0];
	// let requestQuery = req.url.split("?")[1];
	// res.write(`요청한 path는 ${url.parse}
	// `);
	// res.write(`요청한 query는 ${requestQuery}`);
	res.end();
}).listen(8080, () => {
	console.clear();
	console.log('[Server] Started');
});

/* 
const server = http.createServer();

server.on('request', (req, res) => {

}).listen(8080);
 */