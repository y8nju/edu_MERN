/* 
	여러개의 변수를 하나로 묶고자 할 때 사용한다

	객체를 만들어내는 방법은 3가지 정도가 있다
	객체는 여러 property의 집합이다
	
	1. 리터럴(literal)
		데이터 그 자체로 의미를 가지는 데이터
*/

// literal 방식
let coke = {
	// property = key : value
	product : 'Coke',
	price: 1200,
};

console.log(coke); // { product: 'Coke', price: 1200 }
console.log(coke.price); // 1200
console.log(typeof coke) // object
console.log(typeof coke.price + '/' + coke.price); // number/1200
console.log(typeof coke['product'] + '/' + coke['product']); // string/Coke

console.log('==================');

let human = {
	nick : 'aru',
	hobby1: 'sleep',
	hobby2: 'handmade',
	hobby3: 'trable'
};

console.log(human.hobby1);
for(let i = 1; i <= 3; i++) {
	console.log(human['hobby'+i]);
};
console.log(Object.keys(human))