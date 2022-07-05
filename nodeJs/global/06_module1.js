/*
	module
	독립된 기능을 갖는 것(함수, 파일)들의 모임
	node에 글로벌로 설정된
	module 이란 객체는 모듈(다른 파일에 정의된 function 등)을 연결시켜주는 객체
*/

// console.dir(module);
console.log(require('./custom/calc.js'));
const calc = require('./custom/calc.js');
let val = calc.add(1234, 5678);
console.log(val);

const {add, multifly} = require('./custom/calc.js');
let val2 = multifly(1,2,3,4);
console.log(val2);
