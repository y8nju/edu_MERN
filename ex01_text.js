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

const words = [];   // 사용자가 입력한 단어를 저장할 용도
console.log('WORD CONCAT !')
while(true) {
	// 마지막으로 입력한 단어를 출력'

	words[0] = 'APPLE'  // 처음으로 출력되는 단어가 undefind이므로 고정시켜놓자
   
	let lastWord = words[words.length-1];
	let input = read.question(lastWord + "->");
	// input의 첫글자가 lastWord 마지막 문자랑 같은지
	// lastWord[lastWord.length-1]이 마지막 문자값
	// lastWord.charAt(lastWord.length-1);
	// lastWord.slice(-1);
	// input이 이 글자로 시작하는지 확인
	// input.startsWith(??)
	// input[0] == ??  / input.charAt(0) ===?
	// input.substring(0, 1) === ?'

	let inputText = input.toUpperCase();   // 입력값은 그냥 대문자로 만들자
	console.log(inputText)
	// console.log(words.includes(inputText));
	if(input.startsWith(lastWord.slice(-1))) {
		words.push(inputText) // 입력 값을 배열에 넣자
	}else {
		
	}

}

// 사용자가 입력한 값의 첫글자를 대문자로 변환

