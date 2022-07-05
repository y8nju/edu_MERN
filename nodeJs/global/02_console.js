/* 
	node의 console 객체는 다양한 기능을 제공함(브라우저의 콘솔과는 다름)

	time, timeEnd 타이머 관련 기능
*/

// 이미 End를 시킨 걸 또 End를 하면?
for(let i = 0; i < 10; i++) {
	console.time(`process${i}`);
	setTimeout(() => {
		console.timeEnd(`process${i}`);
		sum(1,2);
		if(i===9) {
			// console.clear();	// 콘솔창 지우기
		}
	}, 1000);
}

/* 
	assert
	조건을 줘서 조건의 결과에 따라 출력
	(거짓일 때 출력)
*/

let val = 3;
console.assert(val !==3, 'invalid vallue');	// Assertion failed: invalid vallue

/* 
	dir
	상세보기
*/

let obj = {name: '감혜빈', age: 27, flag : false, hobbies: ['study', 'sport']}
console.dir(obj);	// { name: '감혜빈', age: 27, flag: false }
console.dir(obj, {colors: true, depth: 0});	
// colors: 객체에 따라 컬러로 다르게 볼 수 있도록
// depth: 

/* 
	trace();
	사용하게 된 과정을 추적해서 출력함
*/
function sum(a, b) {
	console.trace('function sum');
	return a+b;
}
sum(1,2)

/* 
	console.log,	console.info,	console.warn,	console.err
*/

// 배열을 하나 만들어서 console.table
let menu = ['Coke', 'Coffee', 'Juice' ];
console.table(menu);