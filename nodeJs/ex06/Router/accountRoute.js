const express = require('express');
const router = express.Router();
// const accounts = require('../collections/accounts');

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
/* 	
router.route('/signup')
	.get((req, res) => {
		res.render('accounts/signup', {msg: ""})
	})
	.post(async (req, res) => {
		let birthDay = req.body.birth.split('-');
		const accuontData = {
			id: req.body.id,
			password: req.body.password,
			name: req.body.name,
			email: req.body.email,
			contact: req.body.contact,
			birth: {
				year: birthDay[0],
				month: birthDay[1],
				date: birthDay[2]
			}
		}
		let getId = await accounts.findById(req.body.id);
		if(!getId){
			await accounts.insertOne(accuontData);
			// console.table(result)
			res.render('accounts/signComplete', {accuontData});
		}
	})
 */
module.exports = router;