/* 
	분기처리 만큼 기본이 되는 데이터 처리에는 반복 처리라는 것이 존재한다

	while, for 라는 구문이 있고,
	각기 반복 처리가 유리한 상황들이 다르다

	1. while 구문
		- if 구문의 형태와 비슷하게 데이터 상태가 조건으로 설정되며, 

 */

/* 
let x = 10;

if(x > 0) {
	console.log('to do...');
}

while (x > 0) {
	console.log('to do...');
}
console.log('next step');
 */

// 주차장 계산

let time = 67;
let price = 1000;
let left = time - 30; // 30분 오버되는 분만 계산
if( left > 0) {
	while(left > 0) {
		console.log (`계산 전 주차 요금은 ${price}입니다. 추가 시간은 ${left}입니다`)
		price += 400;
		left -= 10;
		console.log (`계산 후 요금은 ${price}입니다. 추가 시간은 ${left}입니다`)
	}
} // if 문을 사용하지 않고, while만 사용해도 됨
console.log (`최종 주차요금은 ${price}입니다. 총 주차시간은 ${time}입니다`)