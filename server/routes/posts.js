const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploads = multer({
  dest: 'uploads/',
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      // 파일 확장자 추출
      const ext = path.extname(file.originalname);

      // 파일 이름
      const basename = path.basename(file.originalname, ext);

      // 파일이름 + 시간 + 확장자명
      cb(null, basename + Date.now() + '-' + ext);
    },
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  }),
});
const fs = require('fs');
const path = require('path');

const uploadsController = require('../controllers/posts/uploads');
const boardsController = require('../controllers/posts/boards');
const viewController = require('../controllers/posts/view');
const writeController = require('../controllers/posts/write');
const editController = require('../controllers/posts/edit');
const deleteController = require('../controllers/posts/delete');
const commentController = require('../controllers/posts/comment');
const editCommentController = require('../controllers/posts/editComment');
const deleteCommentController = require('../controllers/posts/deleteComment');

router.get('/boards', boardsController);
router.get('/view/:id', viewController);
router.post('/write', writeController);
router.patch('/edit', editController);
router.delete('/:postId', deleteController);
router.post('/comment', commentController);
router.patch('/comment', editCommentController);
router.delete('/comment/:id', deleteCommentController);

// 이미지 업로드용 라우터
try {
  // 폴더 저장 경로가 존재하지 않는 경우 폴더 만들어주기
  fs.accessSync('uploads');
} catch (err) {
  fs.mkdirSync('uploads');
}

// 단일 파일 업로드
router.post(
  '/uploads',
  uploads.single('image'),
  uploadsController,
  (req, res) => {
    res.status(200).send({
      fileInfo: req.file,
    });
  }
);

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
