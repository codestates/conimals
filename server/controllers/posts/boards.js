const { users, posts, Sequelize } = require('../../models');
const Op = Sequelize.Op;

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
      res.status(200).send({ data, message: 'Successfully get posts' });
    } else {
      res.status(404).send({ message: 'No posts are found' });
    }
  } catch (e) {
    res.status(500).send('Failed to get Posts');
    console.error(e);
  }
  //   const { lastId } = req.query;
  //   if (!lastId) {
  //     await posts
  //       .findAll({
  //         include: [
  //           {
  //             model: users,
  //             required: true,
  //             attributes: ['id', 'userName'],
  //           },
  //         ],
  //         attributes: ['id', 'title', 'image', 'createdAt', 'updatedAt'],
  //         order: [['id']],
  //         limit: 9,
  //       })
  //       .then((data) => {
  //         const post = data.map((el) => el.get({ plain: true }));
  //         res.status(200).send({ message: '요청을 받아왔습니다', data: post });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         res
  //           .status(500)
  //           .json({ message: '서버로부터 요청을 받아오지 못했습니다' });
  //       });
  //   } else {
  //     await posts
  //       .findAll({
  //         where: { id: { [Op.lt]: lastId } },
  //         include: [
  //           {
  //             model: users,
  //             required: true,
  //             attributes: ['id', 'userName'],
  //           },
  //         ],
  //         attributes: ['id', 'title', 'image', 'createdAt', 'updatedAt'],
  //         order: [['id']],
  //         limit: 9,
  //       })
  //       .then((data) => {
  //         const post = data.map((el) => el.get({ plain: true }));
  //         res.status(200).send({ message: '요청을 받아왔습니다', data: post });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         res
  //           .status(500)
  //           .json({ message: '서버로부터 요청을 받아오지 못했습니다' });
  //       });
  //   }
};
