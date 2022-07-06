const http = require('http');
const url = require('url');

/* 

*/

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
	res.setHeader('content-type', 'text/html;charset=utf-8');
	res.write(`
		<html>
			<body>
				<h3>요청한 path</h3>
				<p>${url.parse(req.url).pathname}</p>
				<h3>요청한 query</h3>
				<p>${url.parse(req.url).query}</p>
			</body>
		</html>
	`);
	res.end();
}).listen(8080, () => {
	console.clear();
	console.log('[Server] Started');
});