const { posts } = require('../../models');

module.exports = async (req, res) => {
  try {
    const thisPost = await posts.findAll({
      where: { id: req.params.id },
    });
    if (thisPost) {
      const data = thisPost.filter((posts) => {
        return {
          id: posts.id,
          title: posts.title,
          content: posts.content,
          image: posts.image,
        };
      });
      res
        .status(200)
        .json({ data, message: '해당 게시글 조회에 성공하였습니다' });
    } else {
      return res
        .status(404)
        .json({ message: '해당 게시글을 찾을 수 없습니다' });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: '해당 게시글 조회에 실패하였습니다' });
  }
};
