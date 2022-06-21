let arr = ['사과', '바나나', '사과', '배', '수박', '수박', '사과' ];
// 배열이라는 저장용 객체가 가지고 있는 모든 요소(데이터)들을 조회
// length를 이용한 for loop 처리
for(let i = 0; i<arr.length; i++){
	console.log(i, arr[i]);
}
// arr 안에 '사과'는 어디에 있는가?
let cnt = 0;
for(let i = 0; i < arr.length; i++) {
	let find = '사과';
	if(arr[i] === find) {
		cnt++
	}
}
console.log(cnt);	// 3

console.log('==================================');


let targetIdx = 4;
cnt = 0;
// targetIdx 앞의 사과의 갯수
for(let step = 0; step <targetIdx; step++) {
	let find = '사과';
	if(arr[step] === find) {
		cnt++
	}
}
console.log(cnt);

// cnt = 0;
// // targetIdx 앞의 사과의 갯수
// for(let idx = targetIdx -1; idx> 0; i--) {
// 	if(arr[step] === '사과') {
// 		cnt++
// 	}
// }
// for(let step = 1;  ; step++) {
//     if(arr[targetIdx - step] === undefined) {
//         break;
//     }
// 		if(arr[targetIdx - step] === '사과') {
//         step++
//     }
// }
// console.log(cnt);

// 어떤 특정 인덱스가 주어졌을 때, 그 index의 요소 값이 뒤에도 존재하는지

arr = ['사과', '바나나', '사과', '배', '수박', '수박', '사과' ];
let idx = 1;	// 바뀔 수 있다
let value = arr[idx];
let find = false;
for(let i = idx+1; i < arr.length; i++) {
	if(arr[i] === value) {
		find = true;
		break;
	}
}
console.log(find)