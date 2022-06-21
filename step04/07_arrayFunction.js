const arr = [3, 5]
arr.push(4);
console.log(arr)	// [3,5,4]
// function
// unshift, shift
// * unshift
// 첫번째 요소 앞에 추가
arr.unshift(13)	
console.log(arr)	// [13,3,5,4]
// * shift
// 첫번째 요소 추출(제거)
// console.log(v);
// console.log(arr)
for(let cnt = 1; cnt<=5; cnt++) {
	let v = arr.shift()
	console.log(v);
	console.log(arr);
}
// push와 shift를 사용하면 Array를 Queue 라는 형태의 구조로 사용 할 수 있다
// Queue(큐)라는 구조는 FIFO(선입선출)

//* concat
// 이어붙이기(배열 합치기)
// 원본에 변화가 일어나진 않는다

let one = [3,4,5];
let two =[4,35, 6, 7, 1];
console.log(JSON.stringify(one.concat(two)));	// [3,4,5,4,35,6,7,1]
console.log(one);	// [ 3, 4, 5 ]
// one = one.concat(two)	// 원본을 바꾸고 싶으면! 
