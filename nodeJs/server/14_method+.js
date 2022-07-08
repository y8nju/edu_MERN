const http = require('http');
const path = require('path');
const url = require('url');
const ejs = require('ejs');

function calcPrice(time) {
	let price;
	if(time<=10 ) {
		price = 0;
	}else {
		price= 1000;
		if(time > 30) {
			price += Math.ceil((time-30)/10) *400;
		}
		price = price < 10000 ? price : 10000;
	}
	return price;
}


http.createServer(async (req, res) => {
	const pathname = url.parse(req.url, true).pathname;
	res.writeHead(200, {
		'content-type' : 'text/html;charset=utf-8'
	});
	if(pathname === '/input') {
		let data = await ejs.renderFile(path.join(__dirname, 'view', 'input.ejs'));
		res.end(data);
	} else if(pathname === '/output') { 
		if(req.method === 'POST') {	// GET에 POST로 html 수정해서 요청하면 
			res.writeHead(302, {	// stateCode는 302가 되고
				"location": "/input"	// input으로 돌아감
			})
			return res.end();
		}
		const query = url.parse(req.url, true).query;
		let used = query.used
		let price = calcPrice(used);		
		res.end(`이용요금은 ${price}` );
		
		
	} else {
		console.log(req.method);
		res.statusCode =404;
		res.end();
	}

}).listen(8080, _ => {
	console.log('START');
});