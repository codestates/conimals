const { users } = require('../../models');
const { generateAccessToken, sendAccessToken, comparePassword } = require('../tokenFunctions');

module.exports = async(req, res) => {
  const { userEmail, password} = req.body;
  if(!userEmail || !password) {
    return res.status(400).json({message: "이메일 혹은 비밀번호를 확인해주세요"});
  } else {
    const userInfo = await users.findOne({
      where: { userEmail }
    });
    if(!userInfo) {
      return res.status(409).json({message: "존재하지 않는 사용자입니다"});
    }
    const comparedPassword = comparePassword(password, userInfo.password);
    if(!comparedPassword) {
      return res.status(401).json({message: "올바른 비밀번호가 아닙니다"});
    } else {
      delete userInfo.dataValues.password;
      const accessToken = generateAccessToken(userInfo.dataValues);
      sendAccessToken(res, accessToken);
      return res.status(200).json({data: { accessToken }, message: "로그인에 성공하였습니다"});
    }
  }
}