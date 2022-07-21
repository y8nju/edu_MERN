const read = require('readline-sync');

let input;

while(input !== -1) {
	input = read.keyInSelect (['Lv Cut', 'Your Lv']);

	// ex04_loop+.js 변수 단순하게....?
	
	let total = 0;
	let vip = 1; // 레벨 1로 초기화
	let exp = vip ** 2 * 10000; // exp 정의

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
			for(vip; vip <= lv - 1; vip++) {
				total += exp;
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
 // 레벨업에 필요한 비용
			while(yourExp >= exp) { // 사용자 경험치가 레벨업에 필요한 필요한 양보다 크거나 같은 동안
				yourExp -= exp; // 경험치 소모시키고
				vip++; // 레벨업 시키고
				exp = vip**2*10000; // 필요한 경험치 변경
			}
			console.log(`your Lv: ${vip}, if u want lv up earn ${exp - yourExp} exp`);
	}
}
