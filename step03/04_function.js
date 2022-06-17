/* 
    function을 정의내리는 다른 방법
*/

// 3) arrow function
    // 함수를 간결한 문법으로 이용하여 정의 내리는 형태
    // function(매개변수) { return 식; } 
    // {}의 무
        // (매개변수) => 식; 로 축약해서 사용(return 없어도 됨)
    // {}의 유
        // {} 로 function의 기능부를 설계했다면 return 필요
        //(매개변수) => { return 식; } 
let max = (a, b) => a >= b ? a : b;
console.log(max(11, 2)) // 11

console.log('=========================');

let MAX = function(a, b) {
    return a >= b ? a : b;
}
console.log(MAX(11, 2)) // 11

console.log('=========================');

let countDivisor = (n) => {
    // 약수 갯수 확인
    let cnt = 0;
    for(let val = 1; val <= n; val++) {
        cnt += (n%val == 0);
    }
    return cnt;
};
console.log(countDivisor(15)) // 4

console.log('=========================');


let plus = (n1, n2) => n1 + n2;
plus(2, 3); //4