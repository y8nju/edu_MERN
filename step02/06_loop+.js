/* 
    vip 1 👉 2(10000)
    vip 2 👉 3(40000)
    vip 3 👉 4(90000)
    vip 4 👉 5(160000)
    ....
    vip 9 👉 10(810000)
 */

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