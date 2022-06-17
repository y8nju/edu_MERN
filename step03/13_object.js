/* 
	function은 new를 통해서 호출됐는지, 일반 함수로서 호출됐는지
	내부에서 확인할 수 있다
	(instanceof 혹은 new.target)

	
	*/
	
// 상황에 따라 일반 function으로 호출되더라도 객체가 생성되게 유도할 수 있고, 
let plus = new Function('x', 'y', 'return x+y');
console.log(plus(3, 4));	// 7

let obj = new Object();	// 비어있는 객체 생성
console.log(obj);	// {}

let obj2 = Object();	// 비어있는 객체 생성
console.log(obj2);	// {}
/* 
	new로 사용될 때와 그렇지 않을 때 작업할 일을 다르게 구현하기도 한다
*/


// new 유무의 차이
let v = new Number('33');
console.log(typeof v);	// object

let vv = Number('33');	// 이제까지 +를 붙여서 숫자로 만들었는데, 그 작업을 하는 function
console.log(typeof vv);	// number
