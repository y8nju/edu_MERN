/* 
	quardant라는 이름의  function
	작동하는데, number 2개 받아서 1은 x좌표, 2는 y좌표라 가정하고
	해당 좌표가 몇 사분면에 속하는지 계산해서 사분면 값을 리턴 시켜주는 

	예)
	console.log(quardant(1, 4)) ==> 1

	x축, y축이 0이면 undefined

 */

function quardant(x, y) {
	let ret;
	if( !(x===0 || y===0) ) {
		if(x>0 && y>0) {
			ret = 1
		} else if(x<0 && y>0) {
			ret = 2
		} else if(x<0 && y<0) {
			ret = 3
		} else {
			ret = 4
		}
	}
	return ret;
};

let q = quardant(4, 0);
console.log(q);