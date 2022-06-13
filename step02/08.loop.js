/* 
	이번에는 loop안에서 continue가 일으키는 흐름에 대해 살펴보자
	(skip)
 */

for (let cnt=1; cnt <=10; cnt++) {
	if(Math.random() > 0.6) {
		console.log('event!');
		continue; // 이벤트가 발생하면 해당 회차는 skip 되며, 반복 작업을 멈추지 않고 다시 시작한다
	}
	console.log(`loop-ing : ${cnt}`);
}
// loop-ing : 1
// loop-ing : 2
// event!
// event!
// loop-ing : 5
// event!
// event!
// event!
// event!
// loop-ing : 10
console.log('==========================');

let n1 = 32;
let n2 = 26;
for(let val = n1; val >= 1; val--) {
	if(val > n1 || val > n2) {
		continue; // continue가 없었다면, 32부터 시작
	}
	console.log(`${val} : ${n1 % val} && ${n2 % val}`);
}