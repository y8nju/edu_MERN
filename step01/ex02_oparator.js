/*
	1. name 사용자 이름 입력받고
	2. height(cm)를 입력할 수 있도록 유도해서 처리

	적정체중을 게산해서 출력
	BMI 수치가 18.5 ~ 23.0
	kg / (m*m)

	recommend weight(kg) : ### ~ ###

*/

const readline = require('readline-sync');

let userName = readline.question('User Name?');
console.log(userName);

let userHeight = readline.question('Height?');
console.log(userHeight);
// BMI지수 * ((키/100) * (키/100)) = 정상체중

// let minWeight = Math.ceil(18.5 * ((userHeight/100) ** 2));
let minWeight = (18.5 * ((userHeight/100) ** 2)).toFixed(2);
// let minWeight = Math.ceil(18.5 * ((userHeight/100) * (userHeight/100)));
// 18.5
// let maxWeight = Math.ceil(23 * ((userHeight/100) ** 2));
let maxWeight = (23 * ((userHeight/100) ** 2)).toFixed(2);
// let maxWeight = Math.ceil(23 * ((userHeight/100) * (userHeight/100)));
// 23

console.log(`recommend weight(kg) : ${minWeight} ~ ${maxWeight}`);