const { postComments } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {
  const verify = isAuthorized(req);
  if (verify) {
    if (req.params.id) {
      await postComments
        .destroy({
          where: { id: req.params.id },
        })
        .then((data) => {
          if (data) {
            return res.status(204).json({ message: '댓글이 삭제되었습니다' });
          } else {
            return res.status(409).json({ message: '이미 삭제된 댓글입니다' });
          }
        });
    }
  } else {
    return res.status(400).json({ message: '유효하지 않은 요청입니다' });
  }
};
