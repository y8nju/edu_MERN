function createQuiz() {
	let n1 = +(1+Math.random()*10).toFixed(0);
	let n2 = +(1+Math.random()*10).toFixed(0);
	let obj = {}
	obj.question = `Q. ${n1} + ${n2} = `;
	obj.answer = n1 + n2;
	/*
	위와 결과는 동일하다
	let question = `Q.. ${n1} + ${n2} = `;
	let answer = n1 + n2;
	return {question, answer};
	let obj = {question : question, answer : answer};
	*/
   return obj;
}

function check(obj) {
	if(obj.answer == obj.input) {
		return 10;
	}else {
		return 0;
	}
}
/* 
위와 동일
function chk({answer, input}) {
	if(answer == input) {
		return 10;
	} else {
		return 0l
	}
}
 */

!function() {
	const read = require('readline-sync');
	let score = 0;
	for(let cnt = 1; cnt<=10; cnt++) { // 10번 반복한다
		let q = createQuiz();
		let n = read.question(q.question); // n이 정답인지 아닌지 확인이 필요
		q.input = n // q.input에 n을 넣어줌 

		score += check(q); // 정답이면 10을 오답이면 0을 합산
	}
	console.log(`final score is ${score}`)
}();

/* 
!function() {
	let quiz = createQuiz();
	console.log(quiz.question);
	console.log(quiz.answer)

	// let {question, answer} = createQuiz();
}();
 */
/* 
let quiz = createQuiz();
//createQuiz function에서 return하는 값을 quiz에 할당
// quiz는 function이 아님
console.log(quiz); // { question: 'Q. 1 + 6 = ', answer: 7 }
 */
/* 
let quiz = createQuiz; // createQuiz function함수를 quiz에 할당 
console.log(quiz); //[Function: createQuiz]
 */

