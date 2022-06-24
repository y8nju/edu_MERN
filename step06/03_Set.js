/* 
	유사 배열 객체답게 forEach가 작동
*/

const n = [1, 23, 3, 2, 1, 3, 3];
n.forEach(function(v, i){
	// console.log(v, i);
});

console.log('============')

const numbers = new Set(n);
numbers.forEach(function(v, i) {
	// console.log(v, i);
});

// ====================

const yesterday = new Set(['최현', '유유유', '이혜주', '최윤주', '김주완']);
const today = new Set(['유유유', '이혜주', '이성훈', '김기협']);
//합집합
const union = new Set(yesterday);
today.forEach(function(val) {
	union.add(val);
});
console.log(union); // Set(7) { '최현', '유유유', '이혜주', '최윤주', '김주완', '이성훈', '김기협' }

// 교집합
const intersection = new Set();
today.forEach(function(val) {
	if(yesterday.has(val)) {
		intersection.add(val);   // Set(2) { '유유유', '이혜주' }
	}
})
console.log(intersection);

// 차집합(today의 신규 유저)

// const difference = new Set();
// today.forEach(function(val) {
// 	if(!yesterday.has(val)) {
// 		difference.add(val)
// 	}
// })
// console.log(difference);    // Set(2) { '이성훈', '김기협' }

const difference = new Set(today);
today.forEach(function(val) {
	if(yesterday.has(val)) {
		difference.delete(val);
	}
})
console.log(difference);    // Set(2) { '이성훈', '김기협' }