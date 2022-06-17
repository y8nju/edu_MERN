let circleA = {
	center :  {
		x : 3,
		y : 10
	},
	radius : 3, 
	getPerimeter : function() { 
		return Math.PI * this.radius ** 2 // 원의 둘레
	},
	getDiameter : function() {
		return this.radius * 2
	}
}
console.log(circleA.getPerimeter());
console.log(circleA.center.x);
console.log(circleA.getDiameter());

console.log('=======================')

let circleB = {
	radius : 5, 
	getPerimeter : function() {
		return Math.PI * this.radius ** 2
	},
	getDiameter : function() {
		return this.radius * 2
	}
}
console.log(circleB.getPerimeter());
console.log(circleB.getDiameter());

/* 
	만약 프로그램 구현에 잇어서 비슷한 형태의 객체가 여러개 사용된다면?
*/