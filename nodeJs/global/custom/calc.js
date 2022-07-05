/* 
	자바스크립트 자체는 다른 언어와 다르게 모듈화라는 정식 문법이 없기에
	노드에서는 자바스크립트 개발자 진영에서 널리 사용되던 CommonJS라는 것을 채용해서 적용 시켰다
*/
function add(...a) {
	return a.reduce((a, b) => a + b, 0);
}
function multifly(...a) {
	return a.reduce((a, b) => a * b, 1);
}

// console.log(module.exports);

// module.exports.add = add;
// module.exports.multifly = multifly;

// module. 를 굳이 사용하지 않아도 된다
exports.add = add;
exports.multifly = multifly;

console.log(exports === module.exports);	// true