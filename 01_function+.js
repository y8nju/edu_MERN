/* 
    Declration 방식은 hoistiong이 된다
    Expression 방식은 안됨
 */

declare();
// express();
// let 선언: ReferenceError: Cannot access 'express' before initialization
// var 선언: TypeError: express is not a function

var express = function() {
    console.log('run in express')
}

function declare() {
    console.log('run in declare');
}