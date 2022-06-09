/*
    &&, || 의 단축평가
    &&:
    ||: 
*/

console.log( false && true && false ); // false
console.log( false || true || false ); // true

console.log( !!'Y') //true
console.log( !!'YES') //trure

console.log('YES' && 'yes'); // yes
console.log('YES' && 'yes' && 'NO'); // NO
console.log('YES' || 'yes'); // YES




// 간혹 이상한 결과가 출력될 수 있음
let country = "KOREA";
console.log(country === ('korea' || 'KOREA')); //false


console.log( !!'') //false