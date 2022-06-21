const ar = ['Apple', 'Banana', 'Cherry'];
for(let key in ar) {
	console.log(key + '/' + typeof key)
	/* 
		0/string
		1/string
		2/string
	*/
}
ar.x = 'X'; // X
console.log(ar.x)	// X
console.log(ar)	// [ 'Apple', 'Banana', 'Cherry', x: 'X' ]
console.log('length' in ar);    //true
console.log(ar['0'])	// Apple
console.log(ar[0])	// Apple

let idx = 2;
console.log(ar[''+idx])	// Cherry
console.log(ar[idx])	// Cherry

let arr = [];
console.log(arr[0]);	// undefined
arr[2] = 'Tomato'
console.log(arr[2]);	// Tomato