/* 
	반복처리에 사용되는 구문이 while 외에도 for 구문이 존재한다

	for는 while과 다르게 반복 설정에 필요한 값들이 3개이다
	for 사용법은 여러 형태가 있기에 기본형태를 살펴보자
	()안에 ; 을 기준으로
		1. 반복 시작전에 처리할 일
		2. 언제까지 할건지 조건을 설정
		3. 매회 반복이 끝나면서 해야될 일

	이러한 특징을 살려서 while loop 와는 다른 상황에서 많이 사용한다
*/

/* 
let x = 10;

for( console.log('반복시작'); x > 0 ; console.log('한 회전 끝')) {
	console.log('to do...');
	if(Math.random() > 0.5) {
		x *= -2;
	}
}

for 루프의 각 항은 필수가 아니라 옵션
for ( ; x>0; console.log('한 회전 끝');) {

}

 */

let cnt;
for (cnt = 1; cnt <=5; cnt++) {
	console.log('to do job' + cnt)
}
console.log(cnt);


// 대표적인 상황이 정해진 횟수만큼의 반복처리에 용이
console.log(2**10); // 1024

let result = 1;
for(let c=1; c<=10; c++) {
	result *= 2;
}
console.log(result);