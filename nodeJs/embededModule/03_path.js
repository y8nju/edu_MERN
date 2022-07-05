/*
	path 모듈은 파일 시스켐의 경로 관련 기능들이 들어있는 모듈
*/
// console.log(require('path'));	// 객체
const { extname } = require('path');
const path = require('path');
console.log(path.sep);	// 운영체제 경로 구분자

console.log(__filename);
let address = __filename;

console.log(path.basename(address));	// 파일명
console.log(path.dirname(address));	// 디렉토리명
console.log(path.extname(address));	// 확장자명

const parsed = path.parse(address);
console.log(parsed);
console.log(parsed.name);

const formated = path.format(parsed)
console.log(formated);


// // join
let result = path.join('.', 'node', 'global', '01_object.js');
console.log(result);
console.log('\\node' + path.sep+ 'global\\01_object.js')