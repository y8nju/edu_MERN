const express = require('express');
const router = express.Router();
const Account = require('../Models/accounts');

router.route('/login')
	.get((req, res) => {
		res.render('accounts/login', {msg: ''})
	})
	.post(async (req, res) => {
		req.session.auth = true
		req.session.userId = req.body.id
		res.redirect('/chats');
		// mongoose로 DB 붙이기
		// if(getId.password === req.body.password) {
		// 	req.session.auth = true
		// 	req.session.authUserId = req.body.id
		// 	res.redirect('/caht');
		// } else {
		// 	res.render('accounts/login', {msg: '⩗ 계정과 비밀번호를 확인하세요'});
		// }
	})
	
router.route('/signup')
	.get((req, res) => {
		res.render('accounts/signup', {msg: ""})
	})
	.post(async (req, res) => {
		const accuontData = {
			id: req.body.id,
			password: req.body.password,
			email: req.body.email
		}
		let getId = await Account.findById(req.body.id);
		if(!getId){
			await Account.insertOne(accuontData);
			// console.table(result)
			res.render('accounts/signComplete', {accuontData});
		}
	})

router.get("/idCheck", async(req, res) => {
	let found = await Account.find({id: req.query.id});
	console.log(req.query.id)
	const obj = {};
	if(!found) {
		obj.success = true;
	}else {
		obj.success = false;
	}
	res.json(obj);
})

module.exports = router;