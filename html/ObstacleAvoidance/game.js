/* 
	1. User, Wall를 만들기 위한 Base Class를 설계
	클래스명은 Rectiangle
	1-1. constructor를 통해 x,y,width, height를 전달받아 설정될 수 있게
	1-2.translate를 통해 전달 받은 tx, ty를 x, y에 += 시키게 설정
	1-3. crashWith를 통해 값을 전달 받을 수 있게 설정
*/

class Rectangle {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}
	translate(tx, ty) {
		this.x += tx;
		this.y += ty;
	}
	crashWith(other) {
		// 매개변수로 받은 other로 Rectangle 객체가 들어온다고 생각
		/* 
			this의 bottomY(👉y+h)이 other의 topY 보다 작으면 false
			this의 topY가 other의 bottomY보다 크면 false
			this의 rightX(👉 x+w) other leftX보다 작으면 false
			this의 leftX가 other의 rightX보다 크면 false
				this.bottomY = this.y + this.h;
				this.topY = this.y
				this.rightX = this.x + this.w;
				this.leftX = this.x;
				other.topY = other.y
				other.bottomY = other.y + other.h
				other.leftX =  other.x
				other.rightX = other.x + other.w
		 */
		if( this.y + this.h < other.y || this.y > other.y + other.h
			|| this.x + this.w < other.x || this.x > other.x + other.w) {
			return false;
		}else {
			return true;
		}
	}
	toArray() {
		return [this.x, this.y, this.w, this.h];
	}
}
class Wall extends Rectangle {
	constructor(color, speed = 3) {
		super(600, 0, 0, 0);
		this.color = color;
		this.speed = speed
		this.x = 550;
		this.w = 70 + Math.random() * 30;
		this.y = Math.random()* 370;
		this.h = 20;
	}
	slide() {
		super.translate(-this.speed, 0);	// x축으로만 이동함
	}
}
class User extends Rectangle {
	constructor() {
		super(6, 370, 24,24);
	}
	fly() {
		super.translate(0, -8); 	// y축으로만 움직임
		if(this.y < 0) {
			this.y = 0; 
		}
	}
	fall() {
		super.translate(0, 14);
		if(this.y > 370) {
			this.y = 370;
		}
	}
}

/* 세로로 긴 장애물 만드는건데.... 망함
class Wall extends Rectangle {
	constructor(color, speed = 3) {
		super(600, 0, 0, 0);
		this.color = color;
		this.speed = speed
		this.w = 10 * (Math.random()*3+1); 
		this.y = Math.random()	* 300;
		if(this.y < 40){
			this.h = 400 - this.y - 20;
		}else {
			this.h = 400 - this.y - 20;
		}
	}
	slide() {
		super.translate(-this.speed, 0);	// x축으로만 이동함
	}
}
 */ 