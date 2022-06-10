/* 

    레벨 구간은 06_loop+.js를 참고한다

 */

/* 
    vip 1 👉 2(10000)
    vip 2 👉 3(40000)
    vip 3 👉 4(90000)
    vip 4 👉 5(160000)
    ....
    vip 9 👉 10(810000)
 */
/* 
for(let vip=1; vip <=9; vip++) {
    let exp = vip**2 * 10000;
    console.log(`${vip}👉${vip +1} : ${exp}`)
}


// vip 5가 되기 위한 누적 금액

let total =0;
for(let vip=1; vip <=5; vip++ ) {
    let exp = vip**2 * 10000;
    total +=exp;
    console.log(`${vip}가 되기 위한 누적 금액: ${total}`)
}
 */
const read = require('readline-sync');

let input;

while(input !== -1) {
    input = read.keyInSelect (['Lv Cut', 'Your Lv']);

    switch(input) {
        case 0:
            // Lv Cut
            let lv = read.question('Input Leve About: ')
            // 해당 레벨까지 올라가는데 필요한 경험치?
            break;
        case 1:
            let yourExp = read.question('Input Your Total Exp: ')
            // 현재 레벨과 다음 레벨까지 남은 경험치?
    }
}
