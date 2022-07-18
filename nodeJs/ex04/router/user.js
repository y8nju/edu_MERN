const express = require('express');
const router = express.Router();

const account = require('../collections/accounts');

router.use((req, res, next) => {
	if(!req.session.authUser) {
		return res.redirect('/account/signin');
	}
	next();
})
router.get('/', (req, res) => {
	res.render('user/myinfo', {user : req.session.authUser});
})

module.exports = router;