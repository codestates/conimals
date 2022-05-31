const { postComments } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {
  const verify = isAuthorized(req);
  if (verify) {
    const { userId, postId, comment } = req.body;
    if (!userId || !postId || !comment) {
      return res.status(400).json({ message: '유효하지 않은 요청입니다' });
    } else {
      await postComments
        .create({
          userId,
          postId,
          comment,
        })
        .then((data) => {
          return res.status(200).json({
            data: {
              id: data.userId,
              postId: data.postId,
              comment: data.comment,
              createdAt: data.createdAt,
            },
          });
        });
    }
  } else {
    res.status(500).json({ message: '다시 한 번 확인해주세요' });
  }
};
