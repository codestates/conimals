const { users } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {
  const verify = isAuthorized(req);
  if (!verify) {
    res.status(401).json({ message: '로그인이 필요합니다' });
  } else {
    await users.destroy({
      where: { userEmail: verify.userEmail },
    });
    return res
      .clearCookie('accessToken', {
        httpOnly: 'true',
        sameSite: 'none',
        secure: 'true',
      })
      .status(204)
      .json({ message: '회원탈퇴가 완료되었습니다' });
  }
};
