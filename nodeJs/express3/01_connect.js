/*
	1st step
	mongoose를 mongodb로 연결을 시켜야 함
*/
const mongoos = require('mongoose');

// 몽구스로 몽고디비 연결
const uri = "mongodb+srv://y8nju:5yzi0RPjUsHkeSEb@cluster0.onr4ujj.mongodb.net/?retryWrites=true&w=majority"

/* 
	// callback형태
	mongoos.connect(uri, (err)=> {
	console.log('connected..' + err);
	}); 
*/
/* 
// option + callback 형태
// callback 없이 사용하게 되면 promise 형태
mongoos.connect(uri, {dbName: 'study', maxConnecting: 100}, (err) => {
	// maxConnecting
	if(err) {
		console.log('failed' + err.message);
	} else {
		console.log('connected');
	}
});
 */

mongoos.connect(uri, {dbName: 'study'}).catch((err) => {
	console.log('failed' + err.message);
});