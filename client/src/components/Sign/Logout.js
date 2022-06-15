import { useState } from 'react';
import axios from 'axios';
import ConfirmModal from '../Modal/ConfirmModals';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { NavButton } from '../Nav';
import Loading from '../../utils/LoadingIndicator';

function Logout() {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const modalHandler = () => {
    setModalOpen(false);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    setLoading(true);
    if (localStorage.kakao) {
      localStorage.removeItem('kakao');
      setModalOpen(true);
      navigate('/');
      setLoading(false);
      // axios
      //   .get(`${process.env.REACT_APP_API_URL}/users/logout`, {
      //     headers: { authorization: `Bearer ${localStorage.getItem('kakao')}` },
      //     withCredentials: true,
      //   })
      //   .then((res) => {
      //     localStorage.removeItem('kakao');
      //     setModalOpen(true);
      //     navigate('/');
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    } else {
      axios
        .get(`${process.env.REACT_APP_API_URL}/users/logout`, {
          headers: { authorization: `Bearer ${localStorage.getItem('user')}` },
          withCredentials: true,
        })
        .then((res) => {
          localStorage.removeItem('user');
          setModalOpen(true);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <NavButton>
        <h5 onClick={handleLogout}>Logout</h5>
      </NavButton>
      {modalOpen ? (
        <ConfirmModal handleModal={modalHandler}>
          로그아웃 되었습니다.
        </ConfirmModal>
      ) : null}
    </>
  );
}

export default Logout;
