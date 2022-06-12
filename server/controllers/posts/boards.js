const { posts } = require('../../models');

module.exports = async (req, res) => {
  try {
    const allPosts = await posts.findAll();
    if (allPosts) {
      const data = allPosts.map((posts) => {
        return {
          id: posts.id,
          title: posts.title,
          image: posts.image,
          createdAt: posts.createdAt,
          updatedAt: posts.updatedAt,
          userId: posts.userId,
        };
      });
      res.status(200).json({ data, message: '게시글 조회에 성공하였습니다' });
    } else {
      return res.status(404).json({ message: '게시글을 찾을 수 없습니다' });
    }
  } catch (err) {
    return res.status(500).json({ message: '게시글 조회에 실패하였습니다' });
  }
};

// const { users, posts } = require('../../models');
// const { isAuthorized } = require('../tokenFunctions');

// module.exports = async (req, res) => {
//   const verify = isAuthorized(req);
//   if (!verify) {
//     return res.status(401).json({ message: '허용되지 않은 접근입니다' });
//   }
//   const allPosts = await posts.findOne({
//     attributes: ['id', 'title', 'image', 'createdAt', 'updatedAt'],
//     where: { id: verify.id },
//   });
//   const userInfo = await users.findOne({
//     attributes: ['id', 'userName'],
//     where: { id: verify.id },
//   });
//   if (allPosts) {
//     return res.status(200).json({
//       data: {
//         allPosts,
//         userInfo,
//       },
//       message: '게시글 조회에 성공하였습니다',
//     });
//   } else {
//     res.status(404).json({ message: '게시글을 찾을 수 없습니다' });
//   }
// };
