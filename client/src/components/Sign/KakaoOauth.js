import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const KakaoOauth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      kakao(code);
    }
  });

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
        navigate('/');
      });
  };

  return <></>;
};

export default KakaoOauth;
