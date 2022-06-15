/* 요구사항 좋아요 */
/*
상세보기 기능 중 좋아요 기능 구현
- 좋아요는 로그인 해야만 사용 가능한 기능입니다
- 좋아요는 한 게시물 당 한 번만 사용 가능합니다.
- 좋아요 선택시 좋아요 체크가 안되어 있다면 체크, 이미 좋아요가 체크되어 있는 경우 좋아요를 해지해 주세요
- 좋아요 기능이 수행된 후에는 좋아요가 반영된 상세보기 화면을 다시 출력해 주세요.
- 좋아요 갯수 표현
- 힌트1 : 특정 게시물에 특정 회원이 좋아요를 했는지에 대한 여부를 기억(저장)해야 함
- 힌트2 : 좋아요를 이루는 정보는 2개 이상입니다.(좋아요 대상 게시물, 좋아요 한 유저, 좋아요 체크한 날짜 등)
*/

const { posts } = require('../../models');

module.exports = async (req, res, next) => {
  try {
    const post = await posts.findOne({ where: { id: req.params.postId } });
    if (!post) {
      return res.status(404).send('게시글이 존재하지 않습니다');
    }
    await post.addLikers(req.user.id);
    return res
      .status(200)
      .json({
        postId: post.id,
        userId: req.user.id,
        message: '해당 게시글에 좋아요를 눌렀습니다',
      });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
