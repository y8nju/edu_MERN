/* 
	# static method
		* Array.isArray ==> true
			확보된 데이터가 배열인지 아닌지 체크
*/

Array.isArray([]);
console.log(Array.isArray([])); //true
Array.isArray({});
console.log(Array.isArray({})); // false
console.log([] instanceof Array);   // 34true
console.log(3 instanceof Array);    // false

/* 
	# method
		배열 객체를 만들었을 때 가지고 있는 기능들
			* indexOf
				특정 요소의 위치를 찾아주는 요소, 
				첫번째로 검색된 요소의 인덱스 반환(없으면 -1)
			* lastIndexOf
				마지막 인덱스 부터 검색된 요소의 인덱스 반환(없으면 -1)

*/

const arr = [1, 32, 4, 51, 3, 4, 1];
console.log(arr.indexOf(1));    // 1
console.log(arr.indexOf(94));    // -1
console.log(arr.lastIndexOf(4));	// 5

// * includes
	// 특정요소를 가지고 있는지 확인 (true, false)
console.log(arr.includes(32))	//true

// * push, pop (원본 배열에 변화, stack)
// stack(LIFO 구조, 후입선출)이라는 자료구조가 필요할 수 있기에 Array에 구현시켜둠
// * push
	// 마지막 요소 뒤에 새로운 요소 추가
	arr.push(99);
	// arr[arr.length] = 99 //  와 동일
	// console.log(arr)	//[	1, 32, 4, 51, 3,  4, 1, 99 ]

	// * JSON.stringify(배열명)
		// 객체의 성질이 드러나는 문자열로 반환해 줌
	console.log(JSON.stringify(arr), arr.length);	// [1,32,4,51,3,4,1,99], 8
	// console.log(typeof JSON.stringify(arr));	// string
// * pop
	// 맨 마지막 데이터 제거
let v = arr.pop();
console.log(JSON.stringify(arr), arr.length);	// [1,32,4,51,3,4,1] 7