/* 
	의미있는 function을 만들기 위해선
	매개변수(argument)랑 반환값(return)에  대해 알야야 한다
	매개변수 
		: function이 작동하는데 있어서 외부로부터 전달받게 될 데이터
 */

let calledCount = 0;
let avg = function(n1, n2) { // ()안에 데이터를 대입받을 변수만 설정해두면 된다
	// 평균 값을 계산하는 기능
	console.log(`${n1}: ${typeof n1}`);
	console.log(`${n2}: ${typeof n2}`);
	var r = (n1+n2)/2; // function 안의 결과는 밖에서는 알 수 없다.
	calledCount++
}
/* 
	avg();
	// undefined: undefined
	// undefined: undefined
	avg(1230);
	// 1230: number
	// undefined: undefined
	avg(1230, -21);
	// 1230: number
	// -21: number
	avg(12,3,445,664)
	// 12: number
	// 3: number
 */

// console.log(r); 
// r은 function안에서 쓰인 변수이므로, 사용 불가

let average = avg;
average(433, 2);
// 433: number
// 2: number

console.log(calledCount);