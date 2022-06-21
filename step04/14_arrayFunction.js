/* 
	* some
	콜백의 결과가 하나라도 true 라면 true
	* every
	콜백의 결과가 전부 true여야 true

*/

const arr = [100, 20, 540, 0];
let r = arr.some((val) =>  val >=500);
console.log(r);	// true

let rr =  arr.every((val) =>  val%2 === 0 && val > 0);	// 모든 요소가 짝수이고, 0보다 큰 경우
console.log(rr);	// false

/* 
	* find
		콜백에서 최초로 true인 데이터(요소)를 리턴
		filter와의 차이
		: filter는 배열로 전부 출력[{}, {}], find는 첫번째로 나오는 데이터 1개만 출력{}
	* findIndex
		콜백에서 최초로 true인 데이터의 인덱스를 리턴
*/

function Person(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
}

const student = [ 
	new Person('감혜빈', 27, '남'), 
	new Person('공병구', 30, '남'), 
	new Person('정상춘', 29, '남'), 
	new Person('최윤주', 34, '여'),
	new Person('윤형호', 42,), 
	new Person('최현', 27, '남'),
	// undefined,
	new Person('이성훈', 30, '남')
];

let f = student.find((obj) => obj?.age === 30);
console.log(f);	// Person { name: '감혜빈', age: 27, gender: '남' }

/* 
	배열과 같은 이런 객체들은 API를 참조해서 사용하는 것, 
	자바스크립트 API는 Mozila의 MDN API를 많이 이용한다
*/