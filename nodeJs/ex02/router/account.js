const express = require("express");

const router = express.Router();

const names = [];

router.get('/', (req, res) => {
	// req.path 값과 req.baseUrl도 체크
	// res.send(req.originalUrl);
	res.render('login', {msg: ''});
});
router.get('/session', (req, res) => {
	if(names.includes(req.query.name)) {
		res.render('login', {msg: '이미 사용 중인 이름입니다'})
	} else {
		names.push(req.query.name);
		req.session.name = req.query.name;
		res.redirect('/game/start')
	}
});

/* 
const id = [];

router.use('/session', (req, res, next) => {
	req.session.id = req.query.name;

	if(id.includes(req.session.id)){
		next();
	} else {
		id.push(req.session.id);
		res.redirect('/game/start');
	}
})

router.get('/', (req, res) => {
	res.render('login', {msg: ''});
});
router.get("/session", (req,res)=>{
	res.render('login', {msg: '이미 사용 중인 이름입니다'});
});
 */
module.exports = router;



