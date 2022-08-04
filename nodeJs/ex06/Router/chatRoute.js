const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs')
const path = require('path')

const Room = require('../Models/Room');
const Message = require('../Models/Message');

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            console.log(req.query.roomId , req.body.roomId);
            const uploadPath = path.join(__dirname, "..", "static", "files", req.query.roomId);
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath, { recursive: true });
            }
            req.uploadbaseURL = "/files/" + req.query.roomId+"/";
            callback(null, uploadPath);
        }
    })
});

router.use((req, res, next) => {
	if(req.session.auth) {
		next();
	}else {
		res.redirect('/')
	}
});

const clients = new Set();
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
});

const roomWss = new Map();
router.ws('/room', (ws, req) => {
	console.log('ws://~room' + req.query._id)
	roomWss.set(req.session.userId, ws);
	ws.on('close', () => {
		roomWss.delete(ws);
	})
});

router.get('/', async (req, res)=> {
	const rooms = await Room.find({}).sort('-createdAt').lean();
	const joinRooms = await Room.find({joiner: req.session.userId}).sort('-createdAt').lean();
	const notRooms =  await Room.find({joiner: {$ne: req.session.userId}}).sort('-createdAt').lean();;
	res.locals.rooms = rooms;
	res.locals.joinRooms = joinRooms;
	res.locals.notRooms = notRooms;
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
	const messages = await Message.find({roomId: req.query._id}).sort('createdAt').lean();
	res.locals.room = room;
	res.locals.messages = messages.map((one) => {
        return { ...one, type : one.talker == req.session.userId ? "mine" : "other" };
    });
	roomWss.forEach((ws) => {
		ws.send(JSON.stringify({
			apply: req.query._id, 
			type: 'join', 
			id:  req.session.userId,
			joiner: room.joiner
		}));
	})
	res.render('chats/room');
});

router.get('/exit', async(req, res) => {
	const room = await Room.findByIdAndUpdate(req.query._id, 
		{$pull: {joiner: req.session.userId}},
		{returnDocument: 'after'}).lean();
	roomWss.forEach((ws) => {
		ws.send(JSON.stringify({
			apply: req.query._id, 
			type: 'exit', 
			id:  req.session.userId,
			joiner: room.joiner
		}));
	})
	res.redirect('/chats')
})

// 채팅 룸에서 발생한 AJAX 요청을 처리할 곳
router.post('/api/message', async (req, res)=> {
	// req.body에 roomId랑 comment가 왔다는 조건 하에
	console.log(req.body);
	try {
		let result = await Message.create({...req.body, talker: req.session.userId, data: 'chat'});
		result = result.toObject();
		roomWss.forEach((ws, ownerId)=> {
			result.type = result.talker === ownerId ? 'mine' : 'other'
			ws.send(JSON.stringify({apply: req.body.roomId, type: 'new', data: result}));
		})
		console.log(user);
		res.json({'success': true, 'result': result});
	}catch(err) {
		res.json({'success': false, 'error': err.Message});
	}
});

router.post('/api/upload', upload.single('attach'), async (req, res) => {
	// 업로드 처리는 됨
	// 이걸 데이터 베이스에 저장할 것
	// 이 요청을 했던 사용자에게  res.json으로 성공여부 알려주고
	// 해당 방 사용자들에게 파일이 업도드 된 것을 알 수 있도록
	// 메세지를 전송하는데, 랜더링에 필요한 데이터를 같이 보내줌
	try {
		let result = await Message.create({
			...req.body, 
			talker: req.session.userId, 
			data: 'file', 
			content: "/files/" + req.query.roomId+"/" + req.file.filename
		});
		result = result.toObject();
		roomWss.forEach((ws, ownerId)=> {
			result.type = result.talker === ownerId ? 'mine' : 'other'
			ws.send(JSON.stringify({apply: req.body.roomId, type: 'new', data: result}));
		})
		res.json({'success': true});
	}catch(err) {
		res.json({'success': false});
	}
});

module.exports = router;
