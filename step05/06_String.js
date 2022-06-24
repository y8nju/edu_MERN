/* 
	String 클래스
		Number 하고 비슷하고 string data의 Wrapper 객체
*/

let one = 'text';
let two = new String('text');

console.log(one, typeof one);	// text string
console.log(two, typeof two);	// [String: 'text'] object

console.log(one.includes('x'));	// true
console.log(two.includes('x'));	// true


// 생성자 함수를 일반 function처럼 사용하면, 해당 값을 string으로 만들어준다
let t = String(true);
console.log(t, typeof t)	// true string


// String의 static methods
let str = String.fromCharCode(67);
console.log(str);	// C
let str2 = String.fromCodePoint(67);
console.log(str2);	// C
console.log(String.fromCharCode(54620));	// 한

// for(let code = 41; code<=130; code++) {
// 	console.log(code, String.fromCharCode(code));
// 	// 48👉57(수치형 문자)
// 	// 65 👉90(대문자)
// 	// 97👉122(소문자)
// }
// for(let code = 44032; code<=44444; code++) {
// 	console.log(code, String.fromCharCode(code));
// }


// Math class, String class를 이용해서
// 알파벳 대문자 랜덤 생성,....ㅎ

for(let c = 1; c<=20; c++) {
	let d = 65 + Math.floor((Math.random()*26));
	let sd = String.fromCharCode(d);
	console.log(sd);
	break;
}