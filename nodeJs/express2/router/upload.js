const express = require('express');
const path = require('path');
const fs = require('fs')
const multer = require('multer')
const router = express.Router();
const app = express();

router.use((req, res, next) => {
	next();
})

// method = 'post'; application/x-www-form-urlencoded
app.use(express.urlencoded({'extended': true}));

// method = 'post'; enctype='multipart/form-data'
// formidable, multer 같은 것들이 multipart 요청을 처리하는 대표적인 middleware이다
// https://github.com/expressjs/multer/blob/master/doc/README-ko.md


router.get('/', (req,res)=>{
	res.render('uploadForm');

});
router.get('/upload', (req,res)=>{
	res.render('uploadForm');
});

// ============ multer ============
const upload = multer({dest : './express2/uploads'});

router.post('/uploaded', upload.single('attach'), (req, res)=>{
	// single, array, field..........
	console.log(req.body.desc);
	console.log(req.body.attach);
	console.log(req.file);
	res.sendStatus(200);
});

// =========== mulrer를 사용할 때 세팅을 변경해서 처리 ===========
// 업로드되는 이름을 우리가 지정해보자

const testUpload = multer({
	storage: multer.diskStorage({
		destination : function(req, file, cb) {
			let dest = ('./express2/testUploads/' + req.body.uploader);
			// req.body.uploader 디렉토리에 업로드한 폴더만 넣으려면,
			// 파일 시스템을 사용하지 않으면 no such file or directory 
			if(!fs.existsSync(dest)) {
				//existsSync() 디렉토리 있는지 없는지 확인
				fs.mkdirSync(dest);
				//mkdirSync 디렉토리 생성
				// 파일 시스템을 이용해서 sync하고, req.body.uploader 해당 폴더를 생성한다
				// 대신. 기본 디렉토리들은 만들어 두어야 한다

				// fs.mkdir(desc, {recursive:true});
				// recursive:true를 사용하면, 경로에 빠진 디렉토리도 생성한다
			}
			cb(null, dest);
		},
		filename: function(req, file, cb) {
			// 원본의 이름을 최대한 살리면서, 겹치지 않게 시간 설정값만 추가
			// let newName = Date.now() + '_' + file.originalname
			// let arr = file.originalname.split('.');
			// arr[0] = Date.now();
			// let newName = arr.join('.');
				// let newName = Date.now() + '_' + file.originalname.split('.')[1]	// 위와 동일
			let newName = req.body.uploader + '_' + Date.now() + '.' + file.originalname.split('.')[1];
			cb(null, newName)
			console.log(req.body.uploader);
		}
	}),
	fileFilter : function(req, file, cb) {
		if(file.mimetype.startsWith('image')) {
			// 이미지 파일만 업로드하자아
			cb(null, true);
		} else {
			cb(null, false);
		}
	}
});

router.route('/test')
	.get((req, res)=> {
		res.render('test');
	})
	.post(testUpload.single('attach'), (req, res) => {
		console.log(req.file);
		if(req.file) {	// fileFilter에서 이미지만 등록되게 처리하고나서 결과 출력
			res.send('파일이 정상적으로 등록되었습니다');
		}else {
			res.send('이미지 확장자의 파일만 등록이 가능합니다')
		}
		res.sendStatus(200);
	})


module.exports = router;
