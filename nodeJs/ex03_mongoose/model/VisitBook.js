const mongoose = require('mongoose');

const visitBookSchema = new mongoose.Schema({
	name : String,
	password : String,
	comment: String,
	date: Date
}, {
	statics: {
		insertOne(doc) {
			return this.create(doc);
		},
		findAll() {
			return this.find({}).sort('-date'); 
		},
		getById(id) {
			return this.findById(id);
		},
		deleteById(id) {
			return this.findByIdAndDelete(id);
		},
		updateById(id, obj) {
			return this.findByIdAndUpdate(
				id, {$set: {obj}},  {returnDocument: 'after',upsert: true}
			)
		}
	}
});
module.exports = mongoose.model('visitBook', visitBookSchema, 'visitBooks');