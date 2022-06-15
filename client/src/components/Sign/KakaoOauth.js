import { useEffect } from 'react';
import axios from 'axios';

const KakaoOauth = () => {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      kakao(code);
    }
  }, []);

  const kakao = (code) => {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
    }
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
        localStorage.setItem('kakao', res.data.token);
        window.location.replace('/');
      });
  };

  return <></>;
};

export default KakaoOauth;
