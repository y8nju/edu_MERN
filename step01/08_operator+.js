/*
	일치(불일치): ==, ===, !=. !==
*/

let one = 1000;
let other = 1000;
let another = '1000';

/*
	일치
	==: 타입에 상관없이 깂을 비교, 타입이 달라고 값이 같으면 true
	===: 타입과 값을 함께 비교, 타입이 다르면 무조건 false
*/

/* 
console.log(one == other); // true
console.log(one === other); // true
console.log(one == another); // true
console.log(one === another); // false
*/

/* 
	불일치
	!=
	!==
 */

// 두개 값이 다른지 확인
console.log(one != other); // false
console.log(one != 1000); // false

console.log(one != another); // false
console.log(one !== another); // true