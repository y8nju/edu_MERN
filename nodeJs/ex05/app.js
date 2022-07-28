const express = require('express');
const path = require('path');
const app = express();
const movieRoute = require('./router/movieRoute');

app.use(express.urlencoded({'extended' : true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.use('/', movieRoute);

app.listen(8000, ()=> console.log('start'))