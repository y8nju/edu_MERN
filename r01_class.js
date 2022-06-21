function Shape() {

}
Shape.prototype.x = 0;
Shape.prototype.y = 0;

function Circle(r) {
    this.r = r;
    this.area = function() {
        return this.r**2**Math.pi;
    };
}

Circle.prototype = Shape.prototype;

Circle.prototype.length = function() {
    return 2*this.r*Math.pi;
}

let c1 = new Circle(3);
c1.area();
c1.length();

let c2 = new Circle(3);
console.log(c1.area === c2.area);   // false
console.log(c1.length === c2.length);   // true
console.log(c1.x)   // 0