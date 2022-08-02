const express = require('express');
const path = require("path");
const session = require('express-session');
const app = express();
const wsInstance = require('express-ws')(app);

const mongoose = require('mongoose');
const uri = "mongodb+srv://y8nju:5yzi0RPjUsHkeSEb@cluster0.onr4ujj.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {dbName: 'study'}).catch((err) => {
	console.log('failed' + err.message);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use(express.urlencoded({'extended': true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'static')));
app.use(session({secret: "P@ssw0rd", resave: true, saveUninitialized: true}));

app.use((err, req, res, next) => {
	console.log(err.message);
	response.status(500).send(err.message);
});

app.get('/', (req, res) => res.redirect('/account/login'));

app.use('/account', require('./Router/accountRoute'));
app.use('/chats', require('./Router/chatRoute'));

app.use((err, req, res, next) => {
	res.status(500).send(err.message);
});


app.listen(8080);
