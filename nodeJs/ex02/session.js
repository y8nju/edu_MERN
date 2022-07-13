/* 
	/game router 따로 설정
		/game/start
		session 에 정보 없으면 접근 못하게 라우터에 미들웨어로 설정

	/account router 따로 설정
		/account/login
		/account/session
*/

const express = require('express');
const app = express();
const ejs = require("ejs");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "ejs") );

const session = require('express-session');

app.use(session({
	secret: 'test'
}));

const account = require('./router/account');
const game = require('./router/game');

app.use('/account', account);
app.use('/game', game)

app.listen(8080);