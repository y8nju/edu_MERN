/*
    레벨 구간은 06_loop+.js를 참고한다
*/
/*
 let vip;
 let total = 0;
 for(vip=1; vip <=9; vip++) {
     let exp = vip**2 * 10000;
     total +=exp;
     // console.log(`${vip}👉${vip +1} : ${exp}`)
     console.log(`${vip}가 되기 위한 누적 금액: ${total}`)
 }
 */

const read = require('readline-sync');

let input;

let lv1 = 10000;
let lv2 = 50000;
let lv3 = 140000;
let lv4 = 300000;
let lv5 = 550000;
let lv6 = 910000;
let lv7 = 1400000;
let lv8 = 2040000;
let lv9 = 2850000;

while(input !== -1) {
    input = read.keyInSelect (['Lv Cut', 'Your Lv']);

    switch(input) {
        case 0:
            // Lv Cut
            // 해당 레벨까지 올라가는데 필요한 경험치?
            let lv = read.question('Input Leve About: ');
            if(lv == 1) {
              console.log(`Lv1까지 필요한 금액은 ${lv1}원입니다`)
            } else if(lv == 2) {
              console.log(`Lv2까지 필요한 금액은 ${lv2}원입니다`)
            } else if(lv == 3) {
              console.log(`Lv3까지 필요한 금액은 ${lv3}원입니다`)
            } else if(lv == 4) {
              console.log(`Lv4까지 필요한 금액은 ${lv4}원입니다`)
            } else if(lv == 5) {
              console.log(`Lv5까지 필요한 금액은 ${lv5}원입니다`)
            } else if(lv == 6) {
              console.log(`Lv6까지 필요한 금액은 ${lv6}원입니다`)
            } else if(lv == 7) {
              console.log(`Lv7까지 필요한 금액은 ${lv7}원입니다`)
            } else if(lv == 8) {
              console.log(`Lv8까지 필요한 금액은 ${lv8}원입니다`)
            } else if(lv == 9) {
              console.log(`Lv9까지 필요한 금액은 ${lv9}원입니다`)
            }
            break;
        case 1:
            let yourExp = read.question('Input Your Total Exp: ');
            // 현재 레벨과 다음 레벨까지 남은 경험치?
            let need;
            if(yourExp < lv1) {
              need = lv1 - yourExp
              console.log(`당신은 lv0입니다. Lv1까지 ${need}원이 필요합니다`)
            } else if(yourExp < lv2) {
              need = lv2 - yourExp
              console.log(`당신은 lv1입니다. Lv2까지 ${need}원이 필요합니다`)
            } else if(yourExp < lv3) {
              need = lv3 - yourExp
              console.log(`당신은 lv2입니다. Lv3까지 ${need}원이 필요합니다`)
            } else if(yourExp < lv4) {
              need = lv4 - yourExp
              console.log(`당신은 lv3입니다. Lv4까지 ${need}원이 필요합니다`)
            } else if(yourExp < lv5) {
              need = lv5 - yourExp
              console.log(`당신은 lv4입니다. Lv5까지 ${need}원이 필요합니다`)
            } else if(yourExp < lv6) {
              need = lv6 - yourExp
              console.log(`당신은 lv5입니다. Lv6까지 ${need}원이 필요합니다`)
            } else if(yourExp < lv7) {
              need = lv7 - yourExp
              console.log(`당신은 lv6입니다. Lv7까지 ${need}원이 필요합니다`)
            } else if(yourExp < lv8) {
              need = lv8 - yourExp
              console.log(`당신은 lv7입니다. Lv8까지 ${need}원이 필요합니다`)
            } else if(yourExp < lv9) {
              need = lv9 - yourExp
              console.log(`당신은 lv8입니다. Lv9까지 ${need}원이 필요합니다`)
            }
    }
}
