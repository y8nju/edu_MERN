/* 
	Map 객체는 {} 객체와 비슷한 유사한 객체이다
	key - value 형태로 데이터를 관리하기 위해 만들어진 객체이다
	set(key, value)
	get(key) 👉 value
	size
*/

// 객체
const obj = {};
obj.apple = {spell: 'apple', mean: '사과', type: 'n'};
obj.do = {spell: 'do', mean: '하다', type: 'v'};
console.log(obj);
/* {
apple: { spell: 'apple', mean: '사과', type: 'n' },
do: { spell: 'do', mean: '하다', type: 'v' }
} */

// Map
const dictionary = new Map();
dictionary.set('apple', {spell: 'apple', mean: '사과', type: 'n'});
dictionary.set('do', {spell: 'do', mean: '하다', type: 'v'});
console.log(dictionary);
/* Map(2) {
	'apple' => { spell: 'apple', mean: '사과', type: 'n' },
	'do' => { spell: 'do', mean: '하다', type: 'v' }
} */
console.log(dictionary.size);	// 2

let rst = dictionary.get('apple');
console.log(rst);	// { spell: 'apple', mean: '사과', type: 'n' }
