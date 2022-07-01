/* 
	async / await (ES8)
		Promise를 좀 더 편하게 쓸 수 있도록 도입된 문법

	async Fn 안에서는 await 를 쓸 수 있다
*/

async function todo() {
	// await 키워드로 호출되는 작업이 만약 Promise 라면, 
	// 완료되기를 기다렸다가 resolve값을 return
	let val = await Math.random();
	console.log(val)
	return { id : 'aru', name : '최윤주' };
}
todo().then((rst) => {
	console.log(rst.id, rst.name);
});
/* 
	return new Promise( (resolve, reject) => {
		resolve( { id : 'aru', name : '최윤주' } );
	} )
*/
// let t = todo();
// console.log(t)	// Promise { { id: 'aru', name: '최윤주' } }

// async의 return 값은 Promise