// continue는 loop 안에서만 의미가 있다
let user;

for(const read = require('readline-sync'); ;) {
	user = read.question('Input Your Name?');
	if(user === '') {
		continue;
	}
	console.log(`Hi😀. ${user}`);
	break;
}
chat: for(const read = require('readline-sync'); ;) {
	// 라벨: 라벨처리
	let cmd =read.question(`${user}. What are u wondering?`);
	switch(cmd) {
		case 'javascript':
		case 'Javascript':
			console.log("It's famouse programing language");
			break;
		case 'exit':
			break chat;
			// 라벨 chat에 대해 break 처리
		default:
			console.log('Sorry, I cont know.' + cmd + '.');
	}
}