const url = require('url');
const querystring = require('querystring');

let data = '/fee?used=30';
console.dir(url.parse(data, true));

let data2 = 'used=30';
console.dir(url.parse('/?' + data2, true));
console.dir(querystring.parse(data2));
