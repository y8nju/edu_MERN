/* 
	리턴에 대헤 알아보기 위해 하나의 function을 먼저 살펴보자.

	Math.round(): number형 데이터를 매개변수로 받아서
	반올림 처리 후, number를 반환한다

	이렇게 function의 결과물을 만들어 낼 때 사용되는 것이 return이다
 */
console.log(Math.round(4.555)); // 5

function round(num) {
	// console.log('round function worked..!');
	// return num - num%1;
	let rst = num - num%1;
	if(num%1 >= 0.5)  {
		rst++;
	}
	return rst;
}

/* 
	만약 function에 return이 없으면 자동으로 마지막 작업에 return; 이 추가됨
	return 뒤에 어떤 value를 설정하지 않으면 undefined가 return된다
*/

console.log(round(9.80665)); // 10

let pi = 3.141592;
let rpi = round(pi);
console.log(rpi) // 3

