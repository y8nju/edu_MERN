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

function Bishop(x, y, color) {
	// 좌표 0-7 안에서만 움직인다요
	if(this.color === 'undefined') {
		return 'B'
	}
}
Bishop.prototype.move = function(tx, ty) {
	this.x = tx;
	this.y = ty;
}
Bishop.prototype.isMoveable = function(tx, ty) {
	this.x = tx;
	this.y = ty;
	// 같은 수로만 증감시 움직일 수 있다요
	// if(this.x === tx++ && this.y === ty++) {
	// 	return true;
	// } else if (this.x === tx-- && this.y === ty--) {
		
	// }

}
Bishop.prototype.color = function() {

}

/* 
new Bishop(3, 1);
new Bishop(3, 1, 'W');
// 3번째 값이 안들어오면 default 'B'
 */

