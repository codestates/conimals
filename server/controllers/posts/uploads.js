const path = require('path');

module.exports = async (req, res) => {
  const util = {
    success: (message, data) => {
      return {
        success: true,
        message: message,
        data: data,
      };
    },
    fail: (message) => {
      return {
        success: false,
        message: message,
      };
    },
  };

  const image = req.file.path;
  if (image === undefined) {
    return res.status(400).send(util.fail('이미지가 존재하지 않습니다'));
  } else {
    return res
      .status(200)
      .send(util.success('이미지가 업로드되었습니다', image));
  }
};
