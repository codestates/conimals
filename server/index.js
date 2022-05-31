const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { sequelize } = require('./models');
const morgan = require('morgan');
// const mysql = require('mysql2/promise');
// const dotenv = require('dotenv');
// dotenv.config();

const usersRouter = require('./routes/users');
const mypageRouter = require('./routes/mypage');

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'authorization'],
  })
);

/* morgan = 터미널창에 클라이언트에서 어떤 요청이 왔는지 기록이 됨 
dev -> combined로 변경시 ip, 브라우저, 정확한 시간까지 기록 */

app.use(morgan('dev'));

/*static */
// app.use('요청경로', express.static(path.join('실제경로')))
// app.use('/', express.static(path.join(__dirname, 'public')));
// localhost:3000/hello.png => learn-express/public/hello.png
// 요청경로와 실제경로를 다르게 하기 때문에 보안측면에서도 이점이 있다.

/* 쿠키가 있으면, 쿠키의 문자열을 객체로 파싱 */
app.use(cookieParser());
/* 클라이언트에서 json 데이터를 보냈을 때 그 데이터를 파싱해서 req.body로 넣어줌 */
app.use(express.json());
/* 클라이언트에서 form 데이터를 보냈을 때 그 데이터를 파싱 */
// req에 body 속성 추가해서 req.body 접근 가능하게 하고 중첩된 객체 표현 허용 x 객체 안에 객체 파싱할 수 있게 하려면 true로 변경
app.use(express.urlencoded({ extended: true }));

// 미들웨어 순서 고려해 볼 것. 예를 들어 사진을 요청받을 때, 쿠키를 파싱하고, json을 파싱하고 그 순서를 다 거칠필요가 없기때문
// 미들웨어 확장법 - 미들웨어 사용시 미들웨어 안에 미들웨에를 두는 방법을 고민해보기, 하단예시 참조
/*

ex) 
app.use('/', (req, res, next) => {
  if(req.session.id) {
  express.static(path.join(__dirname, 'public'))(req, res, next)
  } else {
    next();
  }
});

세션으로 로그인을 했다면, dirname- 폴더명의 public 경로에서 특정 파일을 찾아 전달하고,
찾지못하면, 다음으로 넘어간다. CORS 사용시, passport 사용시에도 이런 미들웨어 확장법을 사용
*/

// 게시판에 유기견 이미지등을 업로드 하기 위한 미들웨어가 필요할 경우 multer 참고 후 사용

/* 유저 정보 API */
app.use('/users', usersRouter);
/* 유저 마이페이지 API */
app.use('/mypages', mypageRouter);
/* 게시판 API */
// app.use('/posts', postsRouter)
/* 댓글 API */
// app.use('/comments', commentsRouter)

app.get('/', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.send('Hello Node!');
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

//에러처리 미들웨어
// app.use((err, req, res, next) => {
//   console.log.error(err);
//   res.status(200).send('에러 났음메')
// })

app.set('port', process.env.PORT);

const port = 8080;
app.listen(process.env.PORT, function () {
  console.log('server on! http://localhost:' + process.env.PORT);
});
