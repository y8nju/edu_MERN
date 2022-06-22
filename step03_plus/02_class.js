/* 
	생성자 함수로 정의 내린 방식과 차이점?
	1. new 없이 호출이 안됨
		TypeError: Class constructor Student cannot be invoked without 'new'
	2. 객체 초기화 관련된 작업은 constructor(){ } 안에 설계 해야 함
		constructor(){ }안에서 객체가 생성된다고 생각하자
		constructor는 하나만 가질 수 있다
	3. class 안에 축약형 함수는 전부 프로토 타입으로 등록 됨

*/
class StopWatch {
	constructor() {
		this.minute = 0;
		this.second = 0;
		// return this
	}
	// method(prototype에 추가)
	elapsed(sec) {
		this.second+=sec;
	}
	// 정적 method
	static isValid(min, sec) {
		return min >= 0 && sec >= 0 && sec < 60;
	}
}
console.log('elapsed' in StopWatch.prototype);	// true

const s1 = new StopWatch();
const s2 = new StopWatch();
console.log(s1.elapsed === s2.elapsed);   // true

s1.elapsed(30);
// s1.isValid(40, 29);	// TypeError: s1.isValid is not a function
StopWatch.isValid(40, 29);

	// StopWatch.prototype.elapsed = function(...) {
	// }
	// StopWatch.prototype.isValid = function(...) {
	// }
