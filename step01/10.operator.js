/*
    - 3항연산
    컨디션(조건) ? (값) : (값)
*/

let age = 17;
console.log(age >= 19 ? '성인' : '미성년자'); // 미성년자
// let group = (age >= 19) ? '성인' : '미성년자'

/* 
- null 병합
변수??(값): 변수에 들어있는 데이터가 undefined 혹은 null 이라면, (값)이 발생
*/

let data = 'ES6';
console.log(data??'ECMAScript6') // ES6
// 변수에 설정된 값이 있으면, 변수 값이 출력됨
let data2;
console.log(data2??'ECMAScript6') // ECMAScript
// 변수에 설정된 값이 없으면, 기본 값이 출력됨
// let data2;
// data2 = data2??'ECMAScript6'
// console.log(data2) // ECMAScript

console.log(Boolean("kOR")); // true
console.log( !(!'kor') ); // true

/* 
    -옵셔널 체이닝
    변수?.(값)
    객체 이후에 살펴보기
 */