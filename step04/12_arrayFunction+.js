function Person(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
}

const student = [ 
	new Person('감혜빈', 27, '남'), 
	new Person('공병구', 30, '남'), 
	new Person('정상춘', 29, '남'), 
	new Person('최윤주', 34, '여'),
	new Person('윤형호', 42,), 
	new Person('최현', 27, '남'),
	// undefined,
	new Person('이성훈', 30, '남')
];

// console.log(student);

// filter로 30대만 추출
// let age30 = student.filter(num => num.age >= 30 && num.age < 40 && num.age != undefined);
// let age30 = student.filter(function(num) {
// 	if(num.age >= 30 && num.age < 40 && num.age != undefined) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// })
let age30 = student.filter(function(val, inx, arr){
	// console.log(arr === student);
	return val?.age >= 30 && val?.age <40;
})
// sort와 reverse를 이용해서 나이순으로 내림정렬
// age30.sort((a, b) => a.age - b.age).reverse();

console.log(age30);
let anss = student.sort(function(one, other) {
	if(one?.age != other?.age) {
		return one?.age - other?.age;
	}else {
		return one?.name.localeCompare(other?.name);
	}
})
anss.reverse();
console.log(anss);
