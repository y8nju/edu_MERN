const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.urlencoded({extended:true}));

app.get("/", (res, resp) =>{
	// resp.render("index");
	resp.render("send");
});


app.get("/api/check", (req, resp)=>{
	console.log(req.query.value);
	const obj = {};
	if(Math.random()>0.5) {
		obj.success = true;
	}else {
		obj.success = false;
	}
	resp.json(obj);
});

app.get('/api/add', (req, resp) => {
	let o = Number.parseInt(req.query.one);
	let o2 = Number.parseInt(req.query.other);
	let result = {
		"success" : true,
		"answer": o + o2
	}
	resp.json(result)
})


app.all("/api/dest", (req,resp)=>{
	console.log(req.method, "/api/test", );
  
	let obj= {
		result : "success",
		count : 27,
		colors : ["red", "blue"]
	};
	let str = JSON.stringify(obj);
	console.log(str);
	console.log(str.result);
	let recover = JSON.parse(str);
	console.log(recover.result);
	resp.json(obj);
});



app.listen(8000,()=>{
	console.log("START.!");
});

