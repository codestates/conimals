const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const { sequelize } = require('./models');

const indexRouter = require('./routes');

app.use(express.urlencoded({ extended: false }));
// extended meaning what

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'authorization'],
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);
// 미들웨어 안에 미들웨어 검색 모건 옵션 찾아보기

app.use('/', indexRouter);

app.get('/', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.send('Hello World!');
});

/* 서버에러 */
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send({
    message: 'Internal Server Error',
    stacktrace: err.toString(),
  });
});

/* 데이터베이스 연결 */
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

/* 서버 포트 설정 */
const port = 8080;
app.listen(port, function () {
  console.log('server on! http://localhost:' + port);
});
