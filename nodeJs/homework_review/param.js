const url = require('url');
let data = 'id=mv02&seat=1-2&seat=3-2'

let query = url.parse('/?'+data, true).query;
console.log(query); // [Object: null prototype] { id: 'mv02', seat: [ '1-2', '3-2' ] }
// 값이 하나일 때는 string, 값이 여러개일 때는 배열로 나온다

let params = new URLSearchParams(data);
console.log(params.get('seat'));    // 1-2
console.log(params.getAll('seat')); //[ '1-2', '3-2' ]
// getAll은 값이 하나이거나 배열이거나 모두 배열로 나온다
