/* 
	RegExp 객체를 통해서 
	test, exec 로 string을 체크해봄
	exec(String match와 같음)

	이번에는 String객체에서 regexp를 요구하는 function에 대해 알아보자
*/

let data = '<script>alret();</script>';


//replace(변경할 데이터, 변경 될 데이터) 첫번째 요소만 바꿈
let cvt = data.replace('<', '&lt;');
console.log(cvt)	// &lt;script>alret();</script>
data.replace(/</, '&lt;');	// &lt;script>alret();</script>

// g플래그(모든 데이터)
console.log(data.replace(/</g, '&lt;'))	// &lt;script>alret();&lt;/script>
console.log(data.replaceAll('>', '&gt;'))	// <script&gt;alret();</script&gt;

let arr = data.match(/</)
// [
// 	'<',
// 	index: 0,
// 	input: '<script>alret();</script>',
// 	groups: undefined
// ]
console.log(arr)
arr = data.match(/</g)
console.log(arr)	// [ '<', '<' ]

//split() 쪼개는 역할
let beuty = '감혜빈|공병구,정상춘^최윤주'
let barr = beuty.split('|')
console.log(barr)	// [ '감혜빈', '공병구,정상춘^최윤주' ]
let carr = beuty.split(/[\|,\^]/);
console.log(carr);	// [ '감혜빈', '공병구', '정상춘', '최윤주' ]/

let txt = '우리     모두..........        몹시 피곤하다.';
console.log(txt.split(/\s+/));	// [ '우리', '모두..........', '몹시', '피곤하다.' ]