/* 
	Math
	수학적인 상수와 함수를 위한 속성과 메서드를 가진 내장 객체
	(static으로 설정되어 있음)

	Math.PI	원의 둘레와 지름의 비율, 약 3.14159의 값
*/

console.log(Math.PI);	// 3.141592653589793
console.log(Math.E);	// 2.718281828459045

Math.abs(-3);
console.log(Math.trunc(13.37));	// 13 소수점 버림
Math.round(3.22)	// 반올림한 number 👉 정수형 number
Math.floor(3.22)	// 내림
Math.ceil(3.22)	// 올림
Math.pow(3, 4)	// 제곱 **
Math.sqrt(49)	// 숫자의 제곱근 반환(Root)

Math.random()	// 0.0 <= <1

// 필요한 랜덤 값이 0 ~ 9까지의 정수형 number
Math.floor(Math.random()*10);

Math.max(1, 3, 25, 6);	// 가장 큰 수 반환
console.log(Math.max(1, 3, 25, 6))	// 25
let ar = [1, 3, 25, 6];
console.log(Math.max(...ar))	// 25
console.log(Math.min(...ar))	// 1 가장 작은 수 반환
