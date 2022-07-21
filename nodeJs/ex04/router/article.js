const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path')

const articles = require('../collections/articles')

router.use((req, res, next) => {
	if(!req.session.authUser) {
		return res.redirect('/account/signin');
	}
	next();
})


router.route('/')
	.get((req, res) => res.redirect('article/home', {user: req.session.authUser}))

router.get('/home', async (req, res) => {
	let postList = await articles.findAll();
	postList = postList ?? [];
	postList = postList.filter(elm => {
		return elm.type === 'public' || elm.writerId == req.session.authUser.id
	})
	// let postList = await articles.getVisibleSome(req.session.authUser.id);
	res.render('home', {user: req.session.authUser, postList});
});

const upload = multer({
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			const uploadPath = path.join(__dirname, '..', 'static', 'images', 'post', req.session.authUser.id);
			if(!fs.existsSync(uploadPath)){
				fs.mkdirSync(uploadPath);
			}
			cb(null, uploadPath);
		},
		filename: (req, file, cb) => {
			let uploadFile = Date.now() + '.'+file.originalname;
			cb(null, file.originalname)
		}

	})
})

router.post('/upload', upload.array('attaches'), async (req, res) => {
		const user = req.session.authUser;
		const attachs = [];
		req.files.forEach (arr => {
			let url = `/images/post/${req.session.authUser.id}/${arr.filename}`;
			attachs.push(url);
		})
		const articleData = {
			writerId: user.id,
			writerName: user.name,
			writerImage: user.image,
			post: req.body.message,
			type: req.body.type ?? 'public',
			createAt: new Date(),
			attachs: attachs,
			comments: []
		}
		await articles.add(articleData);
		res.redirect('/article/home' )
	})

router.get('/view', async (req, res) => {
	const user = req.session.authUser;
	let found = await articles.findById(req.query.articleId);
	res.render('article/view', {user, found})
	console.table(found)
})
module.exports = router;