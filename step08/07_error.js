/* 
	error : 프로그램 가동 중에 예기치 않은 작업으로 발생하는 것으로
	이걸 처리하지 않으면 프로그램이 비정상 종료된다
*/
function invoke() {
	let obj;
	console.log(obj.value);
}
function run() {
	invoke();
}
try {
	run();
	let obj;
	console.log(obj.value);
} catch (err) {
	// catch문은 error 발생 시에만 작동
	// 콜스택에 있는 함수가 빠져나가기 전에만 해주면 된다
	console.log("ERRoro!", err.message);
}
console.log("Termniate")