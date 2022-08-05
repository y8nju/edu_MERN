const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs')
const path = require('path')

const Room = require('../Models/Room');
const Message = require('../Models/Message');
const { type } = require('os');

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
	const rooms = await Room.find({}).sort('-createdAt').populate({path: 'key', match : {unread : req.session.userId}}).lean();
	rooms.forEach((room) => {
		room.count = room.key.length;
	})
	const joinRooms = await Room.find({'joiner.joinerName': req.session.userId}).sort('-createdAt').populate({path: 'key', match : {unread : req.session.userId}}).lean();
	joinRooms.forEach((room) => {
		room.count = room.key.length;
	})
	const notRooms =  await Room.find({'joiner.joinerName': {$ne:  req.session.userId}}).sort('-createdAt').lean();
	// console.dir(joinRooms, {depth: 3});
	res.locals.userSession = req.session.userId;
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
			ws.send(JSON.stringify({type: 'new', session: req.session.userId}))
		})
		res.redirect('/chats/room?_id='+result._id)
	});

router.get('/room', async (req, res) => {
	let joinerChk = await Room.findOne({_id: req.query._id, 'joiner.joinerName': req.session.userId});
	let joinerTime ;
	let joinerList = [];
	if(!joinerChk) {
		const room = await Room.findByIdAndUpdate(req.query._id, 
			{$addToSet: {joiner: {joinerName: req.session.userId}}},
			{returnDocument: 'after'}).lean();
		res.locals.room = room;
		room.joiner.forEach((elm) => {
			joinerList.push(elm.joinerName);
		})
		res.locals.room = room
		roomWss.forEach((ws) => {
			ws.send(JSON.stringify({
				apply: req.query._id, 
				type: 'join', 
				id:  req.session.userId,
				joiner: room.joiner,
				joinerList
			}));
		})
	}else {
		const room = await Room.findById(req.query._id);
		res.locals.room = room;
		joinerTime = joinerChk.joiner.find(function(data){ return data.joinerName === req.session.userId}).joinTime;
		room.joiner.forEach((elm) => {
			joinerList.push(elm.joinerName);
		})
		res.locals.joinerList = joinerList;
		await Message.updateMany({roomId: req.query._id, reable: req.session.userId}, {$pull: {unread: req.session.userId}},{returnDocument: 'after'}).lean();
	}
	const messages = await Message.find({roomId: req.query._id, reable: req.session.userId}).where('createdAt').gte(joinerTime).sort('createdAt').lean();
	res.locals.messages = messages.map((one) => {
        return { ...one, type : one.talker == req.session.userId ? "mine" : "other" };
    });
	
	res.render('chats/room');
});

router.get('/exit', async(req, res) => {
	const room = await Room.findByIdAndUpdate(
		req.query._id, 
		{$pull:  {joiner: {joinerName: req.session.userId}}},
		{returnDocument: 'after'}).lean();
	await Message.updateMany(
		{roomId: req.query._id},
		{$pull: {readable: req.session.userId}})
	let joiner = [];
	room.joiner.forEach(elm => {
		joiner.push(elm.joinerName);
	})
	let joinerList = joiner.filter((elm) => {
		return elm !== req.session.userId
	});


roomWss.forEach((ws) => {
	ws.send(JSON.stringify({
		apply: req.query._id, 
		type: 'exit', 
		id:  req.session.userId,
		joiner: room.joiner,
		joinerList
	}));
	})
	res.redirect('/chats')
})

// 채팅 룸에서 발생한 AJAX 요청을 처리할 곳
router.post('/api/message', async (req, res)=> {
	// req.body에 roomId랑 comment가 왔다는 조건 하에
	console.log(req.body);
	try {
		const room = await Room.findById(req.body.roomId).lean();
		let joiner = []
		room.joiner.forEach(elm => {
			joiner.push(elm.joinerName)
		})
		const unread = joiner.filter((one) => {
            if (one !== req.session.userId) {
                return true;
            } else {
                return false;
            }
        });
		let result = await Message.create({
			...req.body,
			talker: req.session.userId, 
			data: 'chat', 
			readable:  joiner,
			unread,
		});
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
		const room = await Room.findById(req.body.roomId).lean();
		let joiner = []
		room.joiner.forEach(elm => {
			joiner.push(elm.joinerName)
		})
		const unread = [...joiner];
        unread.splice(unread.indexOf(req.session.userId), 1);
		let result = await Message.create({
			...req.body, 
			talker: req.session.userId, 
			data: 'file', 
			content: "/files/" + req.query.roomId+"/" + req.file.filename,
			readable : joiner,
            unread
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
