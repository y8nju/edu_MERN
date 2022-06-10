console.log('432'); //typeof ==> string

console.log(432); // typeof ==> number

console.log('432' === 432); // false
console.log('432' == 432); // true


console.log(typeof 'true'); // string
console.log('true' === true); // false: string === boolean
console.log('true' == true); // false: NaN == 1
console.log('1' == true); // true: 1 == 1
console.log(+'1' == +true); // true: 1 == 1
console.log(+'true'); // NaN