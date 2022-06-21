const ar =  ['월', '화', '수'];
ar[0];	// 맨 첫번째 데이터(요소)의 키(index)가 0
	// 배열객체의 첫번째 요소의 인덱스는 0

ar[0] = 'MON';
console.log(ar)	// [ 'MON', '화', '수' ]

//배열 객체는 length라는 property가 있다 👉 요소의 갯수
console.log(ar.length + ' / ' + typeof ar.length);	// 3 / number
// ar[9] = '???'
// console.log(ar.length + ' / ' + typeof ar.length);	// 10 / number

ar[ar.length] = 'XXX';	// 마지막 요소 뒤에 새로운 요소 추가
ar[ar.length] = 'XXXX';
console.log(ar)	//[ 'MON', '화', '수', 'XXX' ]

console.log('======================================')

for(let idx = 0; idx < ar.length; idx++) {
	console.log(`${idx} 👉 ${ar[idx]}`);
	/* 
		0 👉 MON
		1 👉 화
		2 👉 수
		3 👉 XXX
		4 👉 XXXX
	*/
}
console.log('======================================')

for(let key in ar) {
	console.log(`${key} 👉 ${ar[key]}`);
	/* 
		0 👉 MON
		1 👉 화
		2 👉 수
		3 👉 XXX
		4 👉 XXXX
	*/
}

for(let val of ar) {	// 요소 값을 출력
	console.log(val);
	/* 
		MON
		화
		수
		XXX
		XXXX
	*/
}

ar[-1] = '엥'
console.log(ar[-1]);	// 엥
console.log(ar)	// [ 'MON', '화', '수', 'XXX', 'XXXX', '-1': '엥' ]
console.log(ar.length)	// 5