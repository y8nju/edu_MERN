/* 
	* reduce
	콜백 함수 호출을 통해 하나의 결과 값으로 만들어진다
*/

const data = [1, 3, 54, 6, 2];
let t = data.reduce(function(prev, next){
	console. log(`prev ${prev}, next ${next}`);
	// return prev;
	return next;
}, -1)	// 이니셜 value;
console.log(t); 

// 최대값 구하기
let max = data.reduce((prev, next) => prev > next ? prev : next, 0);
console.log(max)	// 54

// let {length} = data;
// length 👉 배열의 길이
// console.log(length);

// 합산하기
let sum = data.reduce((prev, next) => prev + next, 0);
console.log(sum);

let avg = data.reduce(function(prev, next, i, {length}){
	if(i < length-1) {
		return prev + next;
	}else {
		return (prev + next) / length;
	}
}, 0);
console.log(avg);