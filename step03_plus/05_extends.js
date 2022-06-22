/* 
	비슷한 유형의 객체가 있을 때 생성자 함수 패턴일 때는
	protorype 변경하므로써 설계하였는데
	class 패턴에서는 extends를 이용해서 설계한다
*/

class Block {
	constructor(width, height) {
		console.log('Block constructor')
		this.width = width;
		this.height = height;
	}
	slide() {

	}
}
class  User extends Block {
	slide() {	// 오버라이드
		console.log('User. slide')
	}
}

class Monser extends Block {
	constructor(w, h) {
	}
	jump() {

	}
}

const u = new User();
u.slide();	// User. slide
const m = new Monser(100, 20);
console.log(m)	// Monser { width: 100, height: 20 }
m.slide();
m.jump();