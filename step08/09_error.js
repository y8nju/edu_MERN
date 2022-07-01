/* 
	에러는 프로그램이 가동 중에 예기치 않게 발생하게 되는데, 
	이걸 의도적으로 일으킬 수도 있다
	에러도 객체
*/

const r = new Error("🤨");
// if(Math.random() > 0.5) {
// 	throw r;
// }else {
// 	console.log('😀')
// }

try {
	if(Math.random() > 0.5) {
		throw r;
	}
} catch(err) {
	console.log(err.message);
}