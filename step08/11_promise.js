const fs = require('fs');

new Promise((resolve, reject) => {
	fs.readFile('./source.txt', 'utf-8', function(err, data) {
		if(!err) {
			resolve(data);
		}
	});
}).then((input) => {
	return input;
}).then((val) => {
	console.log(val);
});

/* new Promise((resolve, reject) => {
	fs.readFile('./source.txt', 'utf-8', function(err, data) {
		if(!err) {
			resolve(data);
		}
	});
}).then((input) => {
	console.log(input.split("=")[1]);
	fs.readFile(input.split("=")[1], 'utf-8', function(err, data) {
		console.log(data);
		return data;
	});
	// console.log(`1step ${input}`);
	// return input;
}).then((val) => {
	// throw new Error('🤨');
	console.log(`2step ${val}`);
}).catch((err) => {
	console.log(err.message);
}); */