/* 
	Buffer: 바이트가 담긴 파일데이터가 담긴 숫자 배열
*/
const fs = require('fs');
const path = require('path');
let target = 'hxd.zip'
fs.promises.readFile(path.join(__dirname, 'document', target))
	.then((data) => {
		console.log(target, data.length);
		console.log(data, data.toString());
	})
	.catch(err => console.log(err.message));

/* 
	message1.txt 15
	<Buffer ec 95 88 eb 85 95 ed 95 98 ec 84 b8 ec 9a 94> 안녕하세요

	message2.txt 10
	<Buffer be c8 b3 e7 c7 cf bc bc bf e4> �ȳ��ϼ���
*/