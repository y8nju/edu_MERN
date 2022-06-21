/* 
	* forEach
	배열 요소들을 차례대로 하나씩 인자로 해서 콜백함수를 작동시켜줌
*/

const numbers = [4,5,6,7,8,9];
const copy = [];

for(let i = 0; i<numbers.length; i++) {
	let val = numbers[i]
	console.log(val, i);
	copy.push(val);
}
/* 
let total = 0;
numbers.forEach(function(val, idx){
	// console.log(this)	// forEach에서 this는 global this
	// console.log(val, idx);
	// copy.push(val);
	total += val;
	this.push(val);
	if( val === undefined) {
		// break;
	}
}, copy)

console.log(copy);
console.log(total) */



let pan = new Array(10)
pan.fill(null);
pan.forEach(function(val, idx, arr) {
	arr[idx] = new Array(10);
	arr[idx].fill(null);
	// console.log(arr == pan);
})
console.log(pan);