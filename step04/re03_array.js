// [Kill=상대를 죽인 횟수, Death=본인이 죽은 횟수, Assist=남을 죽이는데 도운 횟수]

const score = [
    [10, 5, 1],
    [2, 12, 4],
    [5, 5, 5],
    [12, 3, 6],
    [6, 13, 1]
];
//====================

// kill의 평균
let s = 0;
for(let i = 0; i< score.length; i++) {
    let each = score[i];
    let kill = each[0];
    s += kill;
}
console.log(s/score.length);
//==========================

// 주어진 타겟배열 어시스트보다 더 높은 어시스트값을 가지고 있는 배열이 있는가?
// let i = 3; // 바뀔 수 있다
// let find = false;
// for(let i = 0; i< score.length; i++) {
//     if(i===target) {
//         continue;
//     }
//     if(score[i][2] > score[target][2]) {
//         find = true;
//         break;
//     }
// }
// console.log(find);

//===========================

// 주어진 타겟의 배열보다 뒤쪽에 있는 배열 중에 kill 값이 더 낮은 배열이 있는지
let t = 1; // 가변적인 배열의 index
let find = false;
for(let r = t+1;r < score.length;r++) {
    if(score[t][0] > score[r][0]) {
        find = true;
        break;
    }
}
console.log(find);
