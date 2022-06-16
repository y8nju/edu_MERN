/* 
	객체는 여러가지 방법으로 만들어서 사용할 수 있다
	앞서 살펴본 리터럴에 의한 생성은 1회성 객체를 생성시키는데 있어서 가장 적합한 방식이다

	비슷한 구조의 객체를 여러개를 사용해야 한다면 생성자 함수를 사용하거나
		class를 설계하여야 한다

	생성자 함수를 이용하여 객체를 만드는 법을 보자
	생성자 함수가 선언법 자체가 달라지는 건 아니다
*/

function abs(num) {
	return num > 0 ? num : -num;
}
/* 
let v1 = abs(-3);	// 3
console.log(v1);
 */
let v = new abs(-3);
console.log(v);	// abs ()

console.log('======================');
/* 
	일반적인 룰에 의하면 생성자 함수는 작명을 할 때 첫글자를 대문자로 사용한다
*/

function Circle(r) {
	// 이 안에  { } 가 만들어 지고, 여기에 this를 이용하여 접근이 가능해 지는 상태가 된다

	if(!this instanceof Circle) { // 생성자 함수가 아닌 일반 함수로 call이 된 함수라면
		// if(this === glbalTis)
		// 생성자로 call이 된건지, 일반 함수로 call이 된건지 판별
		return new Circle(r); // 생성자로 return 해주자!
	}

	this.radius = r;
	this.getPerimeter = function() {
		return 3.141592 * this.radius ** 2;
	};
	this.getDiameter = function() {
		return this.radius * 2
	}
	return this;	// this를 return한다
	// 생성자 함수에서는 return this가 defult이므로 return이 생략되어도 작동한다
	// this가 아닌 다른 것으로 return 시키면, JS 엔진이 무시하고 this를 return한다
}

console.log(Circle(3));

console.log('======================'); 
let r = new Circle(1);
console.log(r)	// Circle { radius: 1, getPerimeter: [Function (anonymous)] }
console.log(r.radius)	// 1
console.log(r.getPerimeter())	// 3.141592
console.log(r.getDiameter())	// 2

let r2 = new Circle(5);
console.log(r2.radius)	// 5
console.log(r2.getPerimeter())	// 78.5398

console.log(r === r2)	// false

// instanceof 연산자는 생성자 함수 내에서 쓰이는 것이 맞는 지 판별
console.log(r2 instanceof Circle);	// true

let r3 = {
	radius : 3
};
console.log(r3 instanceof Circle)	// false