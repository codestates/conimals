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
      .get(
        `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=${code}&state=state;`,
        null,
        {
          headers: {
            authorization: code,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        navigate('/');
      });
  };

  return <></>;
};

export default KakaoOauth;
