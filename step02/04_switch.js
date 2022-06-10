/* 
	작업을 다르게 진행되게 유도하는 분기 처리 구문이 하나 더 존재하는데, 
	switch문이다
		switch(변수 혹은 식) {
			case 표현식1:
				출력 값;
				break;
			case 표현식2:
				출력 값;
				break;
			default:
				일치하는 case가 없을 때 출력 값
		}
	if 구문이 데이터 상태에 따른 분기 처리에 용이하다면, 
	switch 구문은 데어터 값에 따른 분기 처리에 용이하다
 */

let mode = 1;

switch (mode) {
	case 1:
		console.log('case 1-1');
		console.log('case 1-2');
		break; 
		// 특정문만 출력하도록 break를 넣어줌
		// break를 넣지 않으면 모든 case가 실행된다
	case 2:
		console.log('case 2-1');
		console.log('case 2-2');
		break;
	case 3:
		console.log('case 3-1');
		break;
	default:
		console.log('case default...1');
		console.log('case default...2');
}
console.log('switch==================');