const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
	if(!req.session.name) {
		res.redirect('/account');
	}
	next();
})

router.get('/start', (req, res) => {
	if(!req.session.id) {
		res.redirect('/account');
	}else {
		res.render('game', {playerName: req.session.name})
	}
})


// router.use((req, res, next) => {
// 	if(req.session.id) {
// 		next();
// 	} else {
// 		res.redirect('/account');
// 	}
// })

// router.get("/start", (req,res)=>{
// 	res.render('game', {
// 		playerName : req.session.id
// 	});
// });

module.exports = router;