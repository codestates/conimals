const express = require('express');
const router = express.Router();

const signupController = require('../controllers/users/signup');
const loginController = require('../controllers/users/login');
const logoutController = require('../controllers/users/logout');
const withdrawalController = require('../controllers/users/withdrawal');

router.post('/signup', signupController); 
router.post('/login', loginController);
router.get('/logout', logoutController);
router.delete('/withdrawal', withdrawalController);

module.exports = router;