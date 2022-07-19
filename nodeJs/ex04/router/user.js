const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path')

const account = require('../collections/accounts');

router.use((req, res, next) => {
	if(!req.session.authUser) {
		return res.redirect('/account/signin');
	}
	next();
})

// ======multer
const profileUpload = multer({
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			const uploadPath = path.join(__dirname, '..', 'static', 'images', 'user', req.session.authUser.id.split('@')[0]);
			if(!fs.existsSync(uploadPath)){
				fs.mkdirSync(uploadPath);
			}
			cb(null, uploadPath);
		},
		filename: (req, file, cb) => {
			let profileName = req.session.authUser.id.split('@')[0] + Date.now();
			cb(null, profileName);
		}
	})
})
router.route('/')
	.get((req, res) => res.redirect('user/myinfo'))
	.post((req, res) => res.redirect('user/myinfo'));

router.route('/myinfo')
	.get ((req, res) => {
		res.render('user/myinfo', {user : req.session.authUser});
	})
	.post(profileUpload.single('profile'), async (req, res) => {
		const url = `/images/user/${req.session.authUser.id.split('@')[0]}/${req.file.filename}`;
		let result = await account.updateUserImg(req.session.authUser.id, url);
		req.session.authUser = await account.findById(req.session.authUser.id);
		res.render('user/myinfo', {user : req.session.authUser});
	})

module.exports = router;