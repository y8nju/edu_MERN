const http = require('http');
const path = require('path');
const url = require('url');
const ejs = require('ejs');

/* 
	제공하는 URL로 데이터를 사용자가 쉽게 보내게 하는 HTML 요소들에 대해
*/

http.createServer(async (req, res) => {
	const pathname = url.parse(req.url, true).pathname;
	if(pathname === '/sample/a') {
		let html = await ejs.renderFile(path.join(__dirname, 'view', 'a.ejs'));
		res.writeHead(200, {'content-type' : 'text/html;charset=utf-8'});
		return res.end(html);
	} else if(pathname === '/sample/b') {
		let html = await ejs.renderFile(path.join(__dirname, 'view', 'b.ejs'));
		res.writeHead(200, {'content-type' : 'text/html;charset=utf-8'});
		return res.end(html);
	}
	res.end('Not READY');
}).listen(8080, () => {
	console.log('START')
})