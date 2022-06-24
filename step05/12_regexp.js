// https://www.w3schools.com/jsref/jsref_obj_regexp.asp

const data = ['saan', '8king', 'Thief', 'Master-2'];
// 영어로 시작하는지 확인

data.forEach(function(one) {
	// 연속된 데이터는 -(하이픈) 으로 표시할 수 있다
	console.log(one, /^[a-zA-Z]/.test(one));
	// saan true
	// 8king false
	// Thief true
	// Master-2 true
	console.log(one, /^[0-9]/.test(one));
	// saan false
	// 8king true
	// Thief false
	// Master-2 false
})
/* 이 두 집합은 패턴이 잡혀 있다
	//[A-Za-z0-9_]	👉 \w	\W === [^\w]
	/^\W/
	//[0-9]	👉	\d	\D === [^\d]
		[가-힣]
 */

const price = ["1,000" , "42,000"];
price.forEach( (p) => console.log(/^[0-9,]{4, }/.test(p), p) )
price.forEach( (p) => console.log(/^[\d,]{4, }/.test(p), p) )
// 위 아래 동일한 결과 출력됨

console.log('힣'.charCodeAt(0))	// 55203
console.log(String.fromCharCode(55204))	// 힤ᄒᆞᆫ

/* 
	NOT: []안에 ^(서컴플렉스)
*/
// 알파벳 대문자로 시작하지 않는지 체크
console.log(/^[^A-Z]/.test('apple'))	// true
console.log(/^[^A-Z]/.test('Computer'))	// false

/* 
	[] 특정 문자 집합을 표기
	. 아무 문자를 의미
*/

console.log(/^\w..$/.test('c0?'))	//알파벳으로 시작해서 3글자인지	true
