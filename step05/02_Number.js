// 1. Number: built-in
// Number 객체를 사용코자 하면
const num = new Number(100);
	//Number() 의 defult 값은 0
console.log(num);	// [Number: 100]
const num2 = Number('12.33'); 
console.log(num2);	// 12.33
console.log(new Number(true));	// [Number: 1]
console.log(new Number('text'));	// [Number: NaN]

// .toFixed(number) 소수점 아래 제한 👉 string
console.log(num.toFixed(2));	// 100.00
console.log(num2.toFixed(1));	// 12.3

console.log(typeof num, typeof 100);	// object number


// num을 Number로 쓰려고 하면, 자동으로 Wrap이 된다
let val = 3;
console.log(val.toFixed(0));	// 3
console.log(3 .toFixed(10))	// 3.0000000000
console.log(3.12 .toFixed(10))	// 3.1200000000

const a1 = new Number(3);
const a2 = new Number(3);
console.log(a1 + a2);	// 6
console.log(a1 === a2)	// false

// Number.EPSILON 넘버간의 최대 오차
console.log(Number.EPSILON);	// 2.220446049250313e-16
console.log(0.1+0.2)	// 0.30000000000000004
// 실수형 데이터 같은 경우에는 태생적으로 데이터 처리 중에 정밀도 문제가 발생할 수 밖에 없다
console.log(0.1+0.2 === 0.3);	// false
console.log((0.1 + 0.2) - 0.3);	// 5.551115123125783e-17
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON)	// true

// Number.MAX_VALUE 처리할 수 있는 넘버의 최대 크기
// Number.MIN_VALUE 처리할 수 있는 넘버의 최소 크기
console.log(Number.MAX_VALUE);	// 1.7976931348623157e+308
console.log(Number.MIN_VALUE);	// 5e-324
console.log(Number.MAX_VALUE * 10);	// Infinity

// Number.POSITIVE_INFINITY 양의 무한대
// Number.NEGATIVE_INFINITY 음의 무한대
console.log(Infinity);	// Infinity
console.log(Number.POSITIVE_INFINITY);	// Infinity
console.log(Number.NEGATIVE_INFINITY);	// -Infinity


/* static function */

let x= 3;
let y = 0;
console.log(x / y === Infinity);	// true

console.log(Number.isFinite(x / y));	// false
y = 'text';
console.log(x * y);	// NaN
console.log(x * y === NaN);	// false
// NaN은 === 로 비교가 안됨
console.log(Number.isNaN(x*y));	// true