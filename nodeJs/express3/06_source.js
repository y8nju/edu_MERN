const mongoose = require('mongoose');
const Movie = require('./model/Movie')

!async function() {
	const uri = "mongodb+srv://y8nju:5yzi0RPjUsHkeSEb@cluster0.onr4ujj.mongodb.net/?retryWrites=true&w=majority"
	await mongoose.connect(uri, {dbName: 'example'});
	console.log('connected');
	// Model에서 CRUD 관련 function을 사용하면 결과는 쿼리라는 객체가 만들어지게 되고,
	// 그 상태에서 추가로 mongoose.Query 객체의 function들을 chaning 해서 사용 가능하다
	try {
		// 0. select
		// select에 해당하는 내용만 출력
		// 문자열로 설정 시에 앞에 -는 exclude 제외 
		// 객체로 표시할 때는 0으로 설정하면 된다
		// let result = await Movie.find({}).select('movieNm repGenreNm').exec();
		// let result = await Movie.find({}).select(['movieNm', 'repGenreNm']).exec();
		// let result = await Movie.find({}).select({movieNm: 1, repGenreNm: 1}).exec();
		// let result = await Movie.find({}).select(['-_id']).exec();
		// let result = await Movie.find({}).select('-_id movieNm').exec();
		// console.log(result);

		// 1. countDocuments()
		let cnt = await Movie.find({repGenreNm: '액션'}).countDocuments();
		// console.log(cnt)
		
		// 2. skip(), limit() : data paging을 할 수 있다
		// console.log(await Movie.find({repGenreNm: '액션'}).skip(3).limit(3))
		// 3(skip)개 건너띄고 3(limit)개만 출력
		// let result = await Movie.find({repGenreNm: '액션'}).select('movieNm -_id').skip(3).limit(3)
		// console.log(result);

		// 3. sort()
		// 객체 형태나 문자열로 처리가 가능
		// defult는 오름차순, -하면 내림차순 정렬
		//{prdtYear: -1, openDt: 1}, asc 1(오름차순) desc -1(내림차순)
		let result = await Movie.find({repGenreNm: '애니메이션'}).select('movieNm prdtYear openDt -_id').sort('prdtYear');
		//mongoose find의 결과는 mongobd 드라이버로 find 했을 때와 다르게 Model 상태이다
		console.log(result[0] instanceof mongoose.Model);
		// console.dir(result[0]);

			// + lean()
			// query 결과로 mongoose model이 아니라 plain Javascript Objec로 만들어진다
			// 순수한 결과만 출력하고 싶으면 lean()을 사용하면된다
			result = await Movie.find({repGenreNm: '애니메이션'}).select('movieNm prdtYear openDt -_id').sort('-prdtYear -openDt').lean();
			console.table(result);

		// 4.distinct 특정 필드의 데이터들 중 중복값 제거
		let result4 = await Movie.find({}).distinct('repGenreNm');
		console.log(result4);
		

	}catch(err) {
		console.log('failed...', + err.message);
	}
}();