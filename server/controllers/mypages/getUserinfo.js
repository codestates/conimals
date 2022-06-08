const { users, posts } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {
  const verify = isAuthorized(req);
  if (!verify) {
    return res.status(400).json({ message: '유효하지 않은 요청입니다' });
  } else {
    const userInfo = await users.findOne({
      attributes: ['id', 'userName', 'userEmail', 'password'],
      where: { id: verify.id },
    });
    // const { userName } = req.query;
    // const uploads = await posts.findAll({
    //   attributes: ['title', 'content', 'image'],
    //   include: [
    //     {
    //       model: users,
    //     },
    //   ],
    //   where: { userName },
    //   order: [['createdAt']],
    // });
    if (!userInfo) {
      return res.status(401).json({ message: '권한이 없습니다' });
    } else {
      // Promise.all([uploads, likes]).then(([uploads, likes]) => {
      const { id, userName, userEmail } = userInfo;
      return res.status(200).json({
        data: {
          id,
          userName,
          userEmail,
        },
        message: '회원 정보 조회에 성공하였습니다',
      });
    }
  }
};
