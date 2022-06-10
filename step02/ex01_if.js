// 자판기에서 음료 뽑기

const readline = require('readline-sync');

console.log("Choose drink! ");

let select = readline.keyInSelect(["Cola", "Coffe(SO)", "Juice" ]);
console.log(select,  typeof select);

if (select === -1) {
	console.log('Canceled 🙋🏻‍♀️');
} else if(select === 1) {
	console.log(`Sorry. Its sold out🙇🏻‍♀️`);
} else {
	console.log('Thx! Here your drink🙆🏻‍♀️ ');
}