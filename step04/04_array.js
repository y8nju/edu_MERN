/* 
	배열에는 무엇이든 저장할 수 있다............
*/

const boxA = [1,2,3];
const boxB = [11,12,13,14];
const boxes = [boxA, boxB];
console.log(boxes);	// [ [ 1, 2, 3 ], [ 11, 12, 13, 14 ] ]

for(let key in boxes) {
	console.log(key, boxes[key]);
	/* 
		0 [ 1, 2, 3 ]
		1 [ 11, 12, 13, 14 ]
	*/
}
console.log(boxes[0] === boxA)	// true
console.log('=====================================')

// 배열이 배열을 요소로 가지고 있다면, [num][num]으로 요소 배열에 접근할 수 있다
console.log(boxes[0][0] === boxA[0])	// true

for(let idx = 0; idx < boxes.length; idx++) {
	console.log(boxes[idx], boxes[idx] instanceof Array);
	let one = boxes[idx];
	for(let subIdx = 0; subIdx < one.length; subIdx++) {
		console.log(one[subIdx]);
	}
	// for(let subIdx = 0; subIdx < boxes[idx].length; subIdx++) {
	// 	console.log(boxes[idx][subIdx]);
	// }
}