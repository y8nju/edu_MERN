/* 
	정규 표현식 생성
	/ 패턴 /플래그(옵션 i, g, m, y, u)

	패턴 정의를 할 때 ^(시작) $(끝) 를 표기할 수 있는데
	/^ / startWith와 같은 효과

	https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions
	https://opentutorials.org/course/50/43
*/

const target = 'Javascript is very comfortable language';

// const ptrn1 = /java/;
// let rst1 = ptrn1.test(target); //패턴을 검색해서 해당 패턴의 유무를 true, false로 알려줌
// console.log(rst1)	// false

// const ptrn2 = /very/;
// let rst2 = ptrn2.test(target);
// console.log(rst2);	// true
// console.log(target.match(ptrn2));	// 타겟 문자열이 있는 지 확인
// // [
// // 	'very',
// // 	index: 14,
// // 	input: 'Javascript is very comfortable language',
// // 	groups: undefined
// //]

const ptrn3 = /^Java/;	// very로 시작하니?
console.log(target.match(ptrn3));	// null