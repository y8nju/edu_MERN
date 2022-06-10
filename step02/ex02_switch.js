const read = require('readline-sync');
console.log('Whats your choice?');

let winRate = 0.2; // 유저가 이길 확률
let drawRate = 0.3; // 유저가 비길 확률
let input = read.keyInSelect(["Rock", "Scissors", "Paper"]);

if (input !== -1) {
	let r = Math.random();
	if (r < winRate) {
		//이겼을 때
		console.log('You Win');
		switch (input) {
			case 0:
				console.log("AI's pick: Scissor");
				break;
			case 1:
				console.log("AI's pick: paper");
				break;
			case 2:
				console.log("AI's pick: Rock");
		}
	} else if (r > winRate && r <= winRate + drawRate) {
		// 비겼을 때
		switch (input) {
			case 0:
				console.log("AI's pick: Rcok");
				break;
				case 1:
					console.log("AI's pick: Scissor");
					break;
					case 2:
						console.log("AI's pick: Paper");
					}
		console.log('Draw');
	} else {
		// 졌을 때
		switch (input) {
			case 0:
				console.log("AI's pick: Paper");
				break;
			case 1:
				console.log("AI's pick: Rcok");
				break;
			case 2:
				console.log("AI's pick: Scissor");
		}
		console.log('You Lose...');
	}
} else {
	console.log('Retired.')
}


/* 
while (input === undefined || input !== -1) {
	
}
 */