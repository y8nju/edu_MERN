/* 
	쿠키를 이용해서 사용자 별 저장소(session)를 운용해보자
*/

const http = require('http');
const uuid = require('uuid');
const url = require('url');
const path = require('path')
const ejs = require('ejs');

const sessions = {};
const namePool = [];

http.createServer(async (req, res) => {
	if(req.url == '/favicon.ico') {
		res.statusCode=404;
		return res.end();
	}

	const recvCookie = cookieParser(req.headers.cookie);
	let currentUserSession;
	if(!recvCookie.sessionId) {
		const uk = uuid.v4();
		sessions[uk] = {};
		res.setHeader('set-cookie', 'sessionId='+uk);
		currentUserSession = sessions[uk];
	}else {
		currentUserSession = sessions[recvCookie.sessionId];
	}

	if(req.url === '/game') {
		if(!currentUserSession.playerName) {
			res.writeHead(302, {"location":"/login"});
			return res.end();
		}else {
			let html = await ejs.renderFile(path.join(__dirname,"view","game.ejs"), {currentUserSession});
			return res.end(html);
		}
	} else if(req.url === '/login') {
		let html = await ejs.renderFile(path.join(__dirname, 'view', 'login.ejs'), {msg: ''});
		return res.end(html);
	} else if(req.url.startsWith('/session')) {
		let query = url.parse(req.url, true).query;
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