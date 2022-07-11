/* 
	쿠키라는 건 사용자의 브라우저에서 관리되는 임시 파일
	쿠키라는 걸 이용해서 서버측에서는 사용자의 세션을 구분해서 관리함 
*/
const http = require('http');
http.createServer((req, res) => {
	/* 
		https://luckyyowu.tistory.com/346
		req: request 요청
		res: response 응답
	 */
	if(req.url === '/') {
		// 여기 접속했을 때 사용자에게 WELCOME 이라고 보내면서
		// 쿠키를 함께 하나 보내자
		// https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Set-Cookie
		res.writeHead(200, {
			'content-type' : 'text/html;charset=utf-8',
			'set-cookie' : [
				'personalkey=DJKLAMLEW290DMNLAw#AFO',
				'commonkey=h1'
				// cookie의 value로 한글은 지원되지 않는다
			]
			// 'set-cookie' : 
		})
		res.end('<h1>WELCOME TO APP👋</h1>');
	} else if (req.url === '/view'){
		let cookie = req.headers.cookie;
		// 쿠키 가져와보자
		console.log(cookie);
		// 만약 쿠키가 없다면 undefined, 있다면 string으로 나온다
		// 쿠키의 정보는 쿠키이름 = 쿠키값 이런 형태로 추출된다
		// 만약 사용자로부터 전달받은 쿠키가 여러개라면 ; 이 붙은 형태로 추출이 된다
		// 해당 string을 가지고 적절한 조치를 취해서 쿠키를 분리하고
		//쿠키 이름과 값 역시 분리해서 출력해보자
		res.writeHead(200, {'content-type' : 'text/html;charset=utf-8'});
		if(cookie === undefined) {
			res.write('<h1>🍪❌</h1>');
		}else {
				let cookieArray = cookie.split(/;\s+/);
				let cookies = {};
			cookieArray.forEach(obj => {
				console.log(obj);
				const [name, value] = obj.split('=');
				cookies[name] = value;
				res.write(`
				🍪 쿠키이름 : ${name} / 값 : ${value} ✨<br>
				`)
			});
			
			res.write(JSON.stringify(cookies));
			console.log(cookies.personalkey);
		}

		res.end()
	}else {
		res.writeHead(200, {'content-type' : 'text/html;charset=utf-8'});
		res.end('<h1>NOT FOUND🤦‍♀️</h1>')
	}
}).listen(8080);