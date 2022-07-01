const fs = require('fs');
/* 
	fs 모듈의 readFile 은 파일을 읽는 모듈임
	sync방식도 있고 async 방식도 있다
*/

let readData;

// readData = fs.readFileSync('./package.json', 'utf-8')

fs.readFile('./package.json', 'utf-8', function(err, data) {
	readData = data;
	console.log(data);
});

console.log('The end');