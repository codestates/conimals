require('dotenv').config();

const bcrypt = require('bcrypt');
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, {expiresIn: '1h'});
  },

  sendAccessToken: (res, accessToken) => {
    res.cookie('jwt', accessToken, {
      sameSite: 'none',
      secure: 'true',
      httpOnly: 'true'
    })
  },

  // isAuthorized: (req) => {
  //   // const Authorization = req.headers.authorization;
  //   // // console.log(req.headers.authorization);
  //   // if(!Authorization) return null;

  //   // const token = Authorization.split(' ')[1];
  //   // if(!token) return null;
  //   // return verify(token, process.env.ACCESS_SECRET);

  //   const jwt = req.cookies.jwt;
  //   console.log(req.cookies);
  //   if(!jwt) {
  //     return null;
  //   } else {
  //     return verify(req.cookies.token, process.env.ACCESS_SECRET);
  //   }
  // },

  hashPassword: (password) => {
    return bcrypt.hashSync(password.toString(), 10);
  },

  comparePassword: (loginPassword, databasePassword) => {
    return bcrypt.compareSync(loginPassword, databasePassword);
  }
}