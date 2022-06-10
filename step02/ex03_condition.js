const read = require('readline-sync');

let coin = read.question('Insert coin: ');

// let menu = read.keyInSelect(["Cola(800)", "Juice(700)-SoldOut"])

/* 
	1. 입겱값이 0, 1, -1 3개 중 하나일테니, switch -case로 접근
	2. 콜라를 선택했을 때와 쥬스를 선택했을 때 처리해야하는 작업은 내부에서 if로
 */

// switch(menu) {
//     case -1:
//         console.log('Order Canceled');
//         break;
//     case 0:
//         if(coin >=800) {
//             console.log('Here is Youre Coke');
//             coin -= 800
//         }else {
//             console.log('Not Enought Money');
//         }
//         break;
//     case 1:
//         console.log('Hey. Juice is Sold-Out!')
// }
// console.log(`Return Money: ${coin}`)


let menu = read.keyInSelect(["Cola(800)", "Coffee(300)", "Juice(700)-SoldOut"])

if(coin<300) {
	console.log(`Not Enought Money. Return Money: ${coin}`)
} else if (coin >=300 && coin <800 ) {
	switch(menu) {
		case 0: 
			console.log(`Not Enought Money. Return Money: ${coin}`);
			break;
		case 1:
			coin -= 300
			console.log(`☕, Return Money: ${coin}`);
			break;
		case 2:
			console.log(`Hey. Juice is Sold-Out! Return Money: ${coin}` )
	} 
} else {
	switch(menu) {
		case 0: 
			coin -= 800
			console.log(`🥤. Return Money: ${coin}`);
			break;
		case 1:
			coin -= 300
			console.log(`☕, Return Money: ${coin}`);
			break;
		case 2:
		console.log(`Hey. Juice is Sold-Out! Return Money: ${coin}` )
	}
}
