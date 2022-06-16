/* 
	콜백함수
		매개변수를 통해서 다른 함수 내부로 전달되는 함수
		콜백함수를 전달받은 함수를 고차함수라 한다
*/

function runner(fn, cnt) {
	for(let c = 1; c<=cnt; c++) { // function 실행기
		fn();
	}
}

function createQuiz() {
	let n1 = (1+Math.random()*10).toFixed(0);
	let n2 = (1+Math.random()*10).toFixed(0);
	// 1~9까지 출력
	//toFixed(n): 반올림하는 함수 
	console.log(`Q. ${n1} + ${n2} =`);
}
// createQuiz();

// CreateQuiz가 세번 실행되게 runner 콜을 하려면?
runner(createQuiz, 3);
/* 
	let val= 3
	runner(createQuiz, val);
 */

//function 자체를 넣을 수도 있다
runner(function(){
	let n1 = (1+Math.random()*10).toFixed(0);
	let n2 = (1+Math.random()*10).toFixed(0);
	// 1~9까지 출력
	//toFixed(n): 반올림하는 함수 
	console.log(`Q. ${n1} X ${n2} =`);
}, 5)

console.log('=============================');

setInterval(function(){
	let n1 = (1+Math.random()*10).toFixed(0);
	let n2 = (1+Math.random()*3).toFixed(0);
	// 1~9까지 출력
	//toFixed(n): 반올림하는 함수 
	console.log(`Q. ${n1} ^ ${n2} =`);
}, 1500);
// setInterval도 콜백함수로 작용, 정해놓은 시간에 맞춰서 실행