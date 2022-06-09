/*
	증감은 단위가 1씩 변화
	산술계산기호와 대입기호가 합쳐진 형태의 combined assgine(복합연산)이 있다
*/

let target = 100;

target += 30;
console.log(`target = ${target}`); // target = 130
target = target + 30;
console.log(`target = ${target}`); // target = 160
target -= 10;
console.log(`target = ${target}`); // target = 150
target *= 2;
console.log(`target = ${target}`); // target = 300
target %= 7;
console.log(`target = ${target}`); // target = 6
target **= 2;
console.log(`target = ${target}`); // target = 36
target /= 10;
console.log(`target = ${target}`); // target = 3.6
target %= 1;
console.log(`target = ${target}`); // target = 0.6000000000000001


let degree = 5;
target += degree;
target *= degree;

console.log(10.32 % 0.1);


/* 
	+ (더하기) 가 문자열에서 작동하면?
*/

let txt = "Today is ";
txt += "2022.06.09"
txt += "(Thu)"
console.log(txt); // Today is 2022.06.09(Thu) 
txt -= "(Thu)"
console.log(txt); // NaN