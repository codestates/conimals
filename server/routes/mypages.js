const express = require('express');
const router = express.Router();

const withdrawalController = require('../controllers/mypages/withdrawal');
const usernameController = require('../controllers/mypages/username');
const passwordController = require('../controllers/mypages/password');

router.delete('/withdrawal', withdrawalController);
router.patch('/username', usernameController);
router.patch('/password', passwordController);

module.exports = router;