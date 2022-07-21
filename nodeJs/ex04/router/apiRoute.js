const express = require('express');
const router = express.Router();
const accounts = require('../collections/accounts');

router.get("/idCheck", async(req, res) => {
	let found = await accounts.findById(req.query.id);
	console.log(req.query.id)
	const obj = {};
	if(found) {
		obj.success = false;
	}else {
		obj.success = true;
	}
	res.json(obj);
})

module.exports = router;