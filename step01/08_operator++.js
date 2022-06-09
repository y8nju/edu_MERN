/* 
    !(논리부정 / number의 - 같은효과)
 */

console.log(!true); // false
console.log(!false); // true


let target = 100;
console.log(target > 10); // true
console.log(!(target > 10)); // false: target <= 10
console.log(!(!3)); // true