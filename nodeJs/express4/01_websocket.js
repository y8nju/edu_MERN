/* 
	WebSocket은 서버와 클라이언트 간의 양방향 통신을 가능하게 만들기 위해서 만들어진 기술이다
	웹 소켓이 사용하는 프로토콜은 ws이고, 
	ws 프로토콜을 처리하기 위해서는 선택지가 몇가지가 있는데,
	노드기반 서버라면 ws 모듈 정도가 있고, 
	express 기반의 서버라면 express-ws 모듈을 이용할 수 있다
	(npm i express-ws)

*/

const express = require('express');
const expressWs = require('express-ws');
const path = require('path');
const app = express();
const wsServer = expressWs(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));


app.get('/', (req, res) => {
	res.render('chat');
});

app.ws('/server', (ws, req) => {
	ws.on('message', (msg) => {
		console.log(msg);
		ws.send('SERVER send')
	})
});

app.ws('/chat', (ws, req) => {
	ws.on('message', (msg) => {
		let message = JSON.parse(msg);
		switch(message.type) {
			case 'join' :
			case 'exit' :
				wsServer.getWss().clients.forEach(one => {
					if(one !== ws) {
						one.send(msg);
					}
				})
				break;
			case 'chat' :
				wsServer.getWss().clients.forEach(one => {
					one.send(msg);
				})
				break;
		}
	})
});

app.listen(8000, ()=> {
	console.log('start');
})