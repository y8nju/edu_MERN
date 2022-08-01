const mongoose = require('mongoose');
const { populate } = require('./model/Movie');
const Movie = require('./model/Movie');
const Review = require('./model/Review');

!async function() {
	const uri = "mongodb+srv://y8nju:5yzi0RPjUsHkeSEb@cluster0.onr4ujj.mongodb.net/?retryWrites=true&w=majority"
	await mongoose.connect(uri, {dbName: 'example'});
	console.log('connected');
	try {

		//mongoose의 populate (객체 형태로 만들어준다)
		// 다른 컬렉션에서 데이터를 찾아와서 문서화 시켜주는 작업
		// 해당 필드의 값을 가지고 ref 설정해둔 모델에서 _id가 같은 문서를 찾아서 교체해준다
		// let review = await Review.find({}).populate('target', "movieNm repGenreNm");	// option으로 select 형식처럼 쓸 수 있다
		// let review = await Review.find({}).populate('targetstr');
		// populate는 객체 형태로 만들어준다
		// console.log(typeof review); //object
		// review.forEach(elm => {
		// 	console.log(elm.target.movieNm, elm.comment, elm.score);
		// });
			
		// 기본 대상 ref 모델의 _id로 매칭
		// 컬렉션의 디자인이 잘못되면, _id가 아닌 곳으로 걸어야 할 때가 있다
		//ref의 대상은 무조건 _id로 고정이 되어 있다 👉 이럴 때는 스키마에서 virtual로 가상 변수를 만들어서 설정함
		// _id로 populate하게되면 하나의 객체로 출력된다
		let reviews = await Review.find({}).populate('vtTargetCd');
		reviews = await Review.find({}).populate('vtTargetCd').limit(1);
		//가상 변수로 vtTargetCd를 만들어서 populate를 해서 매칭 할 수 있다
		// console.log(reviews);
		reviews.forEach(elm => {
			console.log(elm.comment, elm.sign, elm.vtTargetCd, elm.vtTargetCd.typeNm);
		});


	}catch(err) {
		console.log('failed...', + err.message);
	}
}();