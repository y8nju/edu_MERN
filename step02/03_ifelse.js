/* 
	if를 중첩해서 구문을 작성하면 여러 분기를 만들어서 작동되게 구현이 가능하지만
	else if를 사용하면 다양한 분기점을 조금 쉽게 만들어 낼 수 있다
 */

const readline = require('readline-sync');
console.log('Whats your choice?');
let input = readline.keyInSelect(["Rock", "Scissors", "Paper"]);

let r = Math.random();
// 0.0 이상이면서 1.0 미만의 number가 생성이 된다
console.log(`r = ${r}`);


if(input === -1) {
	console.log('Match failed');
} else {
	console.log('3....2....1....0');
		if(r <= 0.33) {
		console.log('You Win');
	} else if(r <= 0.66) {
		console.log('You Lose...');
	} else {
		console.log('Draw');
	}
}

/* 
//------------------else if ---------------------

if(r <= 0.33) {
	console.log('AI의 선택: 주먹')
} else if(r <= 0.66) {
	console.log('AI의 선택: 가위')
} else {
	console.log('AI의 선택: 보')
}
 */
/* 
//------------------if ~ else ---------------------
if(r <= 0.33) {
	console.log('AI의 선택: 주먹')
} else {
	if(r <= 0.66) {
		console.log('AI의 선택: 가위')
	} else {
		console.log('AI의 선택: 보')
	}
}
 */