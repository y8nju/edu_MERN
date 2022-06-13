/* 
function을 설계하는 또 다른 방법
*/
// 4) new Function

let sum = new Function('a', 'b', 'c', 'return a+b+c');
// 마지막 매개변수는 functionBody

console.log(sum(11, 21, 31)); //63

let abs = new Function('target', 'return target > 0? target : -target'); // 절대값
console.log(abs(32)); // 32
console.log(abs(-12)); // 12