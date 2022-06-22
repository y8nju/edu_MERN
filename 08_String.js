/* 
	String 객체는 유사배열 답게 배열의 function과 비슷한 것들이 많이 있다
*/

let txt = 'javascript-Master';
// 1. indexOf(string, number?)	👉 number
	// 앞에서 부터 찾기
console.log(txt.indexOf('Master'));	// 11 없으면 -1
	//  뒤에서 부터 찾기
console.log(txt.lastIndexOf('master'));	// -1
// 2. includes(string, number) 👉boolean
console.log(txt.includes('java'));	// true
console.log(txt.includes('java', 5));	// flase 5번째 이후부터 java가 있어? 놉
// 위에 둘 다 서칭을 시작할 인덱스 지정 가능
// 3. 비슷한 계열로 search가 있다👉정규 표현식으로 
console.log(txt.search(/[Mm]aster/))	// 11

//	startWith(string), endWith(string) 👉 boolean
const datas = ['flower.jpg', 'flower01.png', 'music.jpg'];
datas.forEach(function(str) {
	console.log(str, typeof str)
	console.log(str.startsWith('flower'), str.endsWith('png'));
})