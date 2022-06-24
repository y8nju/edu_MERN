/* 
	데이터 key - value 형태로 관리 [key, value]
	let map = new Map( [ [], [], [] ] ) // 이중 배열 형태
*/
new Map();  // empty 상태의 map
// 배열을 통해 미리 데이터 설정이 가능
// 값을 배열로 [key, value]
let map = new Map([['apple', '사과'], ['grape', '사과']]);
console.log(map, map.size); // Map(2) { 'apple' => '사과', 'grape' => '사과' } 2
map.set('apple', '능금');   // key가 동일하면, 데이터를 변경
console.log(map, map.size); // Map(2) { 'apple' => '능금', 'grape' => '사과' } 2

// 요소를 취득 get
// key가 존재하지 않으면 undefined
console.log(map.get('apple'));  // 능금
console.log(map.get('can'));    // undefined

// has
// has(key) 👉boolean
console.log(map.has('apple'));  // true

// delete(key) 👉 boolean
map.delete('help');
console.log(map.delete('help')) // false

// clear() 일괄삭제
	// map.clear();


map.set('QnA', '/qna/index.ejs');
map.set('article', '/article/list.ejs');

// 전체 데이터 순회
map.forEach(function(val, key, map){
	console.log(`${key} 👉 ${val}`);
	if(val === '능금') {
		map.delete(key);
	}
});

// ===========================================
// WeakSet, WeakMap도 있다
// Set, Map과  function은 같고, 기능도 같다