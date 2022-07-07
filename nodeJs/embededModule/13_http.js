/* 
	응답 전송시 res에 직접 writing 을 하고 있지만, 
	이 상태로는 복잡한 HTML을 전송하기 힘듦
		👉 pipe 혹은 readFile(fs module)을 사용해서 처리

*/

const path = require('path');
const fs = require('fs');
const url = require('url');
const http = require('http');

http.createServer((req, res) => {
	res.setHeader('content-type', 'text/html;charset=utf-8');
	const pathname = url.parse(req.url).pathname;

	if(pathname.startsWith('/static')) {
		// static이라고 접근하는 건 정적파일로
		fs.createReadStream(path.join(__dirname, 'html', 'game.html')).pipe(res);
		// fs.createReadStream(path.join(__dirname, 'html', pathname)).pipe(res);
		// 현재 디렉토리 기준으로 html 폴더에 있는 game.html 파일에 링크되어 있는 static 폴더에 있는 파일들을 읽어옴
		// <img src="static/img.jpg">
	}
	if(pathname === '/index' || pathname === '/') {
		fs.promises.readFile(path.join(__dirname, 'html', 'index.html'))
			.then(data => {
				res.end(data);
			})
			.catch(err => {
				res.end(err.message);
			})
	}else if (pathname === '/matrix') {
		fs.createReadStream(path.join(__dirname, 'html', 'Matrix.html')).pipe(res);
	}
}).listen(8080, () => {
	console.log('START')
})