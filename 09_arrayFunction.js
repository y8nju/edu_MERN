/* 
	* join
	배열 사이사이에 구분자를 연결한 문자열 생성(디폴트가 ,)
*/

const data = [11, 3, 5, 67];
let r = data.join('');
console.log(r, data);	// 113567 [ 11, 3, 5, 67 ]

const data2 = ['관우', '장비', '조운', '황충', '마초']
let s = data2.join('-');
console.log(s, data2);	// 관우-장비-조운-황충-마초 [ '관우', '장비', '조운', '황충', '마초' ]

// sort 오름차순 정렬
// data2.sort();
// console.log(data2)	// [ '관우', '마초', '장비', '조운', '황충' ]

// reverse 역정렬
data2.reverse();
console.log(data2);	// [ '황충', '조운', '장비', '마초', '관우' ]

const arr = [101, 32, 11, 3];
arr.sort();	// 내부 요소를 문자열화 해서 크기를 비교한다 
console.log(arr. join('>>'));	// 101>>11>>3>>32

/* 
	* fill
	전부 특정 요소로 채우게 됨 
	인자 설정을 통해 특정 범위의 요소들만 채우는 것도 가능
*/

arr.fill(0);
console.log(arr);	// [ 0, 0, 0, 0 ]

/* 
	* flat
	평탄화
	이중 배열 요소를 하나의 배열로 변경 함(원본 변화 X)
*/

const ar = [[1,2,3,4], [5,6,7,8]];
console.log(ar.flat());	// [ 1, 2, 3, 4,	5, 6, 7, 8 ]
console.log(ar)	// [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]