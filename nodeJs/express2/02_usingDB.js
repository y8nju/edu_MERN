const express = require('express');
const mongodb = require('mongodb');
const uri = "mongodb+srv://y8nju:5yzi0RPjUsHkeSEb@cluster0.onr4ujj.mongodb.net/?retryWrites=true&w=majority"


const client = new mongodb.MongoClient(uri);
const students = client.db('study').collection("students");


// # Create(inset)
let data = {
	name: "김기협",
	age: 26,
	hobbies: ["게임", "유튜브 시청"]
};
students.insertOne(data).then(result => {
	console.log(result.acknowledged);
	//result.acknowledged 👉insert가 제대로 됐는지  true, false 확인
}).catch(err => {
	console.log(err.message);
}).finally(() => {
	// then과  catch 모두 실행
	client.close; // 연결 끊기
})

// #Read
{
	const client = new mongodb.MongoClient(uri);
	const database = client.db('study'); // db명
	// console.log('ready.....', database);
	const students = database.collection("students");
	students.find().toArray().then(result => {
		console.log(result);
	}).finally(() => {
		client.close; // 연결 끊기
	})
	
}
// app.listen(8080);