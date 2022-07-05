/* 

*/
// console.log(process);
// console.log(process.env);   // 실행환경 정보

if(process.argv[2] !== '1q2w3e4r') {
	process.exit(-1);
}

console.log(process.argv);
/* 
	[0] [1] 실행파일 위치 실행파일명
	[2] 부터 실행하면서 전달받은 인자들
*/
console.log(process.env.OS);   // OS 정보

// console.log(value);

console.log(process.memoryUsage()); // 전체 메모리 사용량
for(let i = 1; i <=10; i++) {
	new Array(10000);
	console.log(process.memoryUsage.rss()); //실제 사용량
}

if(Math.random() > 0.5) {
	process.exit(0);    // 프로그램 종료 (엑시트 코드 값: 0 정상종료)
}
