/* 
	수량에 관련된 패턴
	{n}: n개
	{n,m}: n~m개
	{n,} n개 이상
*/
// 수치형 문자 3글자인지 확인
console.log(/^\d{3}$/.test('456'));	//true 
console.log(/^\d{3}$/.test('7896'));	//false
// 수치형 문자 3-4글자인지 확인
console.log(/^\d{3,4}$/.test('3122'));	//true
// 수치형 문자 3이상 글자인지 확인
console.log(/^\d{3,}$/.test('0627204800'));	//true
/* 
	?: {0,1}
	+: {1,}
	*: {0,} 패턴 반복
 */
const pattern = /^https?:/;	//https가 있을 수도 있고 없을 수도 있다
console.log(pattern.test('http://www.naver.com'));	//true
console.log(pattern.test('https://www.naver.com'));	//true

const kor = /^[가-힣]+$/;	// 문자열이 처음과 끝 전부 한글 구성(가-힣)으로 되어 있는지
console.log(kor.test('유유유'));	// true
console.log(kor.test('Luffy'));	// false
console.log(kor.test('이 솔'));	// false

const kor2 = /^[가-힣]*$/;	// 문자열이 계속 한글로 반복되는지 체크
console.log(kor.test('유유유'));	// true
console.log(kor.test('Luffy'));	// false
console.log(kor.test('이 솔'));	// false

console.log(/^[A-Z].*$/.test('A'));	// ture

// 패턴은 ()로 group을 잡을 수 있다
const email = /^\w+(@\w+\.\w+)?$/;	// 영어로 시작하고 ()안의 내용들이 있거나 없거나 
console.log(email.test('aru@gmail.com'));	// true
console.log(email.test('aru@gmail'));	// false
console.log(email.test('aru'));	// true
console.log(email.test('aru@school.ac.kr'));	// false


/* 
	| or
*/
// \s 공백(스페이스)
console.log(/^([Nn]ew|[Oo]ld)\s+\w+$/.test('new student'));	// true
console.log(/^([Nn]ew|[Oo]ld)\s+\w+$/.test('Newstudent'));	// false
console.log(/^([Nn]ew|[Oo]ld)\s+\w+$/.test('Old         school'));	// true
