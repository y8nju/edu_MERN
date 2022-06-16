// function도 객체이다
function Apple() {	// let Apple = function()

};

let calc =  function(n1, n2) { //	function calc()
	return n1+n2;
}

let a = 3;
new Apple();
console.log(new calc(3, 5)) // clac {}

//prototype은 function이 가지고 있는 변수이다
console.log(Apple.prototype);	// {}
console.log(calc.prototype);	// {}
console.log(a.prototype);	// undefined
