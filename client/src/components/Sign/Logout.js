import { useState } from 'react';
import axios from 'axios';
import Modal from '../Modal/Modals';
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
      .get(`http://localhost:8080/users/logout`, {
        headers: { authorization: `Beraer ${localStorage.getItem('user')}` },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        localStorage.removeItem('user');
        // setUserinfos(null);
        // setIsLogin(false);
        navigate('/');
        setModalOpen(true);
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
        <Modal handleModal={modalHandler}>로그아웃 되었습니다.</Modal>
      ) : null}
    </>
  );
}

export default Logout;
