const express = require('express');
const expressWs = require('express-ws');
const path = require('path');
const app = express();

expressWs(app); // express 웹 서버에 웹소켓 기능 추가

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.get('/main', (req, res) => {
	res.render('main');
});

app.get('/sub', (req, res) => {
	res.render('sub')
})

// 웹 소켓용 route
// 클라에서 new WebSocket 하면서 연결을 시도 할 때 그 때 작동한다
const mainWs = new Set();
app.ws('/ws/main', (ws, req) => {
	console.log('/ws/main | user connected')
	ws.send('WELCOME... by main');
	mainWs.add(ws)	// 특정 페이지를 보고 있는 사용자들에게 소켓 연결
} );
const subWs = new Set();
app.ws('/ws/sub', (ws, req) => {
	console.log('/ws/sub | user connected')
	ws.send('WELCOME... by sub');
	subWs.add(ws)	// 특정 페이지를 보고 있는 사용자들에게 소켓 연결
} );
// ==========================
app.get("/note/read", (req, res)=>{
    res.sendStatus(404);

    subWs.forEach( (ws) => {
        ws.send("MESSAGE???");
    });
});


app.listen(8000, ()=> {
	console.log('start');
});