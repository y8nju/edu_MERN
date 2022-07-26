/* 
	몽구스(mongoose) / Object Document Mapping
	MongoDB object modeling tool

	가장 큰 특징은 스키마를 정의하고 사용하는 것
	몽구스의 모든 것은 스키마로 시작한다
	각 스키마는 MongoDB 컬렉션

	npm i mongoose
*/

const mongoose =  require('mongoose');

const uri = "mongodb+srv://y8nju:5yzi0RPjUsHkeSEb@cluster0.onr4ujj.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri, {dbName: 'example'});
mongoose.connection.on('error', err => {
	console.log('MongoDB err : ' + err.Message);
})
mongoose.connection.on('open',  () => {
	console.log('MongoDB connected.');
})

//=======================
// mongooes를 통해서 Data 제어를 하려면  Schema부터 설계를 해야한다

 const foodSchema = mongoose.Schema({
	name: {type: String, required: true},
	calorie: Number,	// type 설정만 할거라면 이런 식으로 축약 표현 가능
	ammount: {
		unit: String,
		gram: Number, 
	},
	category: {type: String, default: '-'}
 });

//=======================
// 이 스키마라는 걸 이용해서 모델이라는 걸 만들어서 사용하게 된다

const food = mongoose.model("food", foodSchema);	// foods라는 컬렉션으로 관리가 된다


const f1 = new food({name: '?',calorie: "ddd"});
f1.save();