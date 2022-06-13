/*
	레벨 구간은 06_loop+.js를 참고한다
*/
/*
 let vip;
 let total = 0;
 for(vip=1; vip <=9; vip++) {
	 let exp = vip**2 * 10000;
	 total +=exp;
	 // console.log(`${vip}👉${vip +1} : ${exp}`)
	 console.log(`${vip}가 되기 위한 누적 금액: ${total}`)
 }
 */

const read = require('readline-sync');

let input;

while(input !== -1) {
	input = read.keyInSelect (['Lv Cut', 'Your Lv']);

	switch(input) {
		case 0:
			// Lv Cut
			// 해당 레벨까지 올라가는데 필요한 경험치?
			let lv = read.question('Input Leve About: ');

			if(lv<=0 || lv> 10) {
				console.log('invalid value');
				continue; // switch의 case가 아닌, while의 continue
			}

			let total = 0;
			for(let temp=1; temp <= lv-1; temp++) {
				console.log(`${temp} -> ${temp+1} (+${temp**2})`)
				total += temp**2 * 10000;
			}
			console.log('You Need ' + total + 'exp')
			
			break; // switch의 break
		case 1:
			let yourExp = read.question('Input Your Total Exp: ');
			// 현재 레벨과 다음 레벨까지 남은 경험치?
			if(yourExp < 0) {
				console.log('invalid value');
				continue;
			}
			let rst =1; // 사용자 레벨
			let needExp = rst**2*10000; // 레벨업에 필요한 비용
			while(yourExp>=needExp) { // 사용자 경험치가 레벨업에 필요한 필요한 양보다 크거나 같은 동안
				yourExp-=needExp; // 경험치 소모시키고
				rst++; // 레벨업 시키고
				needExp = rst**2*10000; // 필요한 경험치 변경
			}
			console.log(`your Lv: ${rst}, if u want lv up earn ${needExp - yourExp} exp`);
	}
}
