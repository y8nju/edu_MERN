/*
	체스 참고: https://ko.wikipedia.org/wiki/%EC%B2%B4%EC%8A%A4?tableofcontents=0
	좌표 8, 8( 0-7, 0-7)
	=============================
	Bishop 이라는 타입의 객체를 설계
		prototype으로............
		color : string 'W', 'B' // default 'B'
		x: number (0~7)
		y: number (0~7)
	=============================
	1. x, y 좌표 값을 바꿀 용도
		move : function(tx, ty)
		return 생략
	2. 해당 좌표로 움직일 수 있는 지 확인
		isMoveable : function(tx, ty)
			this.x, this.y의 기준으로 해당 tx, ty로 이동이 가능한가?
			확인해서 true라면 이동, false라면 이동 불가
			(대각선으로만 이동 가능)...... ? x와 y 모두 같은 수로 ++, -- 증감
*/

function Bishop(x, y, color='B') {
	if(!new.target) {
		return;
	}
	this.x = x;
	this.y = y;
	this.color = color;
}
Bishop.prototype.move = function(tx, ty) {
	this.x = tx;
	this.y = ty;

}
Bishop.prototype.isMoveable = function(tx, ty) {
	// 본인 좌표로는 이동 못함 추가
	if(this.isValid(tx, ty)) {
		let dx = Math.abs(tx-this.x);// 절대값
		let dy = ty - this.y;
		dy = dy> 0 ? dy: -dy;
		if(dx === dy) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}
Bishop.prototype.isValid = function(tx, ty) {
	if(tx < 0 || tx > 7 || ty < 0 || ty > 7) {
		return false;
	} else {
		return true;
	}
}

const bp1 = new Bishop(4,3);
console.log(bp1);	// Bishop { x: 4, y: 3, color: 'B' }
console.log('move' in bp1 );	// true
console.log(bp1.isMoveable(1, 6));	// true
console.log(bp1.isMoveable(2, 1));	// true
console.log(bp1.isMoveable(6, 5));	// true
console.log(bp1.isMoveable(7, 0));	// true

