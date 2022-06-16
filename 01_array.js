/* 
	모든 객체를 다 만들어서 사용할 수도 없기에 
	자바스크립트는 프로그래밍에 필요한 객체들이 많이 설계되어 있다

	그 중에서 Array 라는 객체를 살펴보자
		👉 데이터(or 객체)를 관리하기 위해서 제공되는 객체이다
	
	배열 객체를 만들 때,
		1. 리터럴 방식
		2. 생성자 방식
	둘 다 가능하다

*/

let a = [];
let b = new Array();

console.log(a);	//[]
console.log(b);	//[]
console.log(typeof a);	//object
console.log(typeof b);	//object

console.log('-----------------------------------------------------');

// 리터럴 방식이라면 배열객체를 만들 때 데이터를 설정해 둘 수 있다
let menu = ['Coke', 'Coffee', 'Juice' ];
let price = [1000, 300, 700];
console.log(price);	// [ 1000, 300, 700 ]
price.fill(1000)	// 생성된 객체(=인스턴스(instance)) 가 가지고 있는 fuction은 메서드(method)
console.log(price);	// [ 1000, 1000, 1000 ]

console.log('************************************************');

let product = [
	{name: 'Coke', price:1000},
	{name: 'Coffee', price:300},
	{name: 'Juice', price:700}
];
let p = product;
p.fill(0);
console.log(product);

console.log('-----------------------------------------------------');


let ar = Array.of('Knight', 'Bishop', 'Rook');
	// Array가 가지고 있는 static method(of)를 이용하여 배열을 생성할 수 있다
console.log(ar);	// [ 'Knight', 'Bishop', 'Rook' ]

console.log('************************************************');


let arr = new Array(30);
	// 30개의 undefined를 저장
console.log(arr);	// [ <30 empty items> ]
arr.fill(0);
console.log(arr);	// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// arr.fill(new Person); //Person이라는 객체를 가지고 있다면, arr에 person을 넣어 줄 수 있다
