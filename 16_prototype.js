/* 

*/

function Circle() {

};

Circle.prototype.getArea = function() {
    return this.radius ** 2 * 3.14;
};
Circle.prototype.chage = function(radius) {
    this.radius = radius;
};
Circle.prototype.center = { x: 0, y: 0};
Circle.prototype.radius = 1;

let c1 = new Circle();
// console.log(c1); //Circle {}
// console.log(c1.__proto__); 
// {
//     getArea: [Function (anonymous)],
//     chage: [Function (anonymous)],
//     center: { x: 0, y: 0 },
//     radius: 1
//   }
// ========================================
let c2 = new Circle();
console.log(c1.radius === c2.radius);   // true
console.log(c1.change === c2.change);   // true
console.log(c1.center === c2.center);   // true
c1.chage(5);
console.log(c1.radius === c2.radius);   // false
console.log(c1.cneter); // undefined
c1.center.x = 10;
console.log(c1.center); // { x: 10, y: 0 }
console.log(c2.center); // { x: 10, y: 0 }
// ========================================
/* 
prototype으로 기본 베이스 설계 할 때 
대부분 function만 설정을 해둔다
 */