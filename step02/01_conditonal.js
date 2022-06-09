/*
	이제까지 기본적인 데이터 종류와 변수를 통한 제어 그리고
	지원하는 연산작업에 대해 알아보았다

	실제 프로그램은 계산 과정에서
	여러가지 상황을 고려한 처리가 반드시 필요하다

	이걸 가능하게 하는 구문이 
	if ~ else, switch 이다
*/

//주차장 요금 계산을 통해 구문 사용법을 익혀보자 
// 30분 기본: 1000, 추가 10분당: 400, 최대 요금: 10000

let time = 657; // 주차한 시간

/* 
	if statement는 데어터 상태에 따라 다른 처리가 일어날 수 있게 구현 가능하다

	var 와 let은 영역이 다르게 설정된다
	let ==> block scope
	var ==> global scope (  / function scope)
 */


// 10분 미만의 추가 요금은 제외한다
if( time <= 30) {
	var price = 1000;
} else {
	var price = 1000;
	var left = time - 30;
	var cnt = (left -( left % 10)) / 10
	price += cnt*400
}
console.log(`${time} min elapsed ==> ${price}`);

// 10분 미만의 추가 요금도 합산한다
if( time <= 30) {
	var price = 1000;
} else {
	var price = 1000;
	var left = time - 30;
	var cnt = (left -( left % 10)) / 10;

	if (left % 10 == 0) {
		price += cnt*400
	} else {
		price += cnt*400 + 400
	};
}
console.log(`${time} min elapsed ==> ${price}`);

// 최대 요금은 10000원
/* 
if (price >= 10000) {
	price = 10000;
}
 */
price = price > 10000 ? 10000 : price;
console.log(`${time} min elapsed ==> ${price}`);




/* 
// 소수점 버림 처리
if( time <= 30) {
	var price = 1000;
	console.log(price);
} else {
	var price = 1000;
	var left = time - 30;
	var extra = (Math.ceil(left / 10)) * 400;
	var totalPrice = price + extra
	console.log(totalPrice);
}
*/