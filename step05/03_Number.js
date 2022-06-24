/* 
	Number -static function
	parseInt 정수, parseFloat 실수
*/

let r = Number. parseInt(342.922);
console.log(r, typeof r);	// 342 number

/* 
	parseInt, parseFloat 는 built-in function으로도 등록되어 있다
*/
console.log(parseInt(56424.22));	// 56424
console.log(Number.parseInt === parseInt);	// true

console.log(Number.parseInt('10101', )); // 10101
console.log(Number.parseInt('10101', 2));	// 2진법 21
console.log(Number.parseInt('10101', 8));	// 8진법 4161
console.log(Number.parseInt('10101', 16));	// 16진법 65793

console.log(Number.parseInt('ff', 16));	// 255
console.log(Number.parseInt('ff', 2));	// NaN

console.log(Number.parseFloat('243343.222'));	// 243343.222
console.log(Number.parseFloat === parseFloat);	// true

//  Number. prototype function(만들어진  Number를 통해서 사용)

let x = 3321;
console.log(x.toExponential(1));	// 지수 표기법 3.3e+3			(e는 10)
x = 5.123456
console.log(x.toPrecision(3));    // 유효 자릿수를 지정하는 정수 5.12
console.log(x.toFixed(4)); 	// 소수점 자리 고정5.1235
x = 255;
console.log(x.toString(), typeof x.toString)	// 255 function
console.log(x.toString(16));	// Number 객체를 명시하는 문자열. ff

console.log(x.toString);
