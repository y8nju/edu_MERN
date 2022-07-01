function delayLog(txt, time) {
	return new Promise((resolve, reject) => {
		if(time < 0) {
			// reject('시간은 음수 사용 불가🤨')
			throw new Error();
		} else {
			setTimeout(()=> {
				console.log(txt);
				resolve();
			}, time);
		}
	});
}
// ====================================
delayLog('작업시작', -1)
	.then(()=> delayLog('STEP 1', 1000))
	.then(()=> delayLog('STEP 2', 2000))
	.then(()=> delayLog('END👏', 4000))
	.then(()=> console.log('======================'))
	.catch((err)=> console.log(err));	// error나 reject가 발생하게 되면 
	// Promise 작업에서 Reject를 호출하거나
	// 의도치 않은 Error가 발생하게 되도 catch는 작동을 함

console.log("!!!!!!!!!!!!");