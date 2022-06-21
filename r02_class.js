/* re01_class.js 와 동일한 내용을 class로 구현하기 */

class Shape {
	x;
	y;
}

class Circle extends Shape{
	constructor(r) {
		super();	// Shape 상속
		this.r = r;
	}
	area = function() {
		return this.r**2**Math.pi;
	}
	// function 정의를 축약형태로 쓰게 되면, prototype
	length() {
		return this.r**2**Math.pi;
	}
}

let c1 = new Circle(3);
let c2 = new Circle(3);
console.log(c1.area === c2.area);   // false
console.log(c1.length === c2.length);	//true
console.log(c1.x)	// undefined