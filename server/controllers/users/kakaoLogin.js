// 코드 수정할 것
const axios = require('axios');
const { users } = require('../../models');
const { generateAccessToken } = require('../tokenFunctions');

module.exports = async(req, res) => {
  const code = req.headers['authorization'];
  try {
    const token = await axios.post(
      // KAKAO_REDIRECT_URI는 나중에 .env에서 바꿀 것
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}&code=${code}&client_secret=${process.env.KAKAO_CLIENT_SECRET}`,
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );
    const kakaoUserInfo = await axios.get(
      "https://kapi.kakao.com/v2/user/me",
      {
        headers: {
          Authorization: `Bearer ${token.data.access_token}`
        },
      }
    );
    const { userEmail, profile } = kakaoUserInfo.data.kakao_account;
    const userInfo = await users.findOne({
      where: { userEmail }
    });
    if(!userInfo) {
      const newUserInfo = await users.create({
        userEmail: userEmail,
        userName: profile.nickname
      });
      const payload = { newUserInfo };
      const accessToken = generateAccessToken(payload);
      return res.status(200).cookie('jwt', accessToken, {
        httpOnly: 'true',
        sameSite: 'none',
        secure: 'true'
      }).json({token: accessToken, message: "카카오 로그인 성공"})
    } else {
      res.redirect("/");
    }
  } catch(err) {
    return res.status(500).json({message: "서버 에러"})
  }
}