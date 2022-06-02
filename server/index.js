const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const { sequelize } = require('./models');

const usersRouter = require('./routes/users');
const mypageRouter = require('./routes/mypages');
const postsRouter = require('./routes/posts');

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
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);

app.use('/users', usersRouter);
app.use('/mypages', mypageRouter);
app.use('/posts', postsRouter);

app.get('/', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.send('Hello World!');
});

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

//  sequelize.sync();
//  sequelize.sync({ alter: true })
//    .then(()=> {
//      console.log('🤢 re-sync db.')
//    })
//    .catch(err => {
//      console.log('  re-sync error: ', err)
//    })

const port = 8080;
app.listen(port, function () {
  console.log('server on! http://localhost:' + port);
});
