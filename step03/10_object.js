/* 
	property로 data와 function을 다 가져도 된다
 */

let player = {
	nick : 'choi',
	win : 4, 
	lose : 1,
	info : function() {
		return `${this.nick} (${this.win}W ${this.lose}S)`;
		// this: player 안에 선언된 property, 자기 자신에게 접근할 수 있는 객체 값
		// this는 객체 안에서만 사용 할 수 있다
	},
};
let enemy = {
	nick : 'gam',
	win : 93, 
	lose : 27,
	currentRate : function() {
		return this.win / (this.win + this.lose) * 100;
	}, // clacWinningRate와 같은 함수를 객체 안에 내장 시킬 수 있다
	addRecord : function(dWin = 0, dLose = 0) {
		this.win += dWin;
		this.lose += dLose
	}
};
console.log(player); // { nick: 'choi', win: 4, lose: 1, info: [Function: info] }
console.log(player.info()) // choi (4W 1S)

// 승률계산
function clacWinningRate(obj) {
	return obj. win / (obj.win +obj.lose)*100;
}

console.log(clacWinningRate(player)); // 80
console.log(clacWinningRate(enemy)); // 77.5
console.log(enemy.currentRate()); // 77.5;
enemy.win += 10;
console.log(enemy.currentRate()); // 79.23076923076923
enemy.addRecord(10, 3);
console.log(enemy.currentRate()); // 79.02097902097903