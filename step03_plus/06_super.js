class Base {
	constructor(data) {
		console.log('base...' + data);
	}
}
/* 
	extends 하여 설계한 객체를 생성하면 무조건 원본객체를 만드는 코드가 들어가야 한다
	만약 적지 않으면 defult로 아래와 같은 코드가 추가된다
 */
class Dervied extends Base {
	/* 
	// 기본 형태
	constructor(...args) {
		super(...args); //super() 메소드는 부모 클래스의 생성자를 호출할 때 사용된다
	}
	 */
	constructor(number) {
		super();
		this.number = number;
	}
   
}
new Dervied('Text')	// base... Text