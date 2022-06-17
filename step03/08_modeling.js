function Piece() {
}
Piece.prototype.move = function(tx, ty) {
	this.x = tx;
	this.y = ty;
};
Piece.prototype.isValid = function(tx, ty) {
	return tx > 0 && tx< 8 && ty> 0 && ty <8;
}
Piece.prototype.isMoveable = function(tx, ty) {
	return true;
}
Piece.prototype.calcMobeRange =function(tx, ty) {
	let dx = Math.abs(tx - this.x);
	let dy = Math.abs(ty - this.y);
	return {dx, dy};
}

function Rook(x, y, color='B') {
	this.x = x;
	this.y = y;
	this.color = color;
	this.isMoveable = function(tx, ty) {
		// let obj = this.calcMobeRange(tx, ty);	// obj.dx, obj.dy
		let {dx, dy} = this.calcMobeRange(tx, ty);
		if(dx ===0 && dy !== 0 || dx !== 0 && dy === 0) {
			return true;
		}else {
			return false;
		}
	}
}
Rook.prototype = Piece.prototype;
const r = new Rook(3,2);
console.log(r);	// Piece { x: 3, y: 2, color: 'B', isMoveable: [Function (anonymous)] }
r.move(5, 6)
console.log(r);		// Piece { x: 5, y: 6, color: 'B', isMoveable: [Function (anonymous)] }
console.log(r.isMoveable(1, 6));    // true