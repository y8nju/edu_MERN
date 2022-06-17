/* 
prototype 을 변경하는 방식으로
Rook이란 객체 생성 함수를  만들자
Bishop이랑 비슷하다
isMoveale의 내용만 바뀌면 됨
*/

function Rook(x, y, color='B') {
	if(!new.target) {
		return;
	}
	this.x = x;
	this.y = y;
	this.color = color;
}
Rook.prototype.move = function(tx, ty) {
	this.x = tx;
	this.y = ty;

}
Rook.prototype.isMoveable = function(tx, ty) {
	// 본인 좌표로는 이동 못함 추가
	if(this.isValid(tx, ty)) {
		let dx = Math.abs(tx-this.x);// 절대값
		let dy = Math.abs(ty-this.y);
		if(dx === 0 && dy !==0 || dx !==0 && dy ===0) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}
Rook.prototype.isValid = function(tx, ty) {
	if(tx < 0 || tx > 7 || ty < 0 || ty > 7) {
		return false;
	} else {
		return true;
	}
}

const r1 = new Rook(3,3);
console.log(r1.isMoveable(3, 4))