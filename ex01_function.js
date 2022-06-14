/*
	최대 공약수를 찾아주는 function을 정의하고 테스트해보다
	findGCD 란 이름으로
	매개변수가  2개면, 최대공약수를 찾고
	매개변수가 1개면 그 숫자의 최대 약수를 찾아주는 것으로
 */

function findGCD(one, other) {
	other = other ?? one;

	let start = val = one <= other ? one : other;
	let rst
	for(let val = start; val >=2; val--) {
		if(one % val === 0 && other % val ===0) {
			rst = val;
			break;
		}
	}
	return rst;
}
let t = findGCD(24, 12)
console.log(t);

// 최대약수 출력하는 것 추가하기
