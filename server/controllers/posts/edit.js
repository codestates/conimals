const { posts } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {
  const verify = isAuthorized(req);
  if (verify) {
    const { postId, title, content, image } = req.body;
    if (postId) {
      if (!title || !content) {
        return res.status(400).json({ message: '다시 한 번 확인해주세요' });
      } else {
        await posts
          .update(
            {
              title,
              content,
              image,
            },
            { where: { id: postId } }
          )
          .then(() => {
            return res.status(200).json({
              data: {
                postId,
                title,
                content,
                image,
              },
              message: '게시글이 수정되었습니다',
            });
          });
      }
    }
  } else {
    return res.status(500).json({ message: '게시글 수정이 실패하였습니다' });
  }
};
