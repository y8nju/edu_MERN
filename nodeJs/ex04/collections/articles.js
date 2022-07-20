const mongodb = require('mongodb');
const uri = "mongodb+srv://y8nju:5yzi0RPjUsHkeSEb@cluster0.onr4ujj.mongodb.net/?retryWrites=true&w=majority"

function connect() {
	return new mongodb.MongoClient(uri).db('study').collection("articles");
}

async function add(article) {
	return await connect().insertOne(article);
}

async function findAll() {
	return await connect().find({}).sort('createAt', -1).toArray(); 
}

async function findById(target) {
	return await connect().findOne({id : target});
}
module.exports = {
	add, findAll, findById
};