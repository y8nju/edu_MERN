/* 
	파일을 다룰 때 자주 쓰는 기능 파일에 텍스트 쓰기 (Write, Output)
	파일에 적힌 텍스트 읽어오기	(Read, Input)
	readFile - Input
	writeFile - Output / appendFile
*/

const fs = require('fs');
const path = require('path');
let target = 'log.txt'
let targetPath = path.join(__dirname, 'document', target);

let buffer = Buffer.from('파일에 출력하기 ver2');	// Buffer 로 쓰기
console.log('buffer', buffer);

fs.promises.writeFile(targetPath, buffer)	// writeFile의 defult는 덮어쓰기
// fs.promises.appendFile(targetPath, buffer)	// appendFile: 추가
	.then(data => {	// resolve의 결과물이 없어서 매가변수를 작성하지 않아도 됨
		console.log('writeFIle success', data);
	})
	.catch(err => {	// 접근할 수 없는 경로 혹은 권한
		console.log(err.message);
	});

let ws = fs.createWriteStream(targetPath, {flags: 'w'} );	// open 쓰기모드로 열기
ws.write('안녕하세요', (err) => {
	if(err) {
	console.log('write failed', err?.message);
	}
});
ws.write('반갑습니다');
ws.write('스트림은 한번 생성하면 close를 하기 전까지 연결이 되있기 때문에');
ws.write('이런식으로 지속적인 writing이 가능');

ws.close();