/* 
	class로 설계하는 객체에는 getter와 setter 함수를 구현할 수 있다
*/

class Circle {
	#radius;
	constructor(rad) {
		this.#radius = rad;
	}
	get type() {
		return 'Circle';
	}
	get radius() {
		return this.#radius;
	}
	set radius(val) {	// 매개변수가 무조건 필요하다
		this.#radius = val > 0 ? val : 0;
	}
}

const c1 = new Circle(10);

// get으로 선언된 함수는 변수처럼 작동하기에, 함수처럼 call을 할 수는 없다
// console.log(c1.radius());	// TypeError: c1.radius is not a function
console.log(c1.radius);	// 1
console.log(c1.type);	// Circle

c1.radius = -10;
console.log(c1.radius)	//0