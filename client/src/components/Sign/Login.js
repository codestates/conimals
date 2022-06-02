import { useState } from 'react';
import Logout from './Logout';
import axios from 'axios';
import Modal from '../Modal/Modals';

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Login.css';

// 로그인 성공, 실패 Modal 알림 띄우기
function Login() {
  const [loginInfo, setLoginInfo] = useState({
    userEmail: '',
    password: '',
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState('');

  const modalHandler = () => {
    setModalOpen(false);
  };

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleLogin = () => {
    const { userEmail, password } = loginInfo;
    axios
      .post(
        `http://localhost:8080/users/login`,
        { userEmail: userEmail, password: password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.data.accessToken) {
          localStorage.setItem('user', res.data.data.accessToken);
        }
        // TODO: Modal 알림 띄우기
        setModalOpen(true);
        setModalMsg('로그인 되었습니다!');
      })
      .catch((err) => console.log(err));
  };

  return (
    // <ContainerRow>
    //   <UDContainer>
    <>
      <div className='login-all'>
        <h2 className='login-title'>Conimals</h2>
        <div className='login-text'>
          이메일
          <br />
          <input
            className='input'
            onChange={handleInputValue('userEmail')}
          ></input>
        </div>
        <div className='login-text'>
          비밀번호
          <br />
          <input
            className='input'
            onChange={handleInputValue('password')}
          ></input>
        </div>
        <button className='btn' onClick={handleLogin}>
          로그인
        </button>
        {/* 상단: 기본 CSS 버튼 / 하단: MUI 버튼  */}
        <Stack className='btn-mui' direction='row'>
          <Button variant='contained' onClick={handleLogin}>
            로그인
          </Button>
        </Stack>
        <Logout />
        Conimals가 처음이신가요?
        <span className='link-signup'>
          <a href='/signup'>회원가입</a>
        </span>
        {modalOpen ? (
          <Modal handleModal={modalHandler}>{modalMsg}</Modal>
        ) : null}
      </div>
    </>
    //   {/* </UDContainer>
    // </ContainerRow> */}
  );
}

export default Login;
