/* 
	ex04에서 리터럴 방식으로 객체를 정의내려 보았다
	이를 생성자 함수를 통하여 만들어 지도록
	Point라는 생성자 함수를 만들어 보자
	
	생성자 함수는 선언문 혹은 표현식 방식으로만 정의할 수 있다 ( => 가 안됨)
*/
/* 
let p1 = new Point(3, -1);
console.log(p1.quardant());	// 4

let p2 = new Point(11, -3);
p2.rotate(x);
console.log(`p2.x = ${p2.x}, p2.y = ${p2.y}`);	// (11, 3)
console.log(p2 instanceof Point);	//true
 */
function Point(x, y) {
	/* 
		console.log(new.target);	// [Function: Point]
		//new.target
	*/
	if(new.target === undefined) {	// if(!new.target)
		return new Point(x, y);
	};

	this.x = x;
	this.y = y;
	this.move = function(tx, ty) {
		this.x = tx;
		this.y = ty;
	};
	this.quardant = function() {
		if( (this.x === 0 || this.y === 0) ) {
			return undefined;
		} else {
			if(this.x > 0) {
				return this.y > 0 ? 1 : 4;
			} else {
				return this.y > 0 ? 2 : 3;
			}
		}
	};
	this.rangeToZero = function() {
		let range = Math.sqrt(this.x**2 +this.y**2);
		return range;
	};
	this.rotate = function(axis) {
		if(axis === 'x' || axis === 'X') {
			this.y *= -1;
		} else if(axis === 'y' || axis === 'Y') {
			this.x *= -1;
		}
		return this;
	};
};

Point(3, 4)	//undefined
new Point(3, 4)	//[Function: Point]

console.log('=========================')

let p1 = new Point(3, -1);
console.log(p1.quardant());	// 4
p1.rotate('x');
console.log(`p1.x = ${p1.x}, p1.y = ${p1.y}`);	// p1.x = 3, p1.y = 1

let p2 = new Point(11, -3);
p2.rotate('x');
console.log(`p2.x = ${p2.x}, p2.y = ${p2.y}`);	// p2.x = 11, p2.y = 3
console.log(p2 instanceof Point);	// true



console.log(p1.move === p2.move)	// false



for(let e in p1) {
	//for( in ) 구문: 가지고 있는 property 모두 확인 가능
	console.log('------------->' + e);
}
// ------------->x
// ------------->y
// ------------->move
// ------------->quardant
// ------------->rangeToZero
// ------------->rotate
