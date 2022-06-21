/* 
	객체가 필요할 때 만들어서 쓰는 방법을
	리터럴 방식과 생성자 함수를 통한 방법만 살펴보았다

	class를 이용해서 만드는 방법을 마지막으로 살펴보자
*/
// 객체리터럴
let one = {name: 'aru'}
// 생성자함수
function Person(name) {
	this.name = name;
};
let two = new Person('최윤주');
// 3. 클래스
// 객체를 만들어내는 function
class Student {
	constructor(name) {
		this.name = name;
		console.log(Student.prototype)	// {}
	}
}
let three = new Student('아루');
console.log(typeof Student);	// function


console.log(one, two, three);   // { name: 'aru' } Person { name: '최윤주' } Student { name: '아루' }
console.log(JSON.stringify(one));   // {"name":"aru"}
console.log(JSON.stringify(two));	// {"name":"최윤주"}
console.log(JSON.stringify(three));	// {"name":"아루"}
