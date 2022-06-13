const express = require('express');
const router = express.Router();

const usersRouter = require('./users');
const mypagesRouter = require('./mypages');
const postsRouter = require('./posts');

router.get('/', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.send('Hello World!');
});

router.use('/users', usersRouter);
router.use('/mypages', mypagesRouter);
router.use('/posts', postsRouter);
//
module.exports = router;
