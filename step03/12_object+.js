/* 
console.log(this);  // {}
// console.log(globalThis);

num = 3;
console.log(globalThis.num);
 */

function test(value) {
	this.value = value;
	// 여기에서 this는 globalThis이다
	return this;
	// 일반 객체는 return을 하지 않아도 된다
}

// 함수를 어떻게 call을 하느냐에 따라서 출력값은 달라진다
console.log( test(3) );   // undefined
console.log( test(3) === globalThis );  // true
console.log( globalThis.vaule );  // undefined

console.log( new test(3)); // test { value: 3 }
console.log( new test(3) == globalThis); // false
