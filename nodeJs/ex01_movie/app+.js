const http = require("http");
const path = require("path");
const url = require("url");
const ejs = require("ejs");
const fs = require("fs");

//===========================================================
http.createServer((req, res) => {
	const pathname = url.parse(req.url, true).pathname;
	const query = url.parse(req.url, true).query;
	// console.log(pathname);
	
	// static
	if(pathname.startsWith("/static")) {
		return fs.createReadStream(path.join(__dirname, '/', pathname)).pipe(res);
	}

	const movies = [
		{id: 'mv01', name: '토르 - 러브 앤 썬더', img: '/static/images/85999_320.jpg', subImg: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85999/85999_320.jpg'},
		{id: 'mv02', name: '탑건-매버릭', img: '/static/images/82120_320.jpg', subImg: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82120/82120_320.jpg'},
		{id: 'mv03', name: '헤어질 결심', img: '/static/images/85852_320.jpg', subImg: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85852/85852_320.jpg'},
		{id: 'mv04', name: '범죄도시 2', img: '/static/images/85813_320.jpg', subImg: 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85813/85813_320.jpg'}
	]

	if (pathname === "/list") {	
		ejs.renderFile(path.join(__dirname, "ejs", "list.ejs"), { movies })
			.then((data) => {
				res.writeHead(200, {
					"content-type": "text/html;charset=utf-8",
				});
				res.end(data);
			});
	} else if (pathname === "/seat") {
		const query = url.parse(req.url, true).query;
		const movie = movies.find(obj => obj.id === query.code);
		// console.log(movie);
		ejs.renderFile(path.join(__dirname, "ejs", "seat.ejs"), { movie })
			.then((data) => {
				res.writeHead(200, {
					"content-type": "text/html;charset=utf-8",
				});
				res.end(data);
			});
	} else if (pathname === "/resurve") {
		if(req.method==="GET") {
			res.writeHead(302, {
				"location" : "/input"
			});
			return res.end();
		};
		let result = "";
		req.on("data", (data) =>{
			result += data;
		});
		req.on("end", () =>{
			const query = url.parse("/?" + result, true).query;
			let movie = movies.find(obj => obj.id === query.movie);
			let seatNo = query.seatNo;
			// console.log(seatNo)
			// console.log(movie.name)
			ejs.renderFile(path.join(__dirname, "ejs", "resurve.ejs"), { movie, seatNo })
				.then((data) => {
					res.writeHead(200, {
						"content-type": "text/html;charset=utf-8",
					});
					res.end(data);
				});
		});
	} else if (pathname === '/' || pathname === '/index') {
		ejs.renderFile(path.join(__dirname, "ejs", "index.ejs"))
			.then((data) => {
				res.writeHead(200, {
					"content-type": "text/html;charset=utf-8",
				});
				res.end(data);
			});
	} else {
		res.end('1');
	}
}).listen(8080, (_) => {
	console.log("START");
});


