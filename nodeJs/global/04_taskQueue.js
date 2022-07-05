/* 

*/

setTimeout(() => {
	console.log('setTimeout');
}, 0);
setImmediate(() => {
	console.log('setImmediate');
});

process.nextTick(() => {
	console.log('nextTick');	// 맨 처음 동작함
});	// process.nextTick 은 마이크로 태스크 큐를 이용한다
// 마이크로 태스크 큐는 태스크 큐보다 우선 순위가 높다