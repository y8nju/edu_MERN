/* 
	2. 중첩함수 - 헬퍼함수
		특정 function을 도와주는 역할로 사용함
*/

// 주차장 여러대 계산

function totalFee(t1, t2, t3) {
	function sumTime() {
		// function 내부에서 만들어진 function은 상위 function의 매개변수를 사용할 수 있다
		return t1??0 + t2??0 +t3??0
	}
	function eachFee(time) {
		// function 내부에서 만들어진 function은 외부에서 사용할 수 없다 
		// block scope
		let price = 1000;
		let left = time - 30; // 30분 오버되는 분만 계산
		while(left > 0) {
			price += 400;
			left -= 10;
		}
		price = price < 10000 ? price : 10000;
		return price;
	}
	return eachFee(t1??0) + eachFee(t2??0) + eachFee(t3??0)
}

!function() {
	console.log(totalFee(67, 34)) // 5000
	eachFee(3) // ReferenceError: eachFee is not defined
}();