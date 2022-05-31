// admin과 일반 사용자 구분해서 게시판 권한 주기
// admin: 보호소 관련자(보호소에 관련된 정보를 게시글로 올리는 사용자)
// 일반 사용자: 그 외의 일반적인 게시글을 올리는 사용자

// 5. 게시판에 올라갈 더미 데이터
// 일반 사용자들이 올리는 게시글
// 반려동물 보호소 관련자들이 올리는 게시글
const { posts } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {
  const verify = isAuthorized(req);
  if (verify) {
    const { userId, title, content, image } = req.body;
    if (!userId || !title || !content) {
      return res.status(400).json({ message: '다시 한 번 확인해주세요' });
    } else {
      await posts
        .create({
          userId,
          title,
          content,
          image,
        })
        .then((data) => {
          return res.status(200).json({
            data: {
              id: data.dataValues.id,
              userInfo: {
                id: verify.id,
              },
              title: data.dataValues.title,
              content: data.dataValues.content,
              image: data.dataValues.image,
              createdAt: data.dataValues.createdAt,
              updatedAt: data.dataValues.updatedAt,
            },
            message: '게시글이 올라갔습니다',
          });
        });
    }
  } else {
    return res.status(500).json({ message: '게시글 올리기에 실패하였습니다' });
  }
};
