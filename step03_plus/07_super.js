/* 
	super 라는 키워드는 원본(부모) 객체를 가리키는 값
	super 키워드는 만약 호출을 하게되면 부모(상위) 객체의 constructor를 호출하게 되고, 
		자식(하위)의 constructor에서만 사용할 수 있다 
	super.로 접근하게 되면, 부모객체의 property를 지정해서 사용할 수 있다

*/

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	getIntroduce() {
		return `안녕하세요😀제 이름은 ${this.name}이고, ${this.age}살입니다❗`;
	}
}

class SpecialList extends Person {
	constructor(name, age, ...hobbies) {
		super(name, age);
		console.log(this.name, super.name); // 윤주 undefined
		this.hobbies = hobbies;
	}
	getIntroduce() {
	   return super.getIntroduce() + `취미는 ${this.hobbies.join()} 입니다✨`
	}
}

const a = new SpecialList('윤주', '34', '잠자기', '숨쉬기');
console.log(a.getIntroduce());  // 안녕하세요😀제 이름은 윤주이고, 34살입니다❗취미는 잠자기,숨쉬기 입니다✨