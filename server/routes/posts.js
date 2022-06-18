const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');

// const { isAuthorized } = require('../controllers/tokenFunctions');
// const { posts, likes } = require('../models');

const uploadsController = require('../controllers/posts/uploads');

// 이미지 업로드용 라우터
try {
  // 폴더 저장 경로가 존재하지 않는 경우 폴더 만들어주기
  fs.accessSync('uploads');
} catch (err) {
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다');
  fs.mkdirSync('uploads');
}

AWS.config.update({
  accesskeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

const uploads = multer({
  dest: 'uploads/',
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: 'conimals',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read-write',
    key: (req, file, cb) => {
      cb(null, `original/${Date.now()}${path.basename(file.originalname)}`);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.post(
  '/uploads',
  uploads.single('image'),
  uploadsController,
  (req, res) => {
    console.log(req.file);
    res.json({ url: req.file.location });
  }
);

const boardsController = require('../controllers/posts/boards');
const viewController = require('../controllers/posts/view');
const writeController = require('../controllers/posts/write');
const editController = require('../controllers/posts/edit');
const deleteController = require('../controllers/posts/delete');
const commentController = require('../controllers/posts/comment');
const editCommentController = require('../controllers/posts/editComment');
const deleteCommentController = require('../controllers/posts/deleteComment');
const likeController = require('../controllers/likes/likes');
const unlikeController = require('../controllers/likes/unlikes');
// const users = require('../models/users');

router.get('/boards', boardsController);
router.get('/view/:id', viewController);
router.post('/write', writeController);
router.patch('/edit/:postId', editController);
router.delete('/view/:postId', deleteController);
router.post('/comment', commentController);
router.patch('/comment', editCommentController);
router.delete('/comment/:id', deleteCommentController);
router.patch('/:postId/like', likeController);
router.delete('/:postId/like', unlikeController);

/* DB 조작할 때는 항상 await 붙여주기 */

// router.post('/img', uploads.single('img'), (req, res) => {
//   console.log(req.file);
//   res.json({ url: `/img/${req.file.filename}` });
// });

// const upload2 = multer();
// router.post('/', isAuthorized, upload2.none(), async (req, res, next) => {
//   try {
//     console.log(req.user);
//     const post = await posts.create({
//       content: req.body.content,
//       img: req.body.url,
//       UserId: req.user.id,
//     });
//   } catch (error) {
//     console.error(error);
//     next(error);
//   }
// });

// const uploads = multer({
//   dest: 'uploads/',
//   storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//       // 파일 확장자 추출
//       const ext = path.extname(file.originalname);

//       // 파일 이름
//       const basename = path.basename(file.originalname, ext);

//       // 파일이름 + 시간 + 확장자명
//       cb(null, basename + Date.now() + '-' + ext);
//     },
//     limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
//   }),
// });

// 단일 파일 업로드
// router.post(
//   '/uploads',
//   uploads.single('image'),
//   uploadsController,
//   (req, res) => {
//     res.status(200).send({
//       fileInfo: req.file,
//     });
//   }
// );

// // 다중 파일 업로드
// router.post('/multipart', uploads.array('img'), (req, res) => {
//   // console check
//   // req.files.map((data) => {
//   //   console.log(data);
//   // });

//   res.status(201).send({
//     fileInfo: req.files,
//   });
// });

module.exports = router;
