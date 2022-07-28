const mongoose = require('mongoose');
const Movie = require('./model/Movie')

!async function() {
	const uri = "mongodb+srv://y8nju:5yzi0RPjUsHkeSEb@cluster0.onr4ujj.mongodb.net/?retryWrites=true&w=majority"
	await mongoose.connect(uri, {dbName: 'example'});
	console.log('connected');
	// Model에서 CRUD 관련 function을 사용하면 결과는 쿼리라는 객체가 만들어지게 되고,
	// 06_sorce에서는 자주 사용되는 필수적인 query Function
	// 👇 알아두면 괜찮은 query Function
	try {
		// 조건 설정하는 법이 mongodb는 쉽지않다
		// openDt가 20220801 이상인 데이터를 찾는다면?
		let result = await Movie.find({openDt: {$gte: '20220801'}}).select('movieNm openDt').lean();
		result = await Movie.find({}).where('openDt').gte('20220801').select('movieNm openDt').lean();
		// console.table(result);

		//repGenreNm이 액션이거나  드라마인 데이터를 찾는다면?

		// let result2 = await Movie.find({repGenreNm: {$in : ['액션', '드라마']}}).select('movieNm openDt -_id').lean();
		let result2 = await Movie.find({}).where("repGenreNm").in(["액션", "드라마"]).select('movieNm openDt -_id').lean();

		// console.table(result2);
		
		let result3 = await Movie.find({}).where('movieNm').regex('귀멸').lean();
		// await Movie.find({}).where('movieNm').regex('귀멸').countDocuments();
		// console.log(result3);



	}catch(err) {
		console.log('failed...', + err.message);
	}
}();