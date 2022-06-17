import { useState, useEffect } from 'react';
import axios from 'axios';

import ConfirmModal from '../Modal/ConfirmModals';
import Loading from '../../utils/LoadingIndicator';

const KakaoOauth = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const modalHandler = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    if (code) {
      kakao(code);
    }
  }, []);

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
        localStorage.setItem('kakao', res.data.token);
        setModalOpen(true);
        setModalMsg('카카오 로그인 되었습니다!');
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? <Loading /> : null}
      {modalOpen ? (
        <ConfirmModal handleModal={modalHandler}>{modalMsg}</ConfirmModal>
      ) : null}
    </>
  );
};

export default KakaoOauth;
