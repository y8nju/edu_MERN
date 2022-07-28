const { default: mongoose } = require('mongoose');
const mongoose = require('mongoose');
const Hero = require('./model/Hero')
const uri = "mongodb+srv://y8nju:5yzi0RPjUsHkeSEb@cluster0.onr4ujj.mongodb.net/?retryWrites=true&w=majority"

!async function() {
	await mongoose.connect(uri, {dbName: 'example'});
	console.log('connected');

	// Hero 모델을 통해서 컬렉션을 제어할 수 있게 된다

	// 그 중에서 Create 작업은 아래와 같은 방식으로 할 수 있다
	// 1. Hero 모델을 통해서 저장할 문서를 생성해서 저장
	// const hero = new Hero({name: '루피', alias: '밀짚'});
	// await hero.save();

	// 2. 모델 객체의 Create static function을 이용
	// await Hero.create({name: '우솝', alias: '저격킹'});

	// 3. insertMany static function을 이용하여 여러개를 한꺼번에 저장할 수 있다
	Hero.insertMany([{name: '샹디', alise: '검은발'}]);

	console.log('save success');

}();