/* 
	()는 그룹의 의미도 있지만, 캡쳐의 의미도 있다
	RegExp exec 혹은 String mathch로 돌렸을 때 그 캡쳐된 부분을
	배열 인덱스로 접근해서 그 부분만 사용가능
	(?:) 이렇게 그룹을 잡으면 Non-capturing froup
	(?<name>): 헤당 name으로 추출(분석용으로 사용)
*/

let prtn = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
let rst = prtn.test('010-2979-5856');
console.log(rst);	// true
rst = prtn.exec('010-2979-5856');
console.log(rst);
// [
// 	'010-2979-5856',
// 	index: 0,
// 	input: '010-2979-5856',
// 	groups: undefined
// ]

let prtn2 = /^01(0|1|[6-9])-(\d{3}|\d{4})-(\d{4})$/;
let rst2 =  prtn2.exec('010-2979-5856');
console.log(rst2[1]);	// 0
console.log(rst2[2]);	// 2979
console.log(rst2[3]);	// 5856

let prtn3 = /^01(?:0|1|[6-9])-(?<tel1>\d{3}|\d{4})-(?<tel2>\d{4})$/;
let rst3 =  prtn3.exec('010-2979-5856');
console.log(rst3);
// [
// 	'010-2979-5856',
// 	'2979',
// 	'5856',
// 	index: 0,
// 	input: '010-2979-5856',
// 	groups: [Object: null prototype] { tel1: '2979', tel2: '5856' }
// ]
console.log(rst3[1]);	// 2979
console.log(rst3[2]);	// 5856
console.log(rst3[3]);	// undefined