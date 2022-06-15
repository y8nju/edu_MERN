let a = 3;
let b;

if( Number.isNaN(a/b) ) {
	// Number.isNaN() 메서드는 주어진 값이 NaN인지 판별한다
	// if(a/b === NaN) 👈🏻NaN은 === 로 비교가 되지 않는다
	console.log('Data Error');
} else {
	console.log(a/b);
}