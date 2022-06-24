/* 
	string.prototype에 정의 된  method
	(객체를 생성한 뒤 할 수 있는 것 들)
*/

let data = 'javascript'
// String 객체는 유사배열객체이다
//  1. length 👉 문자 갯수
console.log(data.length)	//10
console.log((' 한글의 위대함 '.length));	// 9 공백도 문자로 인식
console.log(''.length)	// 0 length 0 짜리 string도 존재

// 2. charAt(number) 👉(string)
console.log(data.charAt(0));	// j

// 3. charCodeAt(number) 👉number
console.log(data.charCodeAt(0));	// 106


// 예제
let msg = '[단체] 안녕하세요. 6월 23일부로 8교시로 전환합니다' ;
// console.log(msg.length);
console.log(msg[0]);
console.log(msg.charAt(0), msg.charCodeAt(0));	// [ 91

// 255까지 1칸 256부터 2칸
let size = 0;
for(let i = 0; i < msg.length; i++) {
	size += (msg.charCodeAt(i)<=255) ? 1: 2;
}
console.log(`size == ${size}`);	// size = 50

// 위와 동일
// Array.from()을 이용하여 글자를 배열로 바꿈
let msgArr = Array.from(msg);	// 글자를 배열로 바꿈
console.log(JSON.stringify(msgArr));
let tot = msgArr.reduce(function(prev, next){	// 배열로 바꾼 문자열을 reduce로 
	return prev +( (next.charCodeAt(0) <=255) ? 1 : 2);
}, 0);
console.log(`tot = ${tot}`) // tot = 50