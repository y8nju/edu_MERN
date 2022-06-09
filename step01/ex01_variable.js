const readline = require('readline-sync');

let userName = readline.question('guest name?');
console.log(userName + ' 😀');

let adultNum = readline.question('How many adults?');
// adultNum = Number(adultNum);
console.log(adultNum);

let kidNum = readline.question('How many kids?');
// kidNum = Number(kidNum);
console.log(kidNum);

// console.log(`${userName}(으)로 성인 ${adultNum}명, 아동 ${kidNum}명 예약 완료`)
// // console.log((adultNum + kidNum));
// console.log("Total:" + (adultNum*1 + kidNum*1));

//값은 문자열



// 성인: 14000, 아동: 9000
// 총 이용금액.... / 예약금(10%)


let totalPrice = adultNum * 14000 + kidNum * 9000;
let deposit = totalPrice / 1 0
console.log(`총 이용금액: ${totalPrice} / 예약금: ${deposit}`);
let yn = readline.keyInYN("confirm? ");
console.log(`yn? ${yn}`);