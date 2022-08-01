const express = require('express');
const router = express.Router();

const movieDB = require('../Model/Movie');
const reviewDB = require('../Model/Review');

const mongoose = require('mongoose');
const uri = "mongodb+srv://y8nju:5yzi0RPjUsHkeSEb@cluster0.onr4ujj.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {dbName: 'example'}).catch((err) => {
	console.log('failed' + err.message);
});

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

router.use((req, res, next) => {
	console.log('log by anonymous');
	next();
});

router.get('/', async (req, res) => {
	res.render('index');
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
		movieList.forEach(data => {
			data.movieNm = data.movieNm.replace(req.query.mvNm, `<b>${req.query.mvNm}</b>`)
		})
		const genres = await movieDB.find({}).distinct('repGenreNm');
		// res.render('list', {movieList})
		// 렌더를 하면서 설정하는 데이터들은 res 객체의 locals라는 곳에서 설정이 되고, 
		// ejs에서 불러서 쓰이게 된다
		res.locals.movieList = movieList;
		res.locals.page = page;
		res.locals.cnt = cnt;
		res.locals.endPage = Math.ceil(cnt / 10);
		res.locals.genres = genres;
		res.render('list');
		console.log(filter);
	})

router.get('/api/match', (req, res)=> {
	movieDB.find({}).where("movieNm").regex(req.query.mvNm).select("movieNm -_id").lean()
		.then((result) => {
			// console.log(result);
			res.json(result);
		}).catch((e) => {
			res.sendStatus(500);
		})
})
router.get('/reviews', async (req, res) => {
	const reviewList = await reviewDB.find({}).populate('target', 'movieNm _id').sort('-createdAt').lean();
	console.log(reviewList.length)
	res.render('reviews', {reviewList})
})
router.get('/info', async (req, res) => {
	// 영화 상세보기, 해당 영화의 정보와 해당영화에 달린 코멘트들, 해당영화에 코멘트를 달 수 있는 폼 제공
	const movie = await movieDB.findById(req.query._id).populate('key', '-targetstr -targetCd').sort('-createdAt').lean();
	const scores = []
	movie.key.forEach(data => {
		scores.push(data.score);
	});
	//리뷰가 있다면 스코어 평균
	const scoreAvg = (scores.reduce((a,b) => a+b, 0)) / scores.length;
	const directors = []
	movie.directors.forEach(data => {
		directors.push(data.peopleNm);
	})
	const movieCd = movie.movieCd;
	const movieInfoUrl = await fetch(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${movieCd}`, {method: 'get'});
	const movieInfoResult = await movieInfoUrl.json();
	const movieInfo = movieInfoResult.movieInfoResult.movieInfo;
	const actors = [];
	movieInfo.actors.forEach(actor =>{
		actors.push(actor.peopleNm);
	})
	console.log(actors);
	res.render('movieInfo', {movie, scoreAvg, directors, actors})
})

router.post('/reviewWrite', async (req, res) => {
	// target, score, comment
	await reviewDB.create(req.body).then(()=> {
		// target: new mongoose.mongo.ObjectId(req.body.target);
		res.redirect('/info?_id='+req.body.target);
	}).catch((e)=> {
		res.status(500).send(e.message)
	})
})


module.exports = router;