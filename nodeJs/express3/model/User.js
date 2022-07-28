const mongoose = require('mongoose');

/* 
	스키마 설정을 통해 필드의 기본값을 설정을 한다거나(default)
	데이터의 유효성 검사(validation)를 쉽게 처리할 수 있다
	- required는 모든 타입에 다 존재함
	- Number는 min, max
	- String은 enum, match, minLength, maxLength
	- 기본적으로 제공되는 validate가 애매하면  custom validate 설정가능
*/
const userSchema = new mongoose.Schema({
	// name: String,	// 별도의 설정없이 타입 지정만 할거라면 축약
	name: {type: String, required: true, match: /[가-힇]{2,}/},
	nickname: {type: String},	//  축약없이 설정된 형태
	// 필드 설정에 타입 외에 더 추자적으로 설정하고자 한다면 {} 객체 형태로 표기
	age: {type: Number, min: 0},
	type: {type: String, enum: ['내국인', '외국인']},
	authed: {type:Boolean, default: false},
	createAt: {type: Date, default: Date.now()},
	country: {
		type: String,
		validate: {
			validator: (val) => {
				return ["KOR", 'JPN', 'USA', 'CHN'].includes(val);
			},
			message: () => {
				return "Access Denied"
			}
		},
		reqired: true

	}
	// hobbies: [String],
});
//=========================
// 데이터 구성 외에 미들웨어(pre/post로 가능)라는 걸 설정
// pre: 전, post 후
// 설정할 수 있는 포인트는 여러곳이 있는데 save, remove, update, find ....
// userSchema.pre('save', function(){
// 	console.log('save', this);
// })
/* userSchema.pre('save', function(next){
	if(Math.random() > 0.5) {
		console.log('save', this);
		next(); //next() 생략가능
		// next 인자를 받으면 조건 설정이 가능하다
	}
}) */
// userSchema.pre('save', function(){
// 	if(Math.random() > 0.5) {
// 		console.log('save', this);
// 	} else {
// 		console.log('error');
// 		throw new Error('somethis is wrong');
// 	}
// })
userSchema.post('save', function(){
	console.log(this._id + 'saved.')
});

module.exports = mongoose.model("User", userSchema);