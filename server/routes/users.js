const express = require('express');
const router = express.Router();
const multer = require('multer');
// const upload = multer({
//   dest: 'uploads/',
// });
//multer 모듈 사용할 때 추가할 옵션들을 추가, 옵션인 dest는 파일을 어디 저장할지 설정
//upload 폴더에 저장하며, 폴더가 없으면 multer가 생성, 옵션 생략시 메모리에 저장

const signupController = require('../controllers/users/signup');
const loginController = require('../controllers/users/login');
const logoutController = require('../controllers/users/logout');
// const getUserinfoController = require('../controllers/users/getUserinfo');
// const kakaoController = require('../controllers/users/kakaoLogin');

router.post('/signup', signupController);
router.post('/login', loginController);
router.get('/logout', logoutController);
// router.get('/', getUserinfoController);
// router.post('/kakao/callback', kakaoController.kakao);

module.exports = router;
