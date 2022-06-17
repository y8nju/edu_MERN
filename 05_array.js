// const arr =new Array(4);
// for(let i = 0; i< arr.length; i++) {
//     arr[i] = Math.random() > 0.5 ? 1: -1;
// }

const arr = [-1,-1,-1,-1];
console.log(arr);

// 위에서 만들어진 배열의 마지막 칸에 숫자 1을 집어 넣기 위해서는
// 그 전 마지막 데이터가 -1이여야 하고, 
// 뒤에서 앞으로 찾아나가면서 1이 있어야 한다

let data = 1

// 1.  arr[arr.length] !== data

if(arr[arr.length] !== data) {
	let find = false;
	for(let idx = arr.length-1; idx> 0; idx--) {
		if(arr[idx] === data) {
			find = true;
			break;
		}
	}
	if(find) {
		arr[arr.length] = 1; // arr 배열 마지막
		for(let idx = arr.length-1; idx> 0; idx--) {
			if(arr[idx] == data) {
				break;
			}else {
				arr[idx] = data;
			}
		}	
	}
}
console.log(arr);
