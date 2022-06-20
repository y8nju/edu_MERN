/*
	function 설계 시 매개변수 부분에 rest parameter를 설정할 수 있다
	맨 마지막에만 가능
		// (num, ...params) 가능
		// (...args, m) 불가능
*/
// function err(...args, m) { }

function test(num, ...params) {	//...을 쓰면 매개변수를 배열로 받을 수 있다
	// (num, ...params) // num은 따로 빠지고, ...params는 배열로
	console.log(num);	// 3 
	console.log(Array.isArray(params), params);	// true	[ 4, 5, 6 ]
}
test(3, 4, 5, 6)