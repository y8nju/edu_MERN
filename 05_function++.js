/* 
	callback(콜백)함수
		매개변수로 넘겨서 사용시킬 목적으로 설계
		매개변수로 함수를 전달 받는 것이 가능하다
*/

function noticeTypeA(msg) {
	console.log('[공지]' + msg);
}
function noticeTypeB(msg) {
	console.log('#공지#' + msg);
}

function todayNotice(fntype, msg) {
	for(let cnt = 1; cnt<2; cnt++) {
		fntype(msg) // fntype은 function을 실행시켜주는 function이 된다
	}
}
todayNotice(noticeTypeA, '날씨쌀쌀조심') //[공지]날씨쌀쌀조심

/* 
noticeTypeA('우산챙기세요');
noticeTypeB('우산챙기세요');

let todayNotice = Math.random() > 0.5 ? noticeTypeA : noticeTypeB;
todayNotice('겉옷필수');
 */