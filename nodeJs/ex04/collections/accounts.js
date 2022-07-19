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

async function findById(target) {
    return await connect().findOne({id : target});
}

async function updateUserImg(userId, url) {
	return await connect().updateOne(
		{id: userId}, 
		{$set: {image: url}}
	);
}
module.exports = {
	insertOne, findAll, findById, updateUserImg
};