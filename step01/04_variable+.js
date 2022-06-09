/*
let x = 30;
let y = x;

console.log (`x = ${x}, y = ${y}`); // x = 30, y = 30

x = 100;
console.log (`x = ${x}, y = ${y}`); // x = 100, y = 30
*/

let radius = 5;
let areaOfCircle = (radius ** 2) * 3.1415;

console.log(`areaOfCircle = ${areaOfCircle}`); // areaOfCircle = 78.53750000000001

radius = 7;
// radius 값을 바꾼다고 해도 areaOfCircle의 값이 바뀌진 않는다
console.log(`areaOfCircle = ${areaOfCircle}`); // areaOfCircle = 78.53750000000001

