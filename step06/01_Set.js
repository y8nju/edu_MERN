/* 
	Set객체(집합)
		배열과 유사한 객체이지만 중복값 저정안하고, 요소 인덱스에 의미가 없음
		객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있다
*/
/* 
	접속자 IP를 저장해서 통계내기
*/
const user = []
	user.push('192.168.4.22');
	user.push('192.168.4.21');
	user.push('192.168.4.22');
	user.push('192.168.4.13');
	user.push('192.168.4.71');
	//.......
// 중복되지 않은 ip 확인
const unique = [];
user.forEach(function(ip) {
	if(!unique.includes(ip)) {
		unique.push(ip);
	}
});
console.log(unique);

let s = new Set(user);
console.log(s)
/* Set(4) {
	'192.168.4.22',
	'192.168.4.21',
	'192.168.4.13',
	'192.168.4.71'
} */
console.log(s.length)	// undefined 인덱스가 없음

s.add('192.168.4.4');	// add 추가, 중복 데이터는 추가되지 않는다
console.log(s)

