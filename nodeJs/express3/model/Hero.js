const mongoose = require('mongoose');
/* 
	스키마 / 저장할 데이터를 구조화 해둔 것
*/
console.log(mongoose.SchemaTypes.Number);


/* 
	스키마 자체로는 데이터 베이스에 직접적인 영향은 없고, 
	DB작업을
*/
const Hero = mongoose.model('Hero', new mongoose.Schema({
	name: String,
	alias: String,
	
}));

module.exports = Hero;