/*
	true, false를 확인하는 연산자
	===, == ........
	(true,  false를 확인해서 if와 같은 분기문에서 사용할 수 있게 됨)
*/

/*
	비교연산
	
		크기비교: >, >=, <, <=
		일치(불일치): ==, ===, !=. !==
*/

// number의 크기비교는 예상과 크게 다르지 않다
let x = 1000;
let y = 700;
console.log(x > y); // true 
//크다
console.log(x >= y);  // true
console.log(typeof (x >= y)); // boolean

// boolean 크기?
console.log(true > false); // true

// text 크기?
// 문자열 크기비교는 핸드폰 연락처 목록
console.log("1001" > "999"); // false
console.log("1001" > 999); // true
console.log('abc' > 'acb'); // false
console.log('Abby' > '홍길동') // false
console.log(123 > 'Abby') // false

console.log('A'.charCodeAt()); // 65
console.log('1'.charCodeAt()); // 49
console.log('가'.charCodeAt()); // 44032
console.log('강'.charCodeAt()); // 44053
console.log('★'.charCodeAt()); // 9733
console.log('😀'.charCodeAt()); // 55357
