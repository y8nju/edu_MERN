/*
    비교연산을 진행하면 데이터가 어떤 상태가 맞는지를 확인할 수 있다

    상태체크 
    &&(and): 조건 여러개를 전부 다 만족하는 상태인지
    ||(or): 조건 여러개 중 하나라도 만족하는 상태인지
*/

let value = 31;
// value가 가진 number가 10 이상인 정수인지 확인?
console.log(value >= 10); // true
// value가 가진 number가 정수인지?
console.log(value % 1 === 0); //true

// 10 이상의 정수가 맞는지를 체크하려면?
// 저 위의 두 상태가 ture여야함

console.log(value >= 10 && value % 1 === 0) // ture


let input = 'y';

// input이 가진 텍스트가 y인지 확인

console.log(input === 'y'); // true
console.log(input ==='Y'); // false
console.log(input === 'Yes'); // false

console.log(input === 'y' || input === 'Y') // ture
console.log(input === 'y' || input === 'Y' || input === 'Yes') // ture
console.log(input === 'y' || 'Y' || 'Yes') // ture 좋지 않은 코드이므로 사용하지 말 것
console.log(input === ('y' || 'Y' || 'Yes')) // ture 좋지 않은 코드이므로 사용하지 말 것



const r = require("readline-sync");

/* let i = r.question('input number(1~10)?');
// i의 상태가 1~10 사이에 있는지 확인
console.log(`i? ${i}`);
console.log(1 < i && i < 10);
*/ 


let age = r.question('your age?');
console. log(age)
let from = r.question('where are u from? (ex.kor, jpn, usa)');
console. log(from)

// 19세 이상이며, kor 출신인지(kor, KOR)

console.log(age > 19 && (from === 'kor' || from === 'KOR'));

// from !== 'kor' && from !== 'KOR'
console.log(!(from === 'kor' || from === 'KOR'));

