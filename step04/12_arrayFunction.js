/* 
	* map
	forEach랑 비슷하게 배열의 모든 요소를 순회하면서, 콜백함수를 작동시켜준다
	그러면서 콜백에서 리턴되는 밸류들로 새로운 배열이 만들어 진다
	! forEach의 return은  undefined
*/

const arr = [3, 9, 13];
let rst = arr.map(function(val){
	console.log(val);
	return val**2;
} )
console.log(rst)	// [ 9, 81, 169 ]

let cvt = rst.map((val) => val -10);
console.log(cvt);	// [ -1, 71, 159 ]


/* 
	* filter
	배열의 모든 요소를 순회하면서 callbackFn 의 반환값이 true인 데이터만 추출하여 새로운 배열을 만들어낸다
*/

const ar = [-1, 0, 566, -32, 435, -13];
let nar = ar.filter(function(val) {
	if(val > 0) {
		return true;
	} else {
		return false;
	}
	// return val > 0;
	// (val) => val > 0;
});
console.log(nar);