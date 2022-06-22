/* 
	array spread
*/

/* 
...을 어디에 어떻게 사용하냐에 따라, Spread Syntax가 될 수도 있고, Rest Syntax가 될 수도 있다
	1.Rest Syntax
		function 정의 하면서 매개변수 부분에 ... 처리는 Rest Parameter
		매개변수로 전달받을 나머지 요소들을 묶어서 배열로 확보한다
	2. Spread Syntax(Spread Operator)
		배열에 ...을 사용하면, 배열을 풀어서 요소를 하나씩 모두 전개한다
*/

let arr = [1, 32, 4, 5];
console.log(...arr);
let brr = [...arr, 1, 3];
console.log(brr)    // [ 1, 32, 4, 5, 1, 3 ]

function test(a,b,c) {
	console.log(`a = ${a}, b = ${b}. c = ${c}`);
}

test(arr); // a = 1,32,4,5, b = undefined. c = undefined
test(...arr);	// a = 1, b = 32. c = 4

// concat과 같은 효과