
const express = require('express');
const router = express.Router();

const app = express();

app.use(express.urlencoded({'extended' : true}));

const visiteBook = require('../collections/visiteBook');

router.use((req, res, next) => {
	console.log('log by anonymous');
	next();
});
router.get('/', (req, res) => {
	// new mongodb.ObjectId();
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
			date: new Date()
		};
		
		let result = await visiteBook.insertOne(visite);
		console.log(result);

		if(result.insertedId) {
			res.render('writeChk', {visite});
			console.table(req.body)
		} else {
			res.render('write');
		}
	});

	router.get('/list', async (req, res) => {
		let arr = await visiteBook.findAll();
		res.render('list', {arr});
	});
	router.get('/delete', async (req, res) => {
		let result = await visiteBook.deleteById(req.query.id);
		res.redirect('/list')
	});

	router.route('/update')
	.get(async (req, res) => {
		let visite = await visiteBook.findById(req.query.id);
		res.render('update', {visite});
		console.table(visite);
	})
	.post( async (req, res) => { 
		let arr = {
			_id: req.body.id,
			name : req.body.name,
			password : req.body.password,
			comment: req.body.comment,
		};
		
		let result = await visiteBook.updateById(req.body.id, arr);
		
		res.render('updateChk', {arr});
		
		// res.redirect('list');
		console.log(req.body.id);
		console.table(arr);
	});

module.exports = router;