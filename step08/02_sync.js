/* 
	setTimOut 매개변수로 받은 콜백함수를 어느 정도 딜레이 뒤에 작동을 시키는 함수
	비슷하게 만들어보자
*/
function delayedTask(fn, ms) {
	let calledTime = Date.now();
	while(true) {
		let elapsed = Date.now() - calledTime;
		if(elapsed >= ms) {
			break
		}
	}
	fn();
}
// delayedTask(function() {
// 	console.log("Hey!")
// }, 3000);
setTimeout(function() {
	console.log("Hey!")
}, 3000);

console.log('TERNMINATED==============')
// delayedTask() 가 먼저 실행되고, 다음 console.log가 실행된다 👉 동기
// setTimeout은 다음 console.log가 실행되고, 본인에게 설정된 시간이 되면 Fn이 실행된다 👉 비동기

/* 
	setTimeout 이 앞서 구현한 delayedTask와 유사하지만 다른점은
	setTimeout 이후에 작업을 블로킹하지 않고 바로 실행 시킨다는 점
	setTimeout 같이 실행 중인 태스크가 종료가 되지 않은 상태에서 다음 태스크가 바로 실행되는 방식을
	비동기 방식이라고 한다

	[동기방식]
	장점
		실행순서가 보장됨
	단점
		하나의 태스크가 완료될 때까지 다 블로킹 됨

	[비동기 방식]
	장점
		블로킹이 발생하지 않고 다음 태스크를 진행함
	단점
		순서 보장이 안됨
*/

let r;
setTimeout(function() {
	console.log('hey');
	r = Math.floor(Math.random*10);
}, 3000);

console.log('TERNMINATED==============')