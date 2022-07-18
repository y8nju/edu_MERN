const express = require('express');
const router = express.Router();

const app = express();

app.use(express.urlencoded({'extended' : true}));

const visiteBook = require('../collections/visiteBook');

router.use((req, res, next) => {
	console.log('log by anonymous');
	next();
});

router.get('/', async (req, res) => {
	res.redirect('/list')
});
router.get('/list', async (req, res) => {
	let arr = await visiteBook.findAll();
	res.render('list', {arr});
});
router.route('/write')
	.get((req, res) => {
		res.render('write');
	})
	.post( async (req, res) => {
		const arr = {
			name : req.body.name,
			password : req.body.password,
			comment: req.body.comment,
			date: new Date()
		};
		
		let result = await visiteBook.insertOne(arr);
		console.log(result);

		if(result.insertedId) {
			res.render('writeChk', {arr});
			console.table(req.body)
		} else {
			res.render('write');
		}
	});

router.route('/delete')
	.get(async (req, res) => {
		let visite = await visiteBook.findById(req.query.id);
		let activeUrl = '/delete'
		res.render('passwordChk', {visite, activeUrl, msg: ""});	
		console.log(visite.password)
	})
	.post(async (req, res) => {
		let visite = await visiteBook.findById(req.body.id);
		let activeUrl = '/delete'
		if(visite.password === req.body.password) {
			let result = await visiteBook.deleteById(req.body.id);
			res.redirect("/list");
		}else {
			res.render('passwordChk', {visite, activeUrl, msg: "비밀번호가 일치하지 않습니다"});	
		}
	});

router.route('/update')
	.get(async (req, res) => {
		let visite = await visiteBook.findById(req.query.id);
		res.render('update', {visite, msg: ""});
		console.table(visite);
	})
	.post( async (req, res) => { 
		let visite = await visiteBook.findById(req.body.id);
		let arr = {
			_id: req.body.id,
			name : req.body.name,
			password : req.body.password,
			comment: req.body.comment,
			date: req.body.date
		};
		console.log(visite.password, arr.password);
		if(visite.password === arr.password) {
			let result = await visiteBook.updateById(req.body.id, arr);
			res.render('writeChk', {visite, arr});
		}else {
			res.render('update', {visite, msg: "비밀번호가 일치하지 않습니다"});
		}
		console.table(arr);
	});

module.exports = router;