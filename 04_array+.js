let panel = new Array(10);
// console.log(panel.length);  //10

for(let idx=0; idx<panel.length; idx++) {
	panel[idx] = new Array(10);
}
// console.log(panel[0] === panel[1])	// false
// console.log(panel);

for(let cnt =1; cnt <= 20; cnt++) {
	let row = Math.floor(Math.random()*10); // 랜덤숫자
	let col = Math.floor(Math.random()*10);	// 랜덤 칸
	panel[row][col] = 7;
}
console.log(panel);


//특정 좌표 8개를 찍었을 때, 숫자가 있는지 없는지 찾는것...................ㅎ

let tx = 2;
let ty = 4;
console.log(panel[tx][ty]);
// 여기에서는 tx가 y이다 
// 해당 좌표 x축에 7이 있는지 체크
// y축이 고정
for(let rx = 0; rx<10; rx++) {
	console.log(panel[ty][rx]);
}
/* 
위와 동일하게 작동
for(let ry=0; ry<10; ry++) {
	for(let rx = 0; rx< 10; rx++){
		if(Math.abs(rx-tx) !== 0 && Math.abs(ry-ty) === 0){
			console.log(panel[ry][rx]);
		}
	}
}
 */
// 해당 좌표 y축에 7이 있는지 체크
// x축이 고정
for(let ry = 0; ry<10; ry++) {
	console.log(panel[ry][tx]);
}


for(let num = 0; num <10; num++) {
	if()
}