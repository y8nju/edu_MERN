
const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://y8nju:5yzi0RPjUsHkeSEb@cluster0.onr4ujj.mongodb.net/?retryWrites=true&w=majority"

const app = express();

app.use(express.urlencoded({'extended' : true}));

router.use((req, res, next) => {
	console.log('log by anonymous');
	next();
});
router.get('/', (req, res) => {
	res.render('write');
});
router.route('/write')
	.get((req, res) => {
		res.render('write');
	})
	.post( async (req, res) => {
		const visite = {
			name : req.body.name,
			password : req.body.password,
			comment: req.body.comment,
			date: Date.now()
		};
		
		const client = new MongoClient(uri);
		const students = client.db('study').collection("visitor");
		
		await students.insertOne(visite);

		res.render('writeChk', {visite});
		console.table(req.body)
	});

	router.get('/list', async (req, res) => {
		
		const client = new MongoClient(uri);
		const students = client.db('study').collection("visitor");
		let arr = await students.find().toArray();
		res.render('list', {arr});
	})

module.exports = router;