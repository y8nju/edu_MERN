/* 
    for loop는 일정 범위의 수를 사용해야하는 상황에도 용이
 */

let target = 3;
for(let val=1; val<=9; val++) {
    console.log(`${target} X ${val} = ${target*val}`);
}
// 3 X 1 = 3
// 3 X 2 = 6
// 3 X 3 = 9
// 3 X 4 = 12
// 3 X 5 = 15
// 3 X 6 = 18
// 3 X 7 = 21
// 3 X 8 = 24
// 3 X 9 = 27

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
    console.log(`${vip}**2 = ${vip**2}`)
    let exp = vip**2 * 10000;
    total +=exp;
    console.log(`${vip}가 되기 위한 누적 금액: ${total}`)
}
