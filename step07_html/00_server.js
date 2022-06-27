const http = require('http');
const fs =require('fs');

http.createServer(function(req, resp) {
    console.log('create')
    fs.readFile('./01_basic.html', function(err, data){
        resp.writeHead(200, {'Content-type':'text/html'});
        resp.write(data);
        return resp.end();
    });
}) .listen(80);

// ip로 접속하면 console에 create가 출력되고, 
// 01_basic.html 파일이 열린다