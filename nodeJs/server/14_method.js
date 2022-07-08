const http = require("http");
const path = require("path");
const url = require("url");
const ejs = require("ejs");

//===========================================================
http.createServer((req, res) => {
    console.log(req.method);
    const pathname = url.parse(req.url, true).pathname;
    if (pathname === "/outputp") {
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
            const query = url.parse("/?"+result, true).query;
            let used = query.used;
            let price = calcPrice(used);
            ejs.renderFile(path.join(__dirname, "view", "fee2.ejs"), { used, price })
                .then((data) => {
                    res.writeHead(200, {
                        "content-type": "text/html;charset=utf-8",
                    });
                    res.end(data);
                });
        });
    } else if (pathname === "/output") {
        const query = url.parse(req.url, true).query;
        let used = query.used;
        let price = calcPrice(used);
        ejs.renderFile(path.join(__dirname, "view", "fee2.ejs"), { used, price })
            .then((data) => {
                res.writeHead(200, {
                    "content-type": "text/html;charset=utf-8",
                });
                res.end(data);
            });
    } else if (pathname === "/input") {
        ejs.renderFile(path.join(__dirname, "view", "input.ejs"))
        .then((data) => {
            res.writeHead(200, {
                "content-type": "text/html;charset=utf-8",
            });
            res.end(data);
        });
    } else {
        res.end();
    }
}).listen(8080, (_) => {
    console.log("START");
});




function calcPrice(time) {
    let used = Number.parseInt(time); //  query data는 string 임.
    let price;
    if (used <= 10) {
        price = 0;
    } else {
        price = 1000;
        if (used > 30) {
            price += Math.ceil((used - 30) / 10) * 400;
        }
    }
    return price;
}