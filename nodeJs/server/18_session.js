/* 
	쿠키를 이용해서 사용자 별 저장소(session)를 운용해보자
*/

const http = require('http');
const uuid = require('uuid');
const url = require('url');
const path = require('path')
const ejs = require('ejs');

const sessions = new Map();	//  {}
const namePool = [];

http.createServer(async (req, res) => {
	if(req.url == '/favicon.ico') {
		res.statusCode=404;
		return res.end();
	}

	const recvCookie = cookieParser(req.headers.cookie);
	let currentUserSession;
	if(!recvCookie.sessionId) {	// 세션ID를 부여받지 않은 사용자
		const uk = uuid.v4();
		// sessions[uk] = {};
		sessions.set(uk, {});
		res.setHeader('set-cookie', 'sessionId='+uk);
		// currentUserSession = sessions[uk];
		currentUserSession = sessions.get(uk);
	}else {	// 세션ID를 부여받은 사용자
		if(sessions.get(recvCookie.sessionId) === undefined) {
			currentUserSession = sessions.get(uk);
		}
		// currentUserSession = sessions[recvCookie.sessionId];
		currentUserSession = sessions.get(recvCookie.sessionId);
	}

	if(req.url === '/game') {
		if(!currentUserSession.playerName) {	// currentUserSession.playerName 이 존재하지 않으면
			res.writeHead(302, {"location":"/login"});	// login 페이지로 보냄
			return res.end();
		}else {
			let html = await ejs.renderFile(path.join(__dirname,"view","game.ejs"), {currentUserSession});
			return res.end(html);
		}
	} else if(req.url === '/login') {
		let html = await ejs.renderFile(path.join(__dirname, 'view', 'login.ejs'), {msg: ''});
		return res.end(html);
	} else if(req.url.startsWith('/session')) {
		let query = url.parse(req.url, true).query;	// query면 get 방식일 확률 ☝
		if(namePool.includes(query.name)) {
			let html = await ejs.renderFile(path.join(__dirname, 'view', 'login.ejs'), {msg: '이미 사용 중인 이름입니다'});
			return res.end(html);
		}else {
			namePool.push(query.name);
			currentUserSession.playerName = query.name;
			res.writeHead(302, {"location" : "/game"});
			return res.end();
		}
	}

}).listen(8000, () => console.log('START'));

function cookieParser(str) {
	const cookies = {};
	if(str) {
		let cookieArray = str.split(/;\s+/);
		cookieArray.forEach(obj => {
			const [name, value] = obj.split('=');
			cookies[name] = value;
		});
	}
	return cookies;
}