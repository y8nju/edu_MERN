/* 
	배열의 고차함수
		함수를 매개변수로 전달받는 함수
*/
// sort
const nums = [3, 54, 123, 45, 6];

nums.sort();
console.log(nums);	// [ 123, 3, 45, 54, 6 ]
// nums.sort((a, b) => a-b);
	// 위와 같은 결과 출력
	// function compare(a,b) {
	// 	return a-b;
	//  return a > b ? 1 : -1
	// }
	// nums.sort(compare)
console.log(nums);	// [ 3, 6, 45, 54, 123 ]



const products = [
	{id: 3,  name: 'Cola', price: 1200},
	{id: 1, name: 'Juice', price: 800},
	{id: 17, name: 'Tea', price: 300}
]
products.sort(function(a,b) {
	return a.id - b.id;
});
console.log(products);
products.sort((a, b) => a.name - b.name); // string은 안됨
products.sort((a, b) => a.name.localeCompare(b.name)); // string 비교

console.log(products);
