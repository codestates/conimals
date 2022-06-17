const { posts } = require('../../models');

module.exports = async (req, res, next) => {
  //DELETE /post/1/like
  try {
    const post = await posts.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(404).send('게시글이 존재하지 않습니다');
    }
    await post.removeLikers(req.user.id);
    return res
      .status(200)
      .json({
        postId: post.id,
        userId: req.user.ud,
        message: '좋아요를 취소하였습니다',
      });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
