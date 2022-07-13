const express = require("express");

const router = express.Router();

const namePool = [];
router.get('/', (req, res) => {
	res.redirect('/account/login');
});
router.get("/login", (req,res)=>{
	res.render('login', {msg: ''});
});
router.get("/session", (req,res)=>{
	console.log(req.query.name);
	// if(namePool.includes(req.query.name)) {
	// 	console.log(req.query.name)
	// 	res.render('login', {msg: '이미 사용 중인 이름입니다'});
	// }else {
	// 	namePool.push(req.query.name);
	// 	res.render('game');
	// }
});

module.exports = router;



