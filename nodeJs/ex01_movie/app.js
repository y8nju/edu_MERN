const express = require('express');
const app = express();
const path = require("path");
const url = require("url");
const ejs = require("ejs");

const movies = [
	{id: 'mv01', name: '토르 - 러브 앤 썬더', img: '/static/images/85999_320.jpg', subImg: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85999/85999_320.jpg', seatList: []},
	{id: 'mv02', name: '탑건-매버릭', img: '/static/images/82120_320.jpg', subImg: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82120/82120_320.jpg', seatList: []},
	{id: 'mv03', name: '헤어질 결심', img: '/static/images/85852_320.jpg', subImg: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85852/85852_320.jpg', seatList: []},
	{id: 'mv04', name: '범죄도시 2', img: '/static/images/85813_320.jpg', subImg: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85813/85813_320.jpg', seatList: []}
	// seatList에 예약된 좌석 넘기고, 예약된 좌석은 disable 처리가 되도록 해보쟈
]
app.use(express.urlencoded({'extended' : true}));
app.use(express.static(path.join(__dirname, 'static')));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "ejs") );


app.get('/', (req, res) => {
	res.render('index');
});
app.get('/list', (req, res) => {
	res.render('list', { movies	}) 
});
app.get('/seat', (req, res) => {
	const movie = movies.find(obj => obj.id === req.query.code);
	res.render('seat', { movie });
	// console.log(movie.seatList);
	// movie.seatList.forEach(elm => {	
	// 	let chkBox = document.querySelectorAll('.chkBox');
	// 	if(elm=== chkBox.value) {
	// 		alert('선택불가')
	// 	}
	// });
});
app.post('/resurve', (req, res) => {
	let movie = movies.find(obj => obj.id === req.body.movie);
	let seatNo = req.body.seatNo;
	movie.seatList.push(seatNo);
	res.render('resurve', { movie, seatNo }) 
    // console.log('post', req.body);
});

app.listen(8020);