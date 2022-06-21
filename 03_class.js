class Rectangle {
	// 2. 이런 형태 클래스 자체에 선언해 둔 프로퍼티는 추가로 할 수 있는 작업이 있다
	// #과 함께 선언할 수 있다 #을 붙인 프로퍼티는 외부 접근이 불가 한 private 처리(은닉)가 된다
	#x =0;
	#y;
	constructor(width, height) {
		// 1. {} 비어 있는 객체에 프로퍼티를 추가하는 형태가 아니라
		this.width = width;
		// this.#width = width; // 불가능
		this.height = height;
	}
	move(dx, dy) {
		this.#x = dx;
		this.#y = dy;
	}

	position() {
		return {'x': this.#x, 'y': this.#y};
	}
}

const r = new Rectangle(300, 300);
// console.log(r);	// Rectangle { x: undefined, y: undefined, width: 300, height: 300 }
r.move(10, 10);
// console.log(r); // Rectangle { x: 10, y: 10, width: 300, height: 300 }
// console.log(r.width, r.y);  // 300 10
console.log(JSON.stringify(r))  // {"width":300,"height":300}
// console.log(r.#x);   // SyntaxError: Private field '#x' must be declared in an enclosing class
console.log(r.position());	// { x: 10, y: 10 }

/* 
	# private 처리가 필요한 이유
	외부에서의 접근을 못하도록 숨겨서 내부에서만 안정적으로 객체를 사용할 수 있도록
*/