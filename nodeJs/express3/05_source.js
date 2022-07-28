const mongoose = require('mongoose');
const Movie = require('./model/Movie')

!async function() {
	const uri = "mongodb+srv://y8nju:5yzi0RPjUsHkeSEb@cluster0.onr4ujj.mongodb.net/?retryWrites=true&w=majority"
	await mongoose.connect(uri, {dbName: 'example'});
	console.log('connected');

	try {
		let result;
        
		result = Movie.find({});
		// console.log(result);
		// CRUD에 사용되는 이런 function의 결과는 Promise가 아니라 Query라는 객체
		// console.log(result instanceof mongoose.Query);	//true
		// Promise같이 await / then을 쓰게되면 Promise와 깉이 작동
		/* result.then((doc)=>{
			console.log(doc);
		}) */
		// console.log(await result);
		result = await Movie.find({repNationNm:'한국'}).exec();
		// exec() 를 써야 Promise
		// console.log(result, result instanceof Promise);
		// console.log(result);
		
		// Query객체는 체이닝해서 사용 할 수 있다
		Movie.find({repNationNm:'한국'}).find({repGenreNm:'액션'}).find({prdtYear: '2021'});
		console.log(result);
	}catch(err) {
	    console.log('failed...', + err.message);
	    // console.dir(err);
	}
}();