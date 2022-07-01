function create() {
	return new Promise((resolve, reject) => {
		console.log('executed');
		let val = Math.floor(Math.random()*100);	// 랜덤값을 만들어내는 promise
		return resolve(val);
		// resolve('👏');
	});
}
create().then((data) => {
	console.log(data);
	return data;
	// then의 return 값은 promise, 
	// 일반 value를 리턴 시키면 resolve가 됐다고 판단
	// promise를 만들어서 return 해도 된다
		// return create();
}).then((recv) => console.log(recv));

/* 
const p = create(); // executed
console.log(p); // Promise { <pending> }
// pending 👉 진행 중인 상태
// Promise { '👏' }	// resolve 로 콜을 하면 진행할 수 있는 상태로 바뀌게 된다

let rst = create().then((data) => {
	console.log('data', data)
	return "RESULT";	// 진행 중인 promise의 resolve를 사용하면서 리턴값이 전달 됨
	// resolve(result);
}).then((data) => console.log('data2', data));

console.log(`rst 👉 ${rst}`); // rst 👉 [object Promise] data 👏
												// data2 RESULT
 */