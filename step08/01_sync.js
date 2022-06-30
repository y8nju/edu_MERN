/*
	일반적으로 함수를 호출하면 자동적으로 차례대로 진행하게 된다
	*/
function subTest() {
	console.log('subTest');
}
function test1() {
	console.log('test1');
}
function test2() {
	subTest();
	console.log('test2');
}
test2();
test1();

// 콜스택은 하나이기 때문에 동시에 여러 태스크(작업)을 진행 할 수 없다