/* 
	RegExp(Reqular Expression 정규표현식0)
	문자열의 패턴을 표현하기 위한 형식
	RegExp 생성자는 패턴을 사용해 텍스트를 판별할 때 사용합니다.
	
	이 패턴정의를 통해서 패턴에 맞는 부분만을 추출하거나
	패턴에 부합하는지 등을 체크할 수 있다
*/
const str = 'apple\nbanana' // 이스케이프 시퀀스
console.log(str);

const pattern = new RegExp('\\d{3}-\\d{4}-\\d{4}');
console.log('\\d{3}-\\d{4}-\\d{4}');
console.log('\d{3}-\d{4}-\d{4}')

console.log(pattern.test('010-4614-8225')); // true
console.log(pattern.test('010-8009-0249')); // true
console.log(pattern.test('062-451-9999')); // false
console.log(pattern.test('010-2979-5856')); // true

// 정규표현식 객체같은 경우 생성자 함수를 통해서 보다는 리터럴 방식으로 생성해서 사용한다

const tel =/\d{3}-\d{4}-\d{4}/;
//  /이 안에 표기한 내용은 정규표현식으로 인식한다/
console.log(tel, typeof tel)	// /\d{3}-\d{4}-\d{4}/ object

console.log(tel.test('010-4614-8225')); // true
console.log(tel.test('010-8009-0249')); // true
console.log(tel.test('062-451-9999')); // false
