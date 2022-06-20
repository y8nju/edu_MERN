/* 
옵셔널 체이닝 ?.
객체에만 쓸 수 있는 연산자
*/
const arr = [ [1,2,3], [4,5,6], [7,8,9,10]] ;

console.log(arr[0]?.[3]);	// undefined
console.log(arr[0]?.[1]);	// 2
console.log(ArrayBuffer[-1]?.[1]);	// undefined
// 아래는 옵셔널 체이닝과 동일한 결과를 출력함
console.log(ArrayBuffer[-1] && arr[-1][1]);	// undefined

let obj = null;
console.log(obj?.data)	// undefined
// 아래는 옵셔널 체이닝과 동일한 결과를 출력함
console.log(obj && obj.data);	// null