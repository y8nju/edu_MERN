
/* 
선언식과 표현식을 함께 사용하면, 
표현식으로만 작동한다
	*/
/* 
let give = function take(target) {
	console.log(`target = ${target}`)
}

give('apple');

take('사과') //ReferenceError: take is not defined
 */

function take(target) {
	console.log(`target = ${target}`)
}
take('사과');

let give = take(); // undefined
// give('사과'); // TypeError: give is not a function

let giveUp = take;
giveUp('사과') //사과
