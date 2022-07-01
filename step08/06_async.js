/* 
	Node의 fs 모듈을 쓰면 file 읽고 쓴ㄴ 작업을 할 수 있음
	source.txt에 적혀 있는 
*/

const fs = require("fs");

console.log("aaaaaaaa");
let file = "./source.txt"
fs.readFile(file, "utf-8", function (err, data) {
	// console.log(err);   // 실패 시
	// console.log(data);  // 성공 시
	if (!err) {
		console.log(data);
		let target = data.split("=")[1];
		if(target.length >= 1) {
			fs.readFile(target, "utf-8", function (err, data) {
				console.log("file content =================");
				console.log(data ?? err)
				console.log("------------=================");
			});
		}
	}
})
console.log("bbbbbbbb");

/* 
	비동기 함수의 처리결과를 받아서 이용해야되는 (비동기 함수의 동기화)
		상황은 종종 발생한다
	콜백함수 만을 이용하게 되면 가독성이 안 좋고, 에러 처리가 힘들다
*/