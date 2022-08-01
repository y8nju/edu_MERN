const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
/* 
사용자 요청이 들어왔을 때 kobis의 openAPI를 사용
request 혹은 axois, fecth 모듈 중에 하나를 사용
(node 환경에서는 fecth 🙅🏻‍♀️ 모듈 설치 : npm i node-fetch )
*/
const app = express();

app.get('/test', async (req, res) => {
	const target = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json"
	const query = "key=f5eef3421c602c6cb7ea224104795888&targetDt=20220731"
	let result = await fetch(target+'?'+query, {method: 'get'});
	let json = await result.json();
	console.dir(json, {depth: 3});
	res.sendStatus(200);
})
app.listen(8080, ()=> {
	console.log('start')
})