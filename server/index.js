const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { sequelize } = require('./models');

const usersRouter = require('./routes/users');
const mypageRouter = require('./routes/mypage');

app.use(express.urlencoded({ extended: false }));

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

app.use('/users', usersRouter);
app.use('/mypages', mypageRouter);

app.get('/', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.send('Hello World!');
});

sequelize.sync({ force: false })
.then(() => {
  console.log('데이터베이스 연결 성공')
})
.catch((err) => {
  console.error(err)
})

const port = 8080; 
app.listen(port, function(){ 
  console.log('server on! http://localhost:'+port);
});