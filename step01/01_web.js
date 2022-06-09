var http = require('http');

http.createServer(function(req, resp) {
	// 한글출력
	resp.setHeader('content-type', 'text/html;charset=utf-8');
	
	resp.end('얏호😊');
}).listen(80); // 80은 네트워크 포트