/* 
	영단어 끝말 잇기

	영단어가 구축이 안되어 있는 상태라서, 
	사용자가 입력한 단어가 룰에만 어긋나지 않으면 되는 것으로 

		1. 마지막 입력단어의 끝 글자로 시작해야 된다
			word[words.length].charAt(0) == word[i+1].charAt(word.length-1) 👉 true면 통과

		2. 한번이라도 입력된 단어는 다시 입력할 수 없다
			words.includes(input)

		3. 대소문자가 달라도 같다고 처리한다
			입력값을 대문자나 소문자로 그냥 처리한다 input.toUpperCase()
 */
const read = require('readline-sync');

const words = [];   // 사용자가 입력한 단어를 저장할 배열
console.log('WORD CONCAT !')
while(true) {
	let last = words[words.length-1];
	let input = read.question(last ?? "Type Any Word " + '> ').toLocaleLowerCase();

	if(last === undefined) {    // 이전에 입력된 단어가 없었다면
		words.push(input);
	}else { // 그렇지 않았을 때
		if(words.includes(input)) { // 이미 배열에 들어가져 있는 단어라면
			console.log('Duplicated Word! ')
			break;
		} else {
			// 방금 들어온 단어가 이전 단어의 마지막 글자로 시작하는 지를 확인
			if(input.startsWith(last.slice(-1))) {
				words.push(input);
			} else {
				console.log('Invalid Word!');
				break;
			}
		}
	}
	
}

