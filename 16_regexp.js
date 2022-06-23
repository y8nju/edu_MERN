let diary = ` 아침 5:10 에 일어났더니 하루가 피곤하다.
밥을 먹고 8시 5분에 회사로   출근하였다. 9:00 가 되가는데
아무도 오지 않았다. 그래서 오전내내 멍 때리다 12시30분에 집에 갔다.`;


let rst = diary.match(/\d{1,2}[:시]\s?\d{1,2}분?/g) // [ '5:10', '8시 5분', '9:00', '12시30분' ]
console.log(rst)

console.log(diary.match(/\d{1,2}(:|h|hour|시)\s?[0-5]?\d분?/g)) // [ '5:10', '8시 5분', '9:00', '12시30분' ]

console.log(diary.match(/(0?\d|1[\d]|2[1-3])(:|h|hour|시)\s?[0-5]?\d분?/g))    // [ '5:10', '8시 5분', '9:00', '12시30분' ]