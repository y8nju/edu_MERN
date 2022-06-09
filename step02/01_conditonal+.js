

let time = 657; // 주차한 시간
let price;

// 10분 미만의 추가 요금은 제외한다
if( time <= 30) {
	price = 1000;
} else {
    price = 1000;
	let left = time - 30;
	let cnt = (left -( left % 10)) / 10
	price += cnt*400
}
console.log(`${time} min elapsed ==> ${price}`);

// 10분 미만의 추가 요금도 합산한다
if( time <= 30) {
	price = 1000;
} else {
    price = 1000;
	let left = time - 30;
	let cnt = (left -( left % 10)) / 10;

	if (left % 10 == 0) {
		price += cnt*400
	} else {
		price += cnt*400 + 400
	};
}
console.log(`${time} min elapsed ==> ${price}`);

// 최대 요금은 10000원
price = price > 10000 ? 10000 : price;
console.log(`${time} min elapsed ==> ${price}`);