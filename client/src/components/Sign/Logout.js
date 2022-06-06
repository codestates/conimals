import { useState } from 'react';
import axios from 'axios';
import ConfirmModal from '../Modal/ConfirmModals';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const [modalOpen, setModalOpen] = useState(false);

  const modalHandler = () => {
    setModalOpen(false);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/logout`, {
        headers: { authorization: `Bearer ${localStorage.getItem('user')}` },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        localStorage.removeItem('user');
        setModalOpen(true);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* <button onClick={handleLogout}>logout</button> */}
      <Stack spacing={2} direction='row'>
        <Button variant='outlined' onClick={handleLogout}>
          로그아웃
        </Button>
      </Stack>
      {modalOpen ? (
        <ConfirmModal handleModal={modalHandler}>
          로그아웃 되었습니다.
        </ConfirmModal>
      ) : null}
    </>
  );
}

export default Logout;
