/* 
객체 리터럴 작성
    product: Coffee,
    price: 300, 
    ammount: 32
    주의. 프로퍼티 간에는 콤마(,)를, 
    프로퍼티 값 설정 시 콜론(:)를 사용한다
*/

let coffee = {
    product: 'Coffee',
    price: 300,
    ammount: 32
};
// 변수에 담기는 값은 객체를 접근할 수 있는 값이 들어감

let coffee2 = coffee;
console.log(coffee2.price); // 300

coffee2.price += 100;
console.log(coffee2.price); // 400
console.log(coffee.price); // 400
// 변수일 때와는 다르게 객체는 값이 변경이 된다
// 변수는 객체를 접근하는 이름으로 작동할 뿐

console.log(coffee.kcal); // undefined

coffee.kcal = 20.4 // kcal 프로퍼티 추가
console.log(coffee.kcal); // undefined

delete coffee.ammount; // ammount 프로퍼티 삭제
console.log(coffee.ammount); // undefined