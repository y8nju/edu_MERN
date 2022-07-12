/* 
	쿠키를 이용해서 사용자 별 저장소(session)를 운용해보자
*/

const http = require('http');
const uuid = require('uuid');
// const cookieParser = require('');

function cookieParser(str) {
	const cookies = {};	// new Map
	if(str) {
		let cookieArray = str.split(/;\s+/);
		cookieArray.forEach(obj => {
			const [name, value] = obj.split('=');
			cookies[name] = value;
			
		});
	}
	return cookies;
}

const sessions = {};
http.createServer((req, res) => {
	if(req.url == '/favicon.ico') {
		res.statusCode=404;
		return res.end();
	}
	// console.log(uuid.v4());
		// 강력한 unique한 값이 만들어진다 이걸 가지고 세션키 값으로 사용해보자

	const recvCookie = cookieParser(req.headers.cookie);
	if(!recvCookie.sessionId) {
		console.log('세션 ID가 없는 사용자 들어옴')
		const uk = uuid.v4();
		sessions[uk] = {};
		res.setHeader('set-cookie', 'sessionId='+uk);
		console.log('이 사용자에게 부여된 저장소 ID 값 : ' + uk);
	}else {
		console.log('이미 부여받은 ID가 있는 사용자 들어옴');
		console.log('이 사용자가 쓰던 저장소 ID 값 : ' + recvCookie.sessionId);
		let usedSession = sessions[recvCookie.sessionId];
		console.log(usedSession);
	}
	res.writeHead(200, {'content-type' : 'text/html'});
	res.end('<h1>?</h1>');
}).listen(8080, () => console.log('START'));