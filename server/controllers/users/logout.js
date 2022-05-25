const { users } = require('../../models');
const { isAuthorized, removeAccessToken } = require('../tokenFunctions');

module.exports = async(req, res) => {
  const verify = isAuthorized(req);
  const { userName, userEmail, password } = req.body;
  if(verify) {
    await users.findOne({
      where: { userEmail, userName, password }
    });
    removeAccessToken(res).status(200).json({message: "로그아웃 되었습니다"});
  } else {
    return res.status(400).json({message: "이미 로그아웃되었습니다"});
  }
}