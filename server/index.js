const express = require('express');
const app = express();
const cors = require('cors');
const { sequelize } = require('./models');

const usersRouter = require('./routes/users');

app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);

app.get('/', function(req, res) {
  res.send('Hello World!');
});

sequelize.sync({ force: false })
.then(() => {
  console.log('데이터베이스 연결 성공')
})
.catch((err) => {
  console.error(err)
})

const port = 3000; 
app.listen(port, function(){ 
  console.log('server on! http://localhost:'+port);
});