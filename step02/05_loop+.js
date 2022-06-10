/* 
	누적 사용 금액에 따른 vip 등급제를 운영하는 서비스에
	신규고객이 가입과 동시에 x = 273000을 사용
	이 사용자의 등급은? 

	vip등급
	0 ~ (10이 되기까지는 10000만 포인트마다 상승)
	10 ~ 20(50000포인트)
	Maximum은 20

	등급 상승이 가능한 동안에

	사용금액에서 상승에 필요한 포인트를 빼주면서 vip 등급 상승
	금액이 등급 상승에 필요한 값보다 큰 동안, 
	(vip < 10 && money >= 10000) || (vip >= 10 && money >= 50000) && (vip < 20)
 */
/* 
let money = 200000;
let vip = 0;

let possible = true;

while  (possible === true) {
	if (vip < 10 && money >=10000 ) {
		money -= 10000;
		vip++;
	} else if (vip<20 && money >= 50000) {
		money -= 50000;
		vip++;
	}else {
		possible = false;
	}
}

console.log('vip = ' + vip)
 */

let money = 800000;
let vip = 0;
let needs = 10000;

while(money >= needs) {
	vip++;
	money -= needs;
	if(vip<10) {
		needs =10000;
	}else {
		needs = 50000;
	}
}
vip = vip > 20 ? 20 : vip;
console.log('vip = ' + vip)