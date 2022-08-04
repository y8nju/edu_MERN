const mongoose =require('mongoose');
const roomSchema = new mongoose.Schema({
	title: String,
	owner: String, 
	joiner: [
		{
			joinerName: String,
			joinTime: {
				type: Date,
				default: Date.now
			}
		}
	],
	type: String,
	password: String,
	createdAt : {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('room', roomSchema)