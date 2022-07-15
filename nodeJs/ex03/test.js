const visiteBook = require('./collections/visiteBook');
! async function() {
	// let arr = await visiteBook.findAll();
	// console.log(arr);
	
	let result = await visiteBook.findById('62d0e378e8c3b6f608d79327');
	console.table(result);
	// let data = {
	// 	name: "이름없음",
	// 	comment: "변경 TEST..................🤦🏻‍♀️",
	// 	date: new Date()
	// }

	// let result = await visiteBook.updateById('62d0f50a9af5e1e1a73b43a1', data);
	// console.log(result);

	// let result = await visiteBook.insertOne(data);
	// console.log(result);

	// let result = await visiteBook.deleteById('62d0b8694f145d372b9a5b1b');
	// console.log(result);
}();