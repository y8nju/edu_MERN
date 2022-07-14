/* 
	/game router 따로 설정
		/game/start
		session 에 정보 없으면 접근 못하게 라우터에 미들웨어로 설정

	/account router 따로 설정
		/account/login
		/account/session
*/

const express = require('express');
const ejs = require("ejs");
const path = require("path");
const session = require('express-session');
const fileStore = require('session-file-store')(session);
const morgan = require('morgan');

//app counfiguration
const app = express();
const account = require('./router/account');
const game = require('./router/game');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "ejs") );

app.use(morgan("dev"));

app.use(session({
	secret: 'test',
	resave: true,	// 사용자의 변화가 없으면 업데이트 ❌
	saveUninitialized: true,	// 세션을 사용하지 않으면 초기화 ❌
	cookie : {
		maxAge: 1000*60*20,	// 쿠키의 유효기간, millisecond
	},
	store : new fileStore({path : path.join(__dirname, "sessions")})
}));

app.use('/account', account);
app.use('/game', game)

app.get('/', (req,res) => {
	// console.log(req.session);
	// req.session.init = Date.now();
	res.send('👋');
})

app.listen(8080);