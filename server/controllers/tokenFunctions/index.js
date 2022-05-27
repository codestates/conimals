require('dotenv').config();
const bcrypt = require('bcrypt');
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, {expiresIn: '10h'});
  },

  sendAccessToken: (res, accessToken) => {
    res.cookie('jwt', accessToken, {
      sameSite: 'none',
      secure: 'true',
      httpOnly: 'true'
    })
  },

  removeAccessToken: (res) => {
    return res.status(200).clearCookie();
  },

  isAuthorized: (req) => {
    const authorization = req.headers['authorization'];
    if(!authorization) return null;
    const token = authorization;
    if(!token) return null;
    return verify(token, process.env.ACCESS_SECRET);
  },

  hashPassword: (password) => {
    return bcrypt.hashSync(password.toString(), 10);
  },

  comparePassword: (loginPassword, databasePassword) => {
    return bcrypt.compareSync(loginPassword, databasePassword);
  }
}