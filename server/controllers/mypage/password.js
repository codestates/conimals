const { users } = require('../../models');
const dotenv = require('dotenv');
const { isAuthorized, hashPassword, comparePassword } = require('../tokenFunctions');
dotenv.config();
const saltRounds = parseInt(process.env.SALT_ROUNDS);

module.exports = async(req, res) => {
  const { password, changedPassword } = req.body;
  if(!password || !changedPassword) {
    return res.status(400).json({message: "모든 항목은 필수입니다"});
  } else {
    const verify = isAuthorized(req);
    if(!verify) {
      return res.status(401).json({message: "유효하지 않은 사용자입니다"});
    } else {
      const { userEmail } = verify;
      const userInfo = await users.findOne({
        where: { userEmail }
      });
      const match = comparePassword(password, userInfo.password);
      if(!match) {
        return res.status(400).json({message: "기존 비밀번호가 일치하지 않습니다"});
      } else {
        const hashed = hashPassword(changedPassword, saltRounds);
        await users.update(
          { changedPassword: hashed },
          { where: { changedPassword }}
        ).then(() => {
          return res.status(200).json({data: changedPassword, message: "비밀번호 변경에 성공하였습니다"})
        })
      }
    }
  }
}