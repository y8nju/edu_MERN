// number data
// +, -: (양수 음수) 부호
let num = 3;
console.log(+num);
console.log(-num);
console.log(-(-num));

let str = '7204800';
console.log(+str);
console.log(typeof (+str)); // number
// 숫자로 구성된 문자열 앞에 +를 붙이면 숫자열로 타입 변환
console.log( +true ); // 1
//ttue => 1
// false => 0

let str2 = '062-720-4800';
console.log(+str2); // NaN
console.log(typeof (+str2)); // number

// 사칙연산 (+, -, *, /, %, **)
let win = 97;
let lose = 4;

console.log(`${win}승 ${lose}패 / 승률 : ${97/(win+lose)*100}%`);

console.log(`win + lose = ${win + lose}`); // win + lose = 101
console.log(`win - lose = ${win - lose}`); // win - lose = 93
console.log(`win * lose = ${win * lose}`); // win * lose = 388
console.log(`win / lose = ${win / lose}`); // win / lose = 24.25
console.log(`win % lose = ${win % lose}`); // win % lose = 1
console.log(`win ** lose = ${win ** lose}`); // win ** lose = 88529281
console.log(`win ** false = ${win ** false}`); // win ** false = 1
console.log(win ** true === win); // true
// % 나머지 
// ** 제곱


let q = 2;
console.log(q + q * q); //6
console.log((q + q) * q); //8