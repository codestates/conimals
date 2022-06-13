const { users } = require('../../models');

module.exports = async (req, res) => {
  const { accessToken } = req.cookies;
  if (!accessToken) {
    return res.status(401).json({ message: '권한이 없습니다' });
  } else {
    const decoded = verify(accessToken, process.env.ACCESS_SECRET);
    const userInfo = await users.findByPk(decoded.id);
    if (userInfo) {
      // 관리자 검증 할 수 있는 조건
      // 특정 id값인지, 지정된 경로(path)인지, 지정한 메소드(get)인지
      if (
        req.id !== parseInt(process.env.DB_ADMIN_ID) &&
        req.originalUrl === '/' &&
        req.route.stack[0].method !== 'get'
      ) {
        return res.status(401).json({ message: '관리자 권한이 없습니다' });
      } else {
        return res.status(401).json({ message: '유효한 요청이 아닙니다' });
      }
    } else {
      return res.status(500).json({ message: '토큰 검증에 실패하였습니다' });
    }
  }
};
