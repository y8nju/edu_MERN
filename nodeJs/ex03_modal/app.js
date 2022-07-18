const express = require('express');
const path = require("path");

const app = express();
const visitor = require('./router/visitor');

app.use(express.urlencoded({'extended' : true}));


app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "view") );


app.use('/', visitor)
app.use('/wirte', visitor);
app.use('/list', visitor);

app.listen(8080);