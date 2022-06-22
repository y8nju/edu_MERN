/* 
	substring, slice
	기능은 동일하나, 인자설정이 다르다
	문자열 추출로, 원본 string을 토대로 새로운 string(원본 변화 x)
	start, end 를 설정해서 사용
	slice는 음수설정을 하게 되면, 뒤어서부터 잘라낸다
*/

let txt = '자바스크립트의 문자열'
let s1 = txt.substring(1, 5);	// 1번에서 시작해서 5번에서 끝
let s2 = txt.slice(1, 5);	// 1번에서 시작해서 5번에서 끝
console.log(s1);	// 바스크립 
console.log(s2);	// 바스크립

console.log(txt.substring(-3));	// 자바스크립트의 문자열
console.log(txt.slice(-3));	// 문자열


// ........

// toUpperCase, toLowerCase (영문에만 적용)
console.log('Abdfddsdfdf'.toUpperCase());	// ABDFDDSDFDF
let mode = 'y';
mode.toUpperCase() === 'Y'

// trim
// 시작과 끝부분의 공백 문자를 제거한 string 생성(중간 공백 제외)
let id = ' 89aruc@gamil.com    ';
console.log('[' + id +']');
console.log('[' + id.trim() +']');
//trimStart, trimEnd
console.log('[' + id.trimStart() +']');	// [89aruc@gamil.com    ]
console.log('[' + id.trimEnd() +']');	// [ 89aruc@gamil.com]