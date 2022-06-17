/* 
    function에 설정된 매개변수에 값이 안들어오면?
        undefined로 설정된 채로 작동되기 때문에 내부적으로 처리를 해야한다

*/
let clacSum = function(n1, n2, n3) {
    n3 = n3 ?? 0;
    n2 = n2 ?? 0;
    // n2 = n2 === undefined ? 0 :n2
    n1= n1 ?? 0;


    let ret = n1 + n2 + n3;
    return ret;
}
console.log(clacSum(2, 4, 6));
console.log(clacSum(1, 2));

// 혹은 매개변수에 default value를 설정해 두는 것도 가능하다

let clacMultiple = function(n1=1, n2=1, n3=1) {
    return n1 * n2 * n3;
}
console.log(`m: ${clacSum(1, 2, 3)}`);
console.log(`m: ${clacSum(1, 2)}`);
