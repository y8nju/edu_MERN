/* 
	파일에 읽고 쓰기가 아니라
	시스템 자체를 제어하는 것도 filesystem  모듈에 구현되어 있다

	디렉토리 생성   mkdir    / 디렉토리 삭제    rmdir = rm
	rmdir: 비어있는 디렉토리 삭제, 비어있지 않는 디렉토리 삭제에는 option이 필요하다
	rm: 파일을 지우는 명령으로 옵션에 따라 디렉토리를 지움

	파일 삭제   unlink
	이름변경    rename

	있는지 없는지 체크exists

*/

const fs = require('fs');
const path = require('path');

try {
	fs.rmSync(path.join(__dirname, 'musik'));	// 폴더 삭제
	console.log('success', e.message);
}catch(e) {
	console.log('failed', e.message);
}

/* 
fs.promises.unlink(path.join(__dirname, 'document', 'message2.txt'))
	.then(rst => {
		console.log('then', rst);
	})
	.catch(err => {
		console.log('catch', err.message);
	})
 */

/* 
fs.rename(path.join(__dirname, 'document', 'hxd.zip'),
				path.join(__dirname, 'document', 'hxdd.zip'),
				(err)=> {
					if(err) {
						console.log('failed', err.message);
					}else {
						console.log('success');
					}
				});
rename 아래와 동일
 */
/* 
fs.promises.rename(path.join(__dirname, 'document', 'hxd.zip'),
								path.join(__dirname, 'document', 'hxdd.zip'))
	.then(rst => {
		console.log('then', rst);
	})
	.chatch(err => {
		console.log('catch', err.message);
	})
 */
