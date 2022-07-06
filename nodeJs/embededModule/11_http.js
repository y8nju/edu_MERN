const http = require('http');
const url = require('url');

/* 
	사용자가 요청한 URL에 따라 다른 HTML 응답을 보내게 설계
	url이 / , /index 인 경우에는 WELCOME
	/learn이면 ul태그로 list 출력
	그 외 Page Not Found
*/

http.createServer((req, res) => {
	let pathName = url.parse(req.url).pathname;
	res.setHeader('content-type', 'text/html;charset=utf-8');
	if( pathName === '/' || pathName === '/index'){
		res.write(`<h1>WELCOME</h1>`)
	} else if(pathName === '/learn') {
		// res.write(`<ul>
		// 				<li>불닭볶음면</li>
		// 				<li>육개장</li>
		// 				<li>열라면</li>
		// 			</ul>
		// `)
		res.write(`<ul>`);
		['불닭볶음면', '육개장', '열라면'].forEach(elm => res.write(`<li>${elm}</li>`))
		res.write(`</ul>`);
	}else {
		res.write('Page Not Found');
	}
	res.end();
}).listen(8080, () => {
	console.log('[Server] Started');
});