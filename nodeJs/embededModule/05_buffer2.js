/* 
	Buffer: InOut에서 처리되는 바이트(파일데이터)를 관리하기 위한 전용 숫자 배열
*/
// let buf = new Buffer(100);
let buf = Buffer.alloc(20);
buf.fill(1);
buf.forEach((val, i) => {
    console.log(`[${i}] = ${val}`)
});