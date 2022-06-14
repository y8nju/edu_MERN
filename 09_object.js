/* 
	객체는 여러개의 변수를 하나로 묶고자 할 때 사용된다
	변수에는 값 뿐만 아니라  function도 저장된다
*/

const calc = {
	diff: (n1, n2) => n1 > n2 ? n1 - n2 : n2 - n1,
	sum: function(n1, n2) {
		return n+2;
	},
	avg(n1, n2) {
		return (n1 + n2) / 2;
	} // avg라는 function으로 property가 등록된다
};

console.log(calc.diff(3, -1)); // 4

calc.divide = (n1, n2) => n1 / n2;
console.log(calc.divide(6, 3)); // 2