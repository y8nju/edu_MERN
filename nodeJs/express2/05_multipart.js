/* 
	express 서버하나 작동하고(8080)
	/upload [GET]   uploadForm.ejs
	라우터 핸들러
*/

const express = require('express');
const path = require("path");
const app = express();
const multer = require('multer')

// db
const mongodb = require('mongodb');
const uri = "mongodb+srv://y8nju:5yzi0RPjUsHkeSEb@cluster0.onr4ujj.mongodb.net/?retryWrites=true&w=majority";
const uploadDB = new mongodb.MongoClient(uri).db('study').collection("upload");


const uploadRoute = require('./router/upload')
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use('/', uploadRoute)
app.use('/upload', uploadRoute);
app.use('/uploaded', uploadRoute);
app.use('/test', uploadRoute);

// const upload = multer({dest : path.join(__dirname, "uploads")});

// app.post("/uploaded", upload.single("attach"), (req, res)=>{
// 	console.log(req.body.desc);
// 	console.log(req.body.attach);	// 일반 텍스트는 바디에 설정
// 	console.log(req.file)
// 	res.sendStatus(200);
// });

app.listen(8080);