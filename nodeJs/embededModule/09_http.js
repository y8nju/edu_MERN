/* 
	서버 프로그램
		네트워크를 이용해서 원격지에 있는 사용자들을 대상으로 작동하는 프로그램
		서버 프로그램을 사용하기 위해서 사용자들에게 클라이언트 프로그램을 제공해야하는 경우가 있다

		http를 이용한 웹서버는 별도의 클라이언트 프로그램을 개발할 필요가 없다
		http: hyper text transfer protocol
		https://developer.mozilla.org/ko/docs/Web/HTTP
*/

const http = require('http');
// console.log(http);

const server = http.createServer();

server.listen(8080, () => {	// 서버 활성화 
	console.time('run');
	console.log('[Server] Started');
});	
// port Number: 0 ~ 65535(~1024 or 50000~은 사용하지 않는 것이 좋다)
// 80 실제 웹서비스하는 포트

server.on('connect', () => {
	console.log('{Server] Connect Evt!');
});

let rst = server.on('request', (req, res) => {
	console.log('{Server] Request Evt!');
	console.count('[Server] Request');
});

server.on('close', () => {
	console.log('[Sever] Terminated');
	console.time('run');
});

console.log(rst === server);	// true
// 이벤트를 처리하기 위해 on Fn을 사용하면 다시 server(this)가 return이 되서
// 이벤트 등록을 chaining 할 수 있다