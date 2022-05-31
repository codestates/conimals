const { postComments } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {
  const verify = isAuthorized(req);
  if (verify) {
    const { userId, postId, comment } = req.body;
    if (userId) {
      if (!userId || !postId || !comment) {
        return res.status(400).json({ message: '다시 한 번 확인해주세요' });
      } else {
        await postComments
          .update(
            {
              comment,
            },
            { where: { id: postId } }
          )
          .then(() => {
            return res.status(200).json({
              data: {
                userId,
                postId,
                comment,
              },
              message: '댓글이 수정되었습니다',
            });
          });
      }
    }
  } else {
    return res.status(500).json({ message: '댓글 수정이 실패하였습니다' });
  }
};
