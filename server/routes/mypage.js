const express = require('express');
const router = express.Router();

const withdrawalController = require('../controllers/mypage/withdrawal');
const usernameController = require('../controllers/mypage/username');
const passwordController = require('../controllers/mypage/password');

router.delete('/withdrawal', withdrawalController);
router.patch('/username', usernameController);
router.patch('/password', passwordController);

module.exports = router;