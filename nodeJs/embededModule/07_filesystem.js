/* 
	readStream 읽어내는 용도의 스트림
*/

const fs = require('fs');
const path = require('path');
let target = 'log.txt'
let targetPath = path.join(__dirname, 'document', target);

let rst = Buffer.alloc(10);
let rs = fs.createReadStream(targetPath, {highWaterMark : 16}); // highWaterMark: default는 64
// 이벤트 기반으로 사용하는 스트림 
rs.on('data', (chunk) => {
    console.log(chunk);
})

/* 
    readStream 👉 WriteStream 쪽으로 연결을 시킬 수 있다
*/

let source = fs.createReadStream('.\\nodeJs\\embededModule\\document\\hxd.zip');
source.pipe(fs.createWriteStream('.\\nodeJs\\embededModule\\document\\hxd_copy.zip')); // 파일복제
// 읽기 가능한 스트림의 출력과 쓰기 가능한 스트림의 입력을 파이프로 연결
source.on('end', function() {
    console.log('streaming done');
});

