/* 
	require('fs');
	파일 시스템을 제어하기 위한 모듈
*/

const fs = require('fs');
const path = require('path');

/* 
	파일시스템의 핵심 기능은 파일을 읽어들이고 파일로 출력하는 것이다
	기본적으로 3가지 형태로 처리할 수 있게 되어 있다
	1. callback
	2. promise
	3. sync		(-)
*/

fs.readFile('./package.json', function(err, data) {
	// 읽기에 실패하면 err에 데이터가 들어가고, 성공하면 data가 들어감
	console.log(data instanceof Buffer, data);
});

let data = fs.readFileSync('./package.json');
console.log(data instanceof Buffer, data);

fs.promises.readFile('./package.json')
	.then((data) => {
		console.log(data instanceof Buffer, data);
	});

// ====================

// 1. collback
fs.mkdir(path.join(__dirname, 'photo'), function(err) {	// 디렉토리 생성
	console.log('mkdir', err);
});
try{
	let result = fs.mkdirSync(path.join(__dirname, 'music'));
	console.log('mkdirSync', result);
} catch(e) {
	console.log('mkdirSync', e.message);
}


// 2. promises
fs.promises.mkdir(path.join(__dirname, 'document'))
	.then((data) => console.log('promises.mkdir', data))
	.catch((e) => console.log('promises.mkdir', e.message));