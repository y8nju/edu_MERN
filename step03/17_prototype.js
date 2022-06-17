let common = {
    value : -1,
    doAction : function() {
        console.log('doAction😀');
    }
}

function Alpha() {
    console.log(Alpha.prototype);   // { value: -1, doAction: [Function: doAction] }

    //prototype의 function을 추가하면, prototype의 function이 숨겨진다(hide)
    // 이런현상을 오버라이딩(overriding)이라고 부름
    this.doAction = function(){ // 내부에서 doAction을 선언하면, common이 가지고 있던 doAction이 가려진다
        console.log('Alpha.doAction🙌');
    };
}

function Bravo() {
    this.doStudy = function() {
        console.log('Bravo.doStudy🤦🏻‍♀️');
    };
}


// 프로토타입은 임의 다른 객체로 변경 가능
Alpha.prototype = common;
Bravo.prototype = common;
Alpha.prototype.go = function() { 
    // prototype에 직접 추가하면, 다른 생성자 함수에도 동일하게 작동되어 버린다
    // 그러므로, 특정 function에만 추가하고 싶으면, function에 직접 넣어야 한다
    console.log('Gogogo👉');
}

// console.log(Alpha.prototype);   // { value: -1, doAction: [Function: doAction] }
// console.log(Bravo.prototype);   // { value: -1, doAction: [Function: doAction] }

const a = new Alpha();
const b = new Bravo();
a.go();
console.log(common);    // Gogogo👉
b.go();
console.log(common);    // Gogogo👉

/* 
console.log(a.value + '/' +b.value);    // -1/-1
a.doAction();   // Alpha.doAction🙌
// delete a.doAction;
// a.doAction();   // doAction😀
// delete a.doAction;
// a.doAction();   // doAction😀
//     // prototype에 씌여진 내용은 삭제되지 않는다
b.doAction();   // doAction😀
b.doStudy();    //Bravo.doStudy🤦🏻‍♀️
 */