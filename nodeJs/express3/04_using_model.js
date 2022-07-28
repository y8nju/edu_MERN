const mongoose = require('mongoose');
const Account = require('./model/Account');

!async function() {
	const uri = "mongodb+srv://y8nju:5yzi0RPjUsHkeSEb@cluster0.onr4ujj.mongodb.net/?retryWrites=true&w=majority"
	await mongoose.connect(uri, {dbName: 'study'});
	console.log('connected');

	try {
		// read 👉 find, findOne, findByID, 
		// let result = await Account.find({});
		// let result = await Account.find({name: '최윤주'});
		// let result = await Account.findOne({name: "공병구"});
		// let result = await Account.findById('62d7e4ca7c870aeee43f9026');
		// console.log(result)

		// delete 👉 deleteOne, deleteMany
		// let result = await Account.deleteOne({name: 'aa'}); 
			// 출력값 { acknowledged: true, deletedCount: 1 }
		// 아이디값에 일치하는 데이터를 dleete를 하고 싶으면
		// let result = await Account.findByIdAndDelete('62d4e03257070c140fe08f53');
		// let result = await Account.findOneAndDelete({name: 'ss'});  
			// 영향을 받은 document가 나온다
			// 출력값 
			/* {
				_id: new ObjectId("62d56f36817f49d8282cef5a"),
				id: 'aru1052@dddd.ss',
				password: '12',
				name: 'ss',
				contact: '0102345678',
				birth: { year: null, month: null, date: null }
			} */
			// findAnd_xxxx의 작업 결과는ㄴ find된 document가 리턴된다(null 이면 작업실패)
			// find계열이 유용한 작업은 update일 때 이다

		//remove는 원래 예전에 있던 것으로 deleteMany와 같다고 봄 Account.remove({});

		// update 👉 updateOne, updateMany
		// 디폴트가 $set
		// update시에는 validating 기능이 default가 off
		// let result = await Account.updateOne(
		// 	{name:'test'}, 
		// 	{
		// 		name: '윤주', 
		// 		password: '1'
		// 	},
		// 	{runValidators: true}
		// );
		// console.log(result);

		// findOneAndUpdate 나 findByIDAndUpdate의 리턴값은 찾은 문서가 리턴 됨
		// 디폴트가 바뀌기 전의 문서가 나온다 {returnDocument: 'before'} 로 설정되어 있다
		// {returnDocument: 'after'}는 바뀐 후의 문서

		// let result = await Account.findByIdAndUpdate(
		// 	'62d927906d34f823225fe006',
		// 	{image: '/images/user/userProfile.png'},
		// 	{returnDocument: 'after'}
		// );
		
		// 프로필 이미지 update 시킬때나 댓글 추가할 때 $push update, then find => .comments를 사용했는데, 
		// 이걸 업데이트의 결과로 바로 확보할 수 있다
		
		// 기본 crud는 이렇게 처리되고 있다
		
		// 자주 사용할 DB CRUD는 모델에 추가를 하는 게 가능하다
		
		// let founds = await Account.findByName('윤주');
		// console.log(founds);
		let update = await Account.updateProfileById('62d5fb58794619bf3c1603ae', '/images/user/userProfile.png');
		console.log(update);
	}catch(err) {
		console.log('failed...', + err.message);
	}
}();