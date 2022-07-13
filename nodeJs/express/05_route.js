const express = require('express');
const app = express();
const path = require('path');

/* 
	라우팅을 route 함수를 이용해서 해보자
*/
app.use(express.static(path.join(__dirname, 'public')));

app.route('game')
	.get((req,res) => {
		res.send('[GET] / GAME')
	})
	.post((req, res)) => {
		res.send('[POST] /GAME')
	}

// app.get('/game', (req, res) => {

// })
// app.post('/game', (req, res) => {
	
// })

app.listen(8080);