/*
변수 사용 시 주의점

1. 이름으로 사용되는 것은 룰이 있다
	- 숫자로 시작 불가
	- 영문, $, _로 시작 가능
	- 프로그래밍 적으로 이미 사용되고 있는 예약어들은 사용불가
	- 공백 포함 불가
	- 대소문자는 구분됨
*/


let aa;
// let try;

let name = "Apple";
let nAme = '사과';

console.log(name, nAme);
/* 
	0. 식별자(=이름)은 소문자로 시작하는 걸 권장
	1. 식별자(=이름)는 이왕이면 목적이 드러낼 수 있도록 작명
	2. 식별자 작명은 camelCase를 따르는 걸 권장한다
*/
// let countofclass = 17;
let countOfClass = 17;