function OthelloEngine() {
	this.user = -1; // 사용자가 2명이므로 A👉-1, B👉1
	this.possibleRoute = {};	// 현재 플레이어의 가능한 경로
	this.panel = new Array(8); //8개 짜리 배열
	for(let idx = 0; idx< 8; idx++) {
		let temp = new Array(8); // 8개짜리 배열을 가지고 있는 temp 8개
			temp.fill = null
		this.panel[idx] = temp;
	}
}
// =================
// 0. 초기화
OthelloEngine.prototype.init = function() {
	this.panel[3][3] = 1;
	this.panel[4][4] = 1;
	this.panel[3][4] = -1;
	this.panel[4][3] = -1;
}
// 4. 점수? 돌의 갯수
OthelloEngine.prototype.getScore = function() {
	let userA = 0; // -1
	let userB = 0; //1
	for(let row=0; row < 8; row++) {
		let each = this.panel[row];
		for(let col=0; col < 8; col++) {
			//userA += (each[col] == -1);
			// userB += (each[col] == 1);
			if(each[col] == -1) {
				userA++;
			}else if(each[col]==1) {
				userB++;
			}
		}
	}
	return {userA, userB}
}
// 5. 현재 유저 바꿔주기 (*-1)
OthelloEngine.prototype.switchUser = function() {
	this.user *= -1;
	this.possibleRoute = {};
	return this.user
}
// 1. 놓을 수 있는 위치를 보여주는 기능 + 2. 놓을 수 없는 곳을 알려주는 기능
// 해당 위치에 데이터를 집어 넣을 수 있는지? 체크하기
OthelloEngine.prototype.isAble = function(trow, tcol) {
	let possible = false;
	// 1. 좌측상황
	if(tcol-1>=0 && this.panel[trow][tcol-1] !== this.user) { // 해당 좌표의 좌측에 다른 유저라면
		for(let lidx= tcol-1; lidx>=0; lidx--) {// 앞으로 가면 본인이 있는지 확인
			if(this.panel[trow][lidx] === this.user) {
				possible = true;
				break;
			}
		}
	}
	this.possibleRoute.left = possible; // 왼쪽으로 갔을 때 가능한지 체크
	// 우측 상황
	if(tcol+1<8 && this.panel[trow][tcol+1] !== this.user) { // 해당좌표의 우측에 다른 유저라면
		for(let ridx = tcol+1; ridx < 8; ridx++) {
			if(this.panel[trow][ridx] === this.user) {
				possible = true;
				break;
			}
		}
	}
	// 좌측 위
	if(trow-1 <=0 )
	// 2. 오른쪽 위
	if(trow-1 <=0 && tcol+1 < 8 && this.panel[trow-1][tcol+1] !== this.user) {
		for(let ridx = trow-1, cidx= tcol+1; ridx >=0 && cidx< 8 && ridx--; cidx++) {
			if(this.panel[ridx][cidx] === this.user) {
				possible = true;
				break;
			}
		}
	}
	this.possibleRoute.rightTop = possible;

	return this.possibleRoute.left || this.possibleRoute.leftTop ||this.possibleRoute.top || 
				this.possibleRoute.rightTop || this.possibleRoute.right || this.possibleRoute.rightBottom ||
				this.possibleRoute.bottom || this.possibleRoute.leftBottom;
}

// 3. 놓을 수 있는 곳에 데이터가 들어갔을 때 후처리