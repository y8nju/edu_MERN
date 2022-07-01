/* 
	만들고자하는 promise
		파일의 내용을 읽어서 결과를 만들어주는 역할
*/

const fs = require('fs');

function read(target) {
	return new Promise(function(resolve, reject) {
		fs.readFile(target, 'utf-8', (err, data) => {
			// console.log(data);
			resolve(data);
		});
	});
}

read('./source.txt').then((result) => {
	console.log(result);
	let newTarget = result.split('=')[1];
	return read(newTarget);
}).then((result) => {
	return console.log(result);
}).catch((e) => {
	return console.log(e.message);
});