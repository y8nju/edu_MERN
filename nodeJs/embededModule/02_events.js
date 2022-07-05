const AI = require('./ai');
const alpha = new AI('알파고');


alpha.emit('sleep', 6);
alpha.emit('eat', '바나나');

console.log('=============')