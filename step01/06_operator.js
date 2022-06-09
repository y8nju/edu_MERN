/* number 데이터를 가진 variable은 특별한 연산자가 사용 가능
    증감(++, --)
    연산자의 위치는 변수명의 앞과 뒤에 붙어도 된다
*/

let win = 0;
console.log(win); // 0
win++ // 가지고 있는 number + 1이 됨
console.log(win); // 1
++win
console.log(win); // 2
win--
console.log(win); // 1


// Q. boolean 데이터나, string 데이터를 가진 변수에 이 작업을 시키면?

let bool = true;
bool++
console.log(bool); // 2

let str = 'hi'
str++
console.log(str); // NaN

// 변수를 기준으로 ++ 혹은 --가 앞에 붙냐 뒤에 붙냐에 따라서 변화 시점이 다르다

win = 50;
console.log(win++);
console.log(win);
console.log(++win);
console.log(win);

console.log(`win = ${win++}`) // 52
console.log(`win = ${++win}`) // 54
console.log(`win = ${win--}`) // 54
console.log(`win = ${--win}`) // 52

let no = 10;
// console.log(`no = ${no + ++no + no++ + no}`); // no = 44
console.log(`no = ${--no + no-- + no + ++no + no++ + no + no--}`); 
console.log(`no = ${no}`);