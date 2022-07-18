const mongodb = require('mongodb');
const uri = "mongodb+srv://y8nju:5yzi0RPjUsHkeSEb@cluster0.onr4ujj.mongodb.net/?retryWrites=true&w=majority"

function connect() {
	return new mongodb.MongoClient(uri).db('study').collection("account");
}

async function insertOne(doc) {
	return await connect().insertOne(doc);
}

async function findAll() {
	return await connect().find().toArray(); 
}

async function findById(id) {
    return await connect().findOne({id : id});
}
module.exports = {
	insertOne, findAll, findById,
};