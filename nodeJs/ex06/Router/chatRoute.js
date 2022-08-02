const express = require('express');
const router = express.Router();

const clients = new Set();
const Room = require('../Models/Room');
const Message = require('../Models/Message');

router.use((req, res, next) => {
	if(req.session.auth) {
		next();
	}else {
		res.redirect('/')
	}
})

router.ws('/sse', (ws, req)=> {
	//클라이언트 쪽에서 웹소켓 연결이 일어났을 때 작동
	console.log(req.originalUrl + 'connected by' + req.session.id);
	// 사용자의 소켓 정보 저장
	clients.add(ws);
	ws.on('close', () => {
		console.log('closed....');
		// 사용자의 소켓 정보 삭제 
		clients.delete(ws);
	})
})

router.get('/', async (req, res)=> {
	const rooms = await Room.find({}).sort('-createdAt').lean();
	res.locals.rooms = rooms;
	res.render('chats/index')
})

router.route('/open')
	.post(async (req, res) => {
		let data = {...req.body, owner: req.session.userId}
		let result = await Room.create(data);
		console.log(result);
		clients.forEach(ws => {
			ws.send(JSON.stringify({type: 'new'}))
		})
		// res.sendStatus(200);
		res.redirect('/chats/room?_id='+result._id)
	});

router.get('/room', async (req, res) => {
	const room = await Room.findByIdAndUpdate(req.query._id, 
		{$addToSet: {joiner: req.session.userId}},
		{returnDocument: 'after'}).lean();
	const messages = await Message.find({}).sort('createdAt');
	res.locals.room = room;
	res.locals.messages = messages;
	res.render('chats/room');
});

// 채팅 룸에서 발생한 AJAX 요청을 처리할 곳
router.post('/api/message', async (req, res)=> {
	// req.body에 roomId랑 comment가 왔다는 조건 하에
	console.log(req.body);
	try {
		let result = await Message.create({...req.body, talker: req.session.userId});
		res.json({'success': true, 'result': result});
	}catch(err) {
		res.json({'success': false, 'error': err.Message});
	}
});

module.exports = router;
