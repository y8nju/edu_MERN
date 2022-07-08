/* 
	지금까지는 URL 별로 다른 요청처리를 해보았고, 
	요청이 들어올 때 같이 전송된 쿼리를 이용한 처리를 해보았다

	이번에는 요청이 들어올 때 어떤 방식(method)으로 들어왔냐에 따라 다른 처리를 해보려고 한다

*/

const http = require('http');
const path = require('path');
const url = require('url');
const querystring = require('querystring');	// GET
const ejs = require('ejs');

http.createServer(async (req, res) => {
	const pathname = url.parse(req.url, true).pathname;
	res.writeHead(200, {
		'content-type' : 'text/html;charset=utf-8'
	});
	if(pathname === '/example') {
		let data = await ejs.renderFile(path.join(__dirname, 'view', 'example.ejs'));
		// await 자체가 try, chach
		res.end(data);
	} else if(pathname === '/solution') {
		if(req.method === 'GET') {
			const query = url.parse(req.url, true).query;
			console.log(query);
		} else if(req.method === 'POST') {
			let recv;
			req.on('data', (data) => {
				console.log('onData', data, typeof data);
				// console.log('onData' + data, typeof data);
				recv = data;
				// recv += data; 문자열인 경우, toString()하지 않고 이렇게 처리해도 됨
			});
			req.on('end', () => {
				console.log(recv.toString());
				// const query = querystring.parse(recv.toString());
				// console.log(query);	// query.keyword
				const params = new URLSearchParams(recv.toString());
				// URLSearchParams 👉 인터페이스는 URL의 쿼리 문자열을 대상으로 작업할 수 있는 유틸리티 메서드
				console.log(params);	// params.get('keyword')
			})
		} else {

		}
		res.end('👌');
	} else {
		console.log(req.method);	// 방금 발생한 요청이 어떤 method인지 알 수 있다
		/* 
		대표적으로 GET, POST
		GET 요청은 BODY(Stream ❌)를 사용하지 않는 요청 방식(엽서)
			GET 요청은 서버사이드에서 query를 분석하면 되는데
		POST 요청은 BODY를 사용하는 요청 방식(편지)
			POST 요청은 query를 사용하지 않고, stream으로 전달 받기 때문에 그에 적절한 처리를 해줘야한다
		 */
		// req.on('data', (chnck) => {	//back에 데이터를 읽으라는 요청
		// 	console.log('chnck : ' + chnck)
		// });	
		res.statusCode =404;
		res.end();
	}

}).listen(8080, _ => {
	console.log('START');
});