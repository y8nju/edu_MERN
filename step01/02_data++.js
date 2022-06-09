// 상태를 나타내는 데이터

// 1. undefined: 변수를 선언 후 초기화가 일어나기 전 상태, 정의된 적이 없는 상태
console.log(undefined); // undefined

// 2. NaN: 숫자가 아닌 상태
console.log( NaN); // NaN
console.log(+'txt'); // NaN

// 3. Infinity, -Infinity
console.log(Infinity); // Infinity
console.log(-Infinity); // -Infinity
console.log(3/0); // Infinity

// 4. null: 비어있는 상태 (존재하지 않는), 정의가 된 적은 있지만 비어있는 상태
console.log(null); // null
let d;
console.log(d === undefined); // true
d = null
console.log(d === undefined); // false
