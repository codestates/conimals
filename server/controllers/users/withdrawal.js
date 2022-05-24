const { users } = require('../../models');
// const { isAuthorized } = require('../tokenFunctions');
const { verify } = require('jsonwebtoken');

module.exports = async(req, res) => {
  // const verify = isAuthorized(req);
  // console.log(verify);
  // if(verify) {
  //   const userInfo = await users.findOne({
  //     attributes: [ "id", "userName", "userEmail" ],
  //     where: { id: userInfo.id }
  //   });
  //   if(userInfo) {
  //     await users.destroy({
  //       where: { id: verify.id }
  //     });
  //     return res.status(200).json({message: "회원탈퇴가 완료되었습니다"})
  //   } else {
  //     return res.status(401).json({message: "권한이 없습니다"})
  //   }
  // } else {
  //   return res.status(500).json({message: "서버 에러"})
  // }

  // if(!verify) {
  //   return res.status(401).json({message: "권한이 없습니다"});
  // } else {
  //   const userInfo = await users.findOne({
  //     where: { id: userInfo.id }
  //   });
  //   if(!userInfo) {
  //     res.status(409).json({message: "가입되지 않은 사용자입니다"});
  //   } else {
  //     await users.destroy({
  //       where: { id: verify.id }
  //     });
  //     return res.status(200).json({message: "회원탈퇴가 완료되었습니다"});
  //   }
  // }

  const authorization = req.headers.authorization;
  console.log(req.headers);
  if(!authorization) {
    res.status(401).json({message: "권한이 없습니다"});
  } else {
    const token = authorization.split('Bearer ')[1];
    const data = verify(token, process.env.ACCESS_SECRET);
    const userInfo = await users.findOne({
      where: { userEmail: data.userEmail }
    });
    if(userInfo) {
      users.destroy({
        where: { userEmail: userInfo.userEmail }
      }).status(200).json({message: "회원탈퇴가 완료되었습니다"});
    } else {
      res.status(400).json({message: "회원탈퇴 실패"})
    }
  }
}