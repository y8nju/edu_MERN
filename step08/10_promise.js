/* 
	자바스크립트는 비동기 처리를 위해 콜백 함수를 활용하는 패턴으로 프로그래밍 언어를 설계했음
	콜백패턴의 문제는 비동기 작업에 결과를 활용하며 작업하게 될 때 콜백지옥으로 인해 가독성도 떨어지고
	콜백에서 발생하는 에러를 처리하기가 곤람함
	
	그래서 ES6에서 Promise 객체를 제공함
*/

// 1. Promise 객체에 작업을 넣어주면 이 작업은 바로 실행 시킴
	// promise 객체는 만드는 순간 동작함
// 2. Promise 객체는 상태가 있는데 Pending 👉 (Fullfilled / Reject)
const p = new Promise(function(resolve, reject) {
	// todo============================
	console.log('execute');

	resolve(); // reject();
	// resolve or reject 둘 중 하나
	// resolve()는 then()을 쓰면 작동한다
});

console.log(p);

p.then( (data) => console.log('then') );
p.catch( (e)=> console.log('catch', e.message) );