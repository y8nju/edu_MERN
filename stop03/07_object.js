let nick = 'aru';
let age = 34;

let pA = {nick : nick, age : age}
console.log(pA); // { nick: 'aru', age: 34 }

let pB = {nick, age};
console.log(pB); //{ nick: 'aru', age: 34 }

console.log('========================');

let point = {x : 3, y : -2, z : 3};
// console.log(x); //ReferenceError: x is not defined
console.log(point.x); // 3

/*
x, y 라는 변수를 선언해서 x에는 point의 x 값을, y에는 point의 y 값을 설정
let x = point.x;
let y = point.y;
console.log(x, y); // 3 -2
*/

// let p = point;
// point의 참조값(reperance)가 p에 할당

let {x, y} = point;
console.log(`x = ${x}, y = ${y}`) //x = 3, y = -2

// let {kor, eng} = 
let {kor : iKor, eng : iEng} = {
	kor: 79, 
	math: 100, 
	eng: 89
}; // 객체
console.log(`iKor = ${iKor}, iEng = ${iEng}`); // iKor = 79, iEng = 89