const { users } = require('../../models');
const { generateAccessToken, hashPassword } = require('../tokenFunctions');

module.exports = async(req, res) => {
  const {userName, userEmail, password} = req.body;
  if(!userName || !userEmail || !password) {
    return res.status(400).json({message: "모든 항목은 필수입니다"});
  } else {
    const hashedPassword = hashPassword(password);
    await users.findOrCreate({
      where: {userEmail, userName, password},
      defaults: {userEmail, userName, password: hashedPassword}
    }).then(([users, created]) => {
      if(!created) {
        return res.status(409).json({message: "이미 가입한 이메일입니다"})
      } else {
        const accessToken = generateAccessToken({ userEmail, userName, password: hashedPassword });
        return res.status(200).cookie('accessToken', accessToken, {
        sameSite: 'none',
        secure: 'true',
        httpOnly: true
        }).json({message: "회원가입 성공"})
      }
    })
  }
}