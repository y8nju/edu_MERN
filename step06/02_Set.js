/* Defult 생성 */
const set1 = new Set();	// 비어있는 Set 생성
console.log(set1);	// Set(0) {}

/* 
	Set 객체의 변수
		- size: 요소 갯수
*/
console.log(set1.size);

/* 
	Set 객체의 function
		- add
		- has
		- delete
		- clear
		// 동일 객체라고 판단하는게 === 일 때, 
*/

// add(value) 👉this(본인이 return된다)
// set1.add(3).add(4).add(4).add(4);
// console.log(set1.size)	//2
// add는 체이닝이 된다
set1.add(3);
set1.add(3);
set1.add(3);
console.log(set1.size);	// 1

let obj = {name:'최현', age:27};
set1.add(obj);
set1.add(obj);
console.log(set1.size);	// 2
set1.add( {name:'최현', age:27});
console.log(set1.size);	// 3
// 객체는 별도의 요소로 판단

console.log(set1.has(3));	// true
// has(value) 👉 boolean

console.log(set1.delete(55));	// false
// delete(value) 👉 boolean

set1.clear();	// 요소를 다 지움
// clear() 👉 void
console.log(set1.size);	// 0