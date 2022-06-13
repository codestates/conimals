const { users } = require('../../models');
const {
  generateAccessToken,
  sendAccessToken,
  isAuthorized,
} = require('../tokenFunctions');

module.exports = async (req, res) => {
  const verify = isAuthorized(req);
  if (!verify) {
    return res.status(401).json({ message: '유효하지 않은 사용자입니다' });
  } else {
    const { id, userEmail } = verify;
    const { userName } = req.body;
    await users
      .findOne({
        where: { userEmail },
      })
      .then((data) => {
        if (data) {
          users.update({ userName }, { where: { userEmail } }).then(() => {
            const accessToken = generateAccessToken({
              id,
              userName,
              userEmail,
            });
            sendAccessToken(res, accessToken, {
              id,
              userName,
              userEmail,
            });
            return res.status(200).json({ message: '정보가 수정되었습니다' });
          });
        } else {
          return res
            .status(409)
            .json({ message: '사용자가 존재하지 않습니다' });
        }
      });
  }
};
