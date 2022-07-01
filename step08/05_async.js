/* 
	setTimeout 이라는 비동기 함수
	console에 시작 이라고 출력
	1초 뒤에 1단계 처리 완료
	2초 뒤에 2단계 처리 완료
	5초 뒤 에 전체 작업 완료
*/

console.log('시작')
setTimeout(() => {
	console.log('1단계 처리완료')
	setTimeout(() => {
		console.log('2단계 처리완료');
		setTimeout(() => {
			console.log('전체작업완료');
		}, 5000);
	}, 2000);
}, 1000);

/* 
	비동기 함수를 동기화 방식처럼 사용하기 위해서, 코드가 지저분해짐
*/