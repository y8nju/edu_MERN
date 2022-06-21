const row = new Array(10);
for(let idx = 0; idx < row.length; idx++) {
	if(Math.random() > 0.75) {
		continue;
	}
	row[idx] = +(Math.random()*100).toFixed(0);
}

console.log(row);

let idx=3;
// 본인과 앞, 뒤 의 합을 구하라
let result = (row[idx-1]??0) + (row[idx]??0) + (row[idx+1]??0);
console.log(result);
// 배열에서는 빠져있는 요소가 있는지 체크해야한다

/* 
function sum(idx) {
	if((row[idx-1] === undefined || row[idx] === undefined || row[idx+1] === undefined)) {
		return false;
	} else {
		let result = row[idx-1] + row[idx] + row[idx+1];
		return result;
	}
}
console.log(sum(4))
 */
/* 
let result = 0;
if(!row[idx-1]) {
	result += row[idx-1]
} 
if(!row[idx]) {
	result += row[idx]
} 
if(!row[idx+1]) {
	result += row[idx+1]
} 

for(let t = -1; t<=1; t++){

}
 */