const { posts } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {
  const verify = isAuthorized(req);
  if (verify) {
    if (req.params.postId) {
      await posts
        .destroy({
          where: { id: req.params.postId },
        })
        .then((data) => {
          if (data) {
            return res.status(204).json({ message: '게시글이 삭제되었습니다' });
          } else {
            return res
              .status(409)
              .json({ message: '이미 삭제된 게시글입니다' });
          }
        });
    }
  } else {
    return res.status(400).json({ message: '유효하지 않은 요청입니다' });
  }
};
