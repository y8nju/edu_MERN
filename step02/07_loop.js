/* 
	loop문(for, while)은 설정된 조건에 의해 일정한 작업이 반복 수행하게 되어 있지만,
	loop 처리 중에 break, continue에 의해 조금 다른 흐름이 발생하기도 한다

	break: 반복에 설정된 조건을 무시하고 바로 반복처리가 멈추게 되어 있고, 
	continue: 진행 중이던 loop 작업을 건너띄고 다시 처음부터 반복 작업이 시작된다

 */

for(let cnt = 1; cnt <= 5; cnt++) {
	if(Math.random() > 0.7) {
		console.log(`event!! `)
		break; // 이벤트가 동작하면 멈춤
	}
	console.log(`loop-ing at ${cnt}`);
}
console.log('terminated..')

console.log('==========================');

// 소수 판별에 break를 사용해보자

let num = 13;
let prime;
for(let n = 2; n < num; n++) { //n <= num-1 👉n < num
	console.log(`${num} % ${n} 👉 ${num%n}`);
	if(num%n == 0) { // 약수가 1개라도 있다면, 소수가 아님
		prime = false;
		break;
	}
}
prime = prime??true;
console.log(`${num} is Prime number? ${prime}`);

// 13 % 2 👉 1
// 13 % 3 👉 1
// 13 % 4 👉 1
// 13 % 5 👉 3
// 13 % 6 👉 1
// 13 % 7 👉 6
// 13 % 8 👉 5
// 13 % 9 👉 4
// 13 % 10 👉 3
// 13 % 11 👉 2
// 13 % 12 👉 1
// 13 is Prime number? true

console.log('==========================');
/* 
수치 두개가 확보되었을 때,
이 두 수의 최대 공약 수
확보된 두 수 중에 작은 깂을 시작으로 하나씩 -- 해가면서 n1과 n2의 나눴을 때 나머지를 확인
둘 다 나머지가 0이면 break; 그때의 수를 keep 해두면
그게 최대 공약수
 */
let n1 = 60;
let n2 = 45;

let prime2;
let start = n1 <= n2 ? n1 : n2;
for(let val = start; val >=2; val--) {
	// console.log(`${val} : ${n1%val} & ${n2%val}`);
	if(n1 % val == 0 && n2 % val ==0) {
		console.log(`${val}`)
		break;
	}
}

