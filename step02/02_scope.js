// let은 지역변수이다

let a = 3;
console.log(a); // 3

if(true) {
    let a = 999;
    let b = 666;
    console.log(a, b); // 999 666
}
// console.log(a, b); //ReferenceError: b is not defined


// var는 전역변수이다

var c = 3;
console.log(c); // 3

if(true) {
    var c = 999;
    var d = 666;
    console.log(c, d); // 999 666
}
console.log(c, d); // 999 666
