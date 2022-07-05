/* 

*/
// 둘 다 동일
// console.log(globalThis);
// console.log(global);
console.log(global === globalThis);	// true 기본객체
// global 객체가 가진 요소들은 global을 생략할 수 있음
global.console.log('global object');	// global object
global.setTimeout(() => {
	console.log('비동기 작업');
}, 1000)

// 글로벌처럼 사용할 수 있는 변수
console.log(__filename);	// 파일이름
console.log(__dirname);	// 디렉토리 이름
