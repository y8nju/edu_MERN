const arr = [
    ['사과', '바나나', '배'],
    ['배', '수박'],
    ['바나나', '수박', '사과'],
    ['사과', '배', '수박'],
    ['사과']
]

// console.log(arr[1]);
// const sub = arr[1];
// console.log(sub[0]);
// console.log(arr[1][0]);

// for(let i = 0; i<arr.length; i++) {
//     console.log(arr[i]);
//     console.log(arr[i][2]);
// }

// 배열 중에 첫번째[index가 0]가 사과로 시작하는 배열의 수를 찾자

let cnt = 0;
for(let i =0; i < arr.length; i++) {
    if(arr[i][0] === '사과') {
        cnt++
    }
}
console.log(cnt);

console.log('============================');

// 요소를 3개 이상 가지고 있는 배열의 갯수
cnt = 0;
for(let i = 0; i < arr.length; i++) {
    // console.log(arr[i].length);
    if(arr[i].length >= 3) {
        cnt++
    }
}
console.log(cnt);

console.log('============================');

// 맨 마지막 요소가 수박을 가지고 있는 배열의 갯수 카운팅
cnt = 0;
for(let i =0; i < arr.length; i++) {
    let each = arr[i];
    let last = each.length-1;
    if(each[last] === '수박') {
        cnt++
    }
}
console.log(cnt);