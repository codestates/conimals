import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import ConfirmModal from '../Modal/ConfirmModals';
import KakaoLoginImg from '../../img/kakao_login_large_wide.png';
import Logo from '../../assets/Conimals_logo_horizontal1.png';
import Loading from '../../utils/LoadingIndicator';
import LoginVector from '../../assets/LoginVector';
import {
  LoginContainer,
  KakaoLogin,
  LoginField,
} from '../../components/Container';
import { Button, GuestButton } from '../../components/Button';
import { BigInput } from '../Input';

import styled from 'styled-components';

export const SignupButton = styled.h3`
  margin-left: 5%;
`;

export const SignupLine = styled.div`
  margin: 5%;
`;

export const LoginText = styled.div`
  margin-top: 5%;
  font-size: 20px;
  text-align: left;
`;

// 로그인 성공, 실패 Modal 알림 띄우기
function Login() {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const [loginInfo, setLoginInfo] = useState({
    userEmail: '',
    password: '',
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const toSignup = () => {
    navigate('/signup');
  };

  const modalHandler = () => {
    setModalOpen(false);
  };

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  // 받은 인가코드를 KakaoLogin 컴포넌트에서 서버로 전달
  const kakaoLoginHandler = (e) => {
    e.preventDefault();
    window.location.assign(
      `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`
    );
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleLogin = () => {
    setLoading(true);
    const { userEmail, password } = loginInfo;
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/users/login`,
        { userEmail: userEmail, password: password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      .then((res) => {
        if (
          localStorage.getItem('guest') ||
          localStorage.getItem('first-guest')
        ) {
          localStorage.removeItem('guest');
          localStorage.removeItem('first-guest');
        }
        if (res.data.data.accessToken) {
          localStorage.setItem('user', res.data.data.accessToken);
        }
        setModalOpen(true);
        setModalMsg('로그인 되었습니다!');
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <LoginContainer>
        <LoginVector />
        <LoginField>
          <img src={Logo} alt='coniamls-logo'></img>
          <div>
            <h3>로그인</h3>
          </div>
          <div>
            <LoginText>이메일</LoginText>
            <br />
            <BigInput
              type='email'
              placeholder='conimals@gmail.com'
              onChange={handleInputValue('userEmail')}
              ref={inputRef}
            />
          </div>

          <div>
            <LoginText>비밀번호</LoginText>
            <br />
            <BigInput
              type='password'
              placeholder='8자 이상의 영문과 숫자'
              className='input'
              onChange={handleInputValue('password')}
            />
          </div>
          <div>
            <Button onClick={handleLogin}>로그인</Button>
          </div>
          <SignupLine>
            <span>
              Conimals가 처음이신가요?
              <SignupButton>
                <GuestButton onClick={toSignup}>회원가입</GuestButton>
              </SignupButton>
            </span>
          </SignupLine>
          <hr className='line' />
          <KakaoLogin
            src={KakaoLoginImg}
            alt='kakao-login-img'
            onClick={kakaoLoginHandler}
          />
        </LoginField>
      </LoginContainer>
      {modalOpen ? (
        <ConfirmModal handleModal={modalHandler}>{modalMsg}</ConfirmModal>
      ) : null}
    </>
  );
}

export default Login;
