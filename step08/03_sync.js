/* 
	비동기 처리 방식으로 작동하는 함수들이 존재한다
	setTimeout, setInterval 혹은 html 이벤트 핸들 등이 이에 속한다
	(HTTP 요청 처리, ajax)

	비동기처리가 가능한 이유는 태스크큐와 이벤트 루프가 있어서이다
	(+백그라운드)

	이벤트 루프
		콜스택이 비어있는 것을 확인하면서 비어 있다면 태스크큐에서 작업을 빼서 콜스택에 넘겨준다
	태스크큐
		해야 될 작업들이 차례대로 들어있는 저장소
	백그라운드
		setTimeout 이벤트 핸들 같이 비동기 방식의 함수가 등록된 곳
		태스크 큐에 작업을 등록 시키는
*/

function sync() {
	for(let i = 0; i < 100; i++) {
		console.log('.......');
	}
}
setTimeout(function() {
	console.log("AAAAAAAa");
}, 0);

sync()