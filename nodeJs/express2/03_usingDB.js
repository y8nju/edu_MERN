const express = require('express');
const path = require("path");
const { MongoClient } = require('mongodb'); // 분해할당
	// const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://y8nju:5yzi0RPjUsHkeSEb@cluster0.onr4ujj.mongodb.net/?retryWrites=true&w=majority"
// const ejs = require("ejs");


const app = express();
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "view") );


// # insert
app.get('/insert', async (req, res) => {
	const one = {
		name : req.query.name,
		age : Number.parseInt(req.query.age),
		gender : req.query.gender
		// 그냥 req.query를 저장해서 넘겨도 된다......
	};
	const client = new MongoClient(uri);
	const students = client.db('study').collection("students");

	let result = await students.insertOne(one);
	if(result.acknowledged) {
		res.send('data 🙆🏻‍♀️');
	} else {
		res.send('data 🙅🏻‍♀️ (code: -32)')
	}
	client.close(); // awite는 try, catch가 원칙임...ㅎ
});

// #read
app.get('/list', async (req, res) => {

	let filter = {};
	if(req.query.name) {
		filter.name = req.query.name;
	}

	const client = new MongoClient(uri);
	const students = client.db('study').collection("students");
	
	let arr = await students.find(filter).toArray();
	
	res.render('list', {arr});

	client.close();
})

app.listen(8080);