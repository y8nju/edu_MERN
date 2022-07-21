const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.urlencoded({extended:true}));	//urlencoded
app.use(express.json());	// urlencoded 방식이 아닌 json 형식으로 받아서 처리할 때



app.get("/", (req,resp)=>{
	resp.render("postFetch");
});


app.post("/api/post", (req, resp)=>{
	console.log("req.body " , req.body);



	const result = {"success" : true};
	resp.json(result);
});





app.listen(8000,()=>{
	console.log("START.!");
});

