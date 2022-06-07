import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const KakaoOauth = () => {
  const navigate = useNavigate();

  // 인가코드 가져오기
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      kakao(code);
    }
  }, []);
  // ${process.env.REACT_APP_KAKAO_REDIRECT_URI}
  // 서버에 인가코드 전달
  const kakao = (code) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/users/oauth/kakao/callback?code=${code}`,
        { data: code },
        {
          headers: {
            authorization: code,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        navigate('/');
      });
  };

  return <></>;
};

export default KakaoOauth;
