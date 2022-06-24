/* 
	정규 표현식 생성
	/ 패턴 /플래그(옵션 i, g, m, y, u)

	패턴 정의를 할 때 ^(시작) $(끝) 를 표기할 수 있는데
	/^ / startWith와 같은 효과

	https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions
	https://opentutorials.org/course/50/43
*/

const target1 = 'Javascript';
// const target2 = 'Typescript';
const target2 = 'Tavascript';
const target3 = 'JAVA';
const target4 = 'ECMAScript';
const target5 = 'ScriptEngine';

//	/[]/ [대괄호 안에 쓴 문자 중 하나라도 맞으면 된다] or 같은  
console.log(/^[JjTt]ava/.test(target1));	// true
console.log(/^[JjTt]ava/.test(target2));	// true
/* 
// script가 있는지 확인
console.log(/script/.test(target1));	// true
console.log(/script/.test(target2));	// true
console.log(/script/.test(target3));	// 
console.log(/script/.test(target4));	// false
console.log(/script/.test(target5));	// false
 */
/* 
// /script/i i플래그(대소문자를 구분하지 않는다)
console.log(/script/i.test(target1));	// true
console.log(/script/i.test(target2));	// true
console.log(/script/i.test(target3));	// false
console.log(/script/i.test(target4));	// true
console.log(/script/i.test(target5));	// true
 */
/* 
// /^script/	^플래그(첫번째 문자가 일치 하는 지)
console.log(/^script/.test(target1));	// false
console.log(/^script/.test(target2));	// false
console.log(/^script/.test(target3));	// false
console.log(/^script/.test(target4));	// false
console.log(/^script/.test(target5));	// false

console.log(/^script/i.test(target1));	// false
console.log(/^script/i.test(target2));	// false
console.log(/^script/i.test(target3));	// false
console.log(/^script/i.test(target4));	// false
console.log(/^script/i.test(target5));	// true
 */
/* 
// /script$/i $플래그(마지막 문자가 일치 하는 지)
console.log(/script$/i.test(target1));	// true
console.log(/script$/i.test(target2));	// true
console.log(/script$/i.test(target3));	// false
console.log(/script$/i.test(target4));	// true
console.log(/script$/i.test(target5));	// false
 */