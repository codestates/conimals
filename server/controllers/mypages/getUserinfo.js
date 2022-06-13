const { users, posts } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {
  const verify = isAuthorized(req);
  if (!verify) {
    return res.status(400).json({ message: '유효하지 않은 요청입니다' });
  } else {
    const userInfo = await users.findOne({
      attributes: ['id', 'userName', 'userEmail'],
      where: { id: verify.id },
    });
    const uploads = await posts.findAll();
    if (!userInfo) {
      return res.status(401).json({ message: '권한이 없습니다' });
    } else {
      const { id, userName, userEmail } = userInfo;
      return res.status(200).json({
        data: {
          id,
          userName,
          userEmail,
          uploads,
        },
        message: '회원 정보 조회에 성공하였습니다',
      });
    }
  }
};
