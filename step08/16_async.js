/* ./13_promise.js의 연장 */
const fs = require('fs');

function read(target) {
	return new Promise(function(resolve, reject) {
		fs.readFile(target, 'utf-8', (err, data) => {
			// console.log(data);
			resolve(data);
		});
	});
}

async function start(src) {
    try {
        let rst = await read(src);
        let data = await read(rst.split('=')[1]);
        return data;
    }catch(err) {   // error 막기
        console.log(err.message);
    }
}

start().then((rst) => {
    console.log(rst);
}); // 여기에서 catch해도 된다