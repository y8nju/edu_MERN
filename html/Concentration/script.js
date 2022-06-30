const wrapper = document.querySelector('#wrapper');

const total = 12;

const colors = ['Salmon', 'DarkOrange', 'Gold', 'MediumSeaGreen', 'DodgerBlue', 'Thistle'];
let colorCopy = colors.concat(colors);
let shuffled = [];
let clicked = [];
let completed = [];
let clickable = false;

function shuffle() {
	for(let i = 0; colorCopy.length > 0; i +=1) {
		const randomIndex = Math.floor(Math.random() * colorCopy.length);
		shuffled = shuffled.concat(colorCopy.splice(randomIndex, 1));
	}
}
// function shuffle() {
// 	shuffled = [...colorCopy];
// 	shuffled.sort(function(one, other) {
// 		return Math.random() - 0.5;
// 	})
// }

function createCard(i) {
	const card = document.createElement('div');
	card.className = 'card';;
	const cardInner = document.createElement('div');
	cardInner.className = 'cardInner';
	const cardFront = document.createElement('div');
	cardFront.className = 'cardFront';
	const cardBack = document.createElement('div');
	cardBack.className = 'cardBack';
	cardBack.style.backgroundColor = shuffled[i];
	cardInner.appendChild(cardFront);
	cardInner.appendChild(cardBack);
	card.appendChild(cardInner);
	return card;
}

function onCilckCard() {
	if(!clickable || completed.includes(this) || clicked[0] === this) {
		return;
	}
	this.classList.toggle('flipped');
	clicked.push(this);
	if(clicked.length !== 2) {
		return;
	}
	const firstBackColor = clicked[0].querySelector('.cardBack').style.backgroundColor;
	const seconBackColor = clicked[1].querySelector('.cardBack').style.backgroundColor;
	if(firstBackColor === seconBackColor) {
		completed.push(clicked[0]);
		completed.push(clicked[1]);
		clicked = [];
		if (completed.length !== total) {
			return;
		}
		setTimeout(() => {
			alert('✨👏👏✨');
			resetGame();
		}, 1000);
		return;
	}
	clickable = false;
	setTimeout(() => {
		clicked[0].classList.remove('flipped');
		clicked[1].classList.remove('flipped');
		clicked = [];
		clickable = true;
	}, 500);
}

function startGame() {
	clickable = false;
	shuffle();
	for(let i = 0; i < total; i += 1) {
		const card = createCard(i);
		card.addEventListener('click', onCilckCard);
		wrapper.appendChild(card);
	}
	document.querySelectorAll('.card').forEach((card, index) => {
		setTimeout(() => {
			card.classList.add('flipped');
		}, 1000 + 100 * index);   
		// 카드마다 .1초 씩 는게 두집힘
		// 첫카드는 1초부터, 마지막 카드는 2.1초 
	});
	setTimeout(() => {
		document.querySelectorAll('.card').forEach((card) => {
			card.classList.remove('flipped');
		});
		clickable = true;
	}, 5000); // 게임 시작으로 부터 5초 뒤에 다시 카드 뒤집음
}
startGame();
function resetGame() {
	wrapper.innerHTML = '';
	colorCopy = colors.concat(colors);
	shuffled = [];
	completed = [];
	startGame();
}