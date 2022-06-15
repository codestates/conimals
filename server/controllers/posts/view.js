const { posts, postComments } = require('../../models');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const thisPost = await posts.findAll({
      where: { id },
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
      // const { userId } = req.params;
      // const allComments = await postComments.findAll({
      //   where: { userId },
      // });
      // if (allComments) {
      //   const commentData = allComments.filter((comments) => {
      //     return {
      //       id: comments.id,
      //       comment: comments.comment,
      //       createdAt: comments.createdAt,
      //     };
      //   });
      res.status(200).json({
        data,
        // commentData,
        message: '게시글과 댓글 조회에 성공하였습니다',
      });
    } else {
      return res
        .status(404)
        .json({ message: '해당 게시글과 댓글을 조회할 수 없습니다' });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: '해당 게시글 조회에 실패하였습니다' });
  }
};
