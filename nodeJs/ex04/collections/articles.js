const mongodb = require('mongodb');
const uri = "mongodb+srv://y8nju:5yzi0RPjUsHkeSEb@cluster0.onr4ujj.mongodb.net/?retryWrites=true&w=majority"

function connect() {
	return new mongodb.MongoClient(uri).db('study').collection("articles");
}

module.exports.add = async function(article) {
	return await connect().insertOne(article);
}

module.exports.findAll = async function() {
	return await connect().find({}).sort('createAt', -1).toArray(); 
}
module.exports.getVisibleSome = async function(userId) {
	const query = {"$or" : [{writerId : userId },  {  type : "public" } ] };
	return await connect().find(query).sort("createdAt", -1).toArray();
}

module.exports.getByWriter = async function(writerId) {
	return await connect().find({writerId : writerId }).sort("createdAt", -1).toArray();
}
module.exports.findById = async function(target) {
	return await connect().findOne({_id : new mongodb.ObjectId(target)});
}
module.exports.addComment = async function(targetId, comment) {
	return await connect().updateOne(
		{_id : new mongodb.ObjectId(targetId)},
		{$push: {comments: comment}}
	);
}