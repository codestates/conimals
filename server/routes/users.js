const express = require('express');
const router = express.Router();

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
