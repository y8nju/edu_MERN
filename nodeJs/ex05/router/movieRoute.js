const express = require('express');
const router = express.Router();

const movieDB = require('../Model/movie');
const mongoose = require('mongoose');
const uri = "mongodb+srv://y8nju:5yzi0RPjUsHkeSEb@cluster0.onr4ujj.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {dbName: 'example'}).catch((err) => {
	console.log('failed' + err.message);
});

router.use((req, res, next) => {
	console.log('log by anonymous');
	next();
});

router.get('/', async (req, res) => {
	res.redirect('/list');
})

router.route('/list')
	.get(async(req, res) => {
		let filter = {}
		if(req.query.mvNm) {	// 값이 안넘어 오거나 ''이면 작동 안함
			// filter = {movieNm: new RegExp(req.query.mvNm)}
			filter.movieNm = new RegExp(req.query.mvNm);
			res.locals.mvNm = req.query.mvNm;
		}
		if(req.query.grNm) {
			// filter = {repGenreNm : {$in: req.query.grNm}}
			// filter = {repGenreNm : [value, value]} // 👉 자동으로 $in으로 처리
			// filter.repGenreNm = {$in: req.query.grNm};
			filter.repGenreNm = req.query.grNm;
			res.locals.grNm = req.query.grNm
		}
		// 변수를 이용해서 정규식을 만드려면 RegExp 생성자를 이용
		// new RegExp('귀멸') => /귀멸/
		// new RegExp('^'+'자바') => /^자바/

		let cnt = await movieDB.find(filter).countDocuments();
		let page = req.query.page ?? 1;
		let skipValue = (page-1)*10;
		const movieList = await movieDB.find(filter).sort('movieNm').skip(skipValue).limit(10).lean();
		const genres = await movieDB.find({}).distinct('repGenreNm');
		// res.render('list', {movieList})
		// 렌더를 하면서 설정하는 데이터들은 res 객체의 locals라는 곳에서 설정이 되고, 
		// ejs에서 불러서 쓰이게 된다
		res.locals.movieList = movieList;
		res.locals.cnt = cnt;
		res.locals.endPage = Math.ceil(cnt / 10);
		res.locals.genres = genres;
		res.render('list');
		console.log(filter);
	})


module.exports = router;