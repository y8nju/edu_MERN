/* 
	webtoon url router configuration
*/

const express = require('express');

const router = express.Router();
router.use((req, res, next) => {
	console.log('log by anonymous');
	next();
});
router.get('/', (req, res) => {
	res.send('이 응답은' + req. path + '에서 만들어짐' + req.baseUrl)
	// baseUrl 상위 경로
});
router.route('/mode')
	.get((req, res) => {
		res.send('이 응답은' + req. path + '에서 만들어짐 (GET)' + req.baseUrl)
	})
	.post((req, res) => {
		res.send('이 응답은' + req. path + '에서 만들어짐(POST)' + req.baseUrl)
	});

module.exports = router;