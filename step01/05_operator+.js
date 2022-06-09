
let time = 127;

console.log(time / 15); // 8.466666666666667
console.log(time % 15); // 7

// time을 15로 나누었을 때 몫 구하기
console.log((time - time % 15) / 15);
console.log(Math.floor((time / 15)));