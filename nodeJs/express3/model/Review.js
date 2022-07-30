const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
	comment: String,
	score: {
		type: Number, min: 1, max: 5
	},
	target: {
		// 다른 스키마에 있는 데이터를 가져올 것임
		type: mongoose.Schema.Types.ObjectId,
		ref: "Movie"    // 참조할 model이름
	},
	targetstr: {
		type: String,
		ref: "Movie"
		//objectId가 아니여도 populating가능하다
	},
	targetCd: {
		type: String,
		ref: "Movie"
	}
})

// virtual을 이용해서 populate용 가상변수를 설정할 수 있다
reviewSchema.virtual("sign").get(()=> { // sign이라는 가상 환경 설정
	return "Edupoll";
});
reviewSchema.virtual("vtTargetCd", { 
	localField: "targetCd",
	ref: "Movie",
	foreignField: "movieCd",
	justOne: true
})
	// .get(function(){
	// 	return this.targetCd;
		// 이렇게 하면 해당 값만 return된다
	// });
module.exports = mongoose.model('Review', reviewSchema);