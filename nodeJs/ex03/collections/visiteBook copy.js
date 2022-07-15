
const mongodb = require('mongodb');
const uri = "mongodb+srv://y8nju:5yzi0RPjUsHkeSEb@cluster0.onr4ujj.mongodb.net/?retryWrites=true&w=majority"

function connect() {
	return new mongodb.MongoClient(uri).db('study').collection("visitor");
}

async function insertOne(doc) {
	const visiteBook = connect();
	let result = await visiteBook.insertOne(doc);
	return result;
}

async function findAll() {
	const visiteBook = connect();
	return await visiteBook.find({}).sort('createdAt', -1).toArray();   // data 내림차순 정렬
	// find 에서는 cursor를 return한다
}

async function findById(id) {
    const visiteBook = connect();
    let obj = await visiteBook.findOne({  _id : new mongodb.ObjectId(id)});
    return obj;
}

async function deleteById(id) {
    const visiteBook = connect();
    let obj = await visiteBook.deleteOne({  _id : new mongodb.ObjectId(id)});
    return obj;
}

async function updateById(id, obj) {
	const visiteBook = connect();
	let result = await visiteBook.updateOne(
		{_id : new mongodb.ObjectId(id)}, 
		{$set :  {
			name: obj.name,
			comment : obj.comment,
			password : obj.password
		}}
	);
	return result;
}

module.exports = {
	insertOne, findAll, findById, deleteById, updateById
};