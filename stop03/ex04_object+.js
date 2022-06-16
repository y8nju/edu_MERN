/*
	point라는 변수에  객체를 할당하세요
	해당 객체는 아래와 같은 밸류형 프로퍼티를 가지고 있습니다
	x : number(임의)
	y : number(임의)
	객제체 설정된 데이터를 활용하는 function도 가지고 있다
	- function move(tx, ty) : return은 필요하지 않음
		console.log(point.x, point.y);
		point.move(10, -5);
	- console.log(point.x, point.y); // 10 -5
	- quardant() : return number (사분면 구하기)
	- rangeToZero(): return number // 원점까지의 거리 구하기 Math.sqrt() 👈🏻 루트
	- rotate(axis) : return X,
		// point -> (3, 4)
		//point.rotate('x')
		// point -> (3, -4)
*/

let point = {
	x : 0,
	y : 0,
	move: function(tx, ty) {
		this.x = tx;
		this.y = ty;
	},
	quardant: function() {
		if( (this.x === 0 || this.y === 0) ) {
			return undefined;
		} else {
            if(this.x > 0) {
                return this.y > 0 ? 1 : 4;
            } else {
                return this.y > 0 ? 2 : 3;
            }
        }
	},
	rangeToZero: function() {
		let range = Math.sqrt(this.x**2 +this.y**2);
		return range;
	},
	rotate: function(axis) {
		if(axis === 'x' || axis === 'X') {
			this.y *= -1;
		} else if(axis === 'y' || axis === 'Y') {
			this.x *= -1;
		}
	}
}
// 포인트 이동
point.move(4, -3);
console.log(point.x, point.y);
// 사분면 출력
console.log(point.quardant());
// 축 회전
point.rotate('x');
console.log(point.x, point.y);
// 원점과의 거리
console.log(point.rangeToZero());

point.init = function() {
    this.x = 0;
    this.y = 0;
};
point.init();
console.log(point.rangeToZero());