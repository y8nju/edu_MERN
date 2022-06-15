/* 
	prototype이란
	property는 생성자 함수에 달려 있다
	함수를 생성하면 prototype은 무조건 생성된다
	함수를 완성하기 전에 접근 할 수 있다

*/

console.log(Number.prototype);	// {}

console.log('************************************')

test.prototype.log = function(txt) {
	console.log(this.talker + ':' + txt);
}

test.print = function() {

};

console.log('==============================')

function test() {
	// console.log(`this.prototype ${this.prototype}`); // this.prototype undefined
	console.log(this.__proto__) // {}
};
console.log(test.prototype);	// {}
// prototype은 자동 생성된다

console.log('************************************')

let t = new test();
t.log('xxx'); // test: xxx

for (let p in t) {
	console.log(`property ==> ${p}`);	//property ==> log
}
test.print();	// 사용 안됨

console.log('==============================')

let o = {};


console.log(t.prototype);	//undefined 완성된 객체에는 prototype이라는 속성이 없다
console.log(o.prototype);	//undefined 완성된 객체에는 prototype이라는 속성이 없다
// 객체나 변수는 prototype을 가지지 않는다

console.log(t.__proto__);	// [Object: null prototype] {}{}
console.log(o.__proto__);	// [Object: null prototype] {}
// 만들어진(완성된) 객체의 프로토타입 확인

console.log(t.__proto__ === test.prototype);	// true