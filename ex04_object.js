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
	- rangeToZero(): return number // 원점 Math.sqrt() 👈🏻 루트
	- rotate(axis) : return X, 
		// point -> (3, 4)
		//point.rotate('x') 
		// point -> (3, -4)
*/

let point = {
	x : 2, 
	y : 3,
	move: function(tx, ty) {
		this.x = tx;
		this.y = ty;
	},
	quardant: function(x, y) {
		x = this.x;
		y = this.y;
		let ret;
		if( !(x===0 || y===0) ) {
			if(x>0 && y>0) {
				ret = 1
			} else if(x<0 && y>0) {
				ret = 2
			} else if(x<0 && y<0) {
				ret = 3
			} else {
				ret = 4
			}
		}
		return ret;
	},
	rotate: function(axis) {
		if(axis === 'x') {
			
		}else {
			
		}
	}
}
console.log(point.quardant());
console.log(point.x, point.y);
point.move(4, -3);
console.log(point.x, point.y);
point.rotate('x');
console.log(point.x, point.y);
