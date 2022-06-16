/* 
	주차 시간에 따라 요금을 계산 작업을 
	function으로
*/

function parkingFee(time) {
	if(totalTime<=10) { // 회차 10분 무료 주차
		return 0;
	}

	let price = 1000;
	let left = time - 30; // 30분 오버되는 분만 계산
	while(left > 0) {
		price += 400;
		left -= 10;
	}
	price = price < 10000 ? price : 10000;
	return price;
}

let p = parkingFee(54);
console.log(p);

let p2 = parkingFee(40);
console.log(p2)

console.log(parkingFee(402));
