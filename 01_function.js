/* 
    효율적인 프로그래밍을 하기 위해서는
    함수라는 것과 객체라는 것에 대해 알아야 한다

    1. 함수 = function(기능)?
        목적에 맞는 작업을 수행할 수 있게 구현시켜둔 것
        - 함수를 만드는 방법은 크게 4가지 정도가 있다
            
    
    2. 
 */
// 1) 선언방식 (function declration)
function display() {
    console.log('function display -') 
}

// 미리 만들어둔 함수 선언
display(); //function display -
console.log(typeof display) //function


// 2) 표현방식( function expression)
let fn = function() {
    console.log('function made by expression');
}
fn(); // function made by expression
console.log(typeof fn)


let test = fn; // function
test(); // function made by expression