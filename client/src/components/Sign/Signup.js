import React, { useState } from 'react';
import {
  passwordValidator,
  passwordMatchValidator,
  nicknameValidator,
  emailValidator,
} from '../../utils/validator';

import Logo from '../../assets/Conimals_logo_horizontal1.png';
import ConfirmModal from '../Modal/ConfirmModals';
import Loading from '../../utils/LoadingIndicator';
import SignupsImg from '../../assets/signup.png';
import { Button } from '../../components/Button';
import { ShadowBigInput } from '../Input';

import styled from 'styled-components';

const axios = require('axios');

const SignupContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  margin-top: 100px;
`;

const SignupField = styled.div`
  width: 55vw;
  height: 55vw;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 9;
`;

const SignupImg = styled.img`
  width: 60%;
`;

const InputTitle = styled.div`
  margin-top: 5%;
  margin-left: 20%;
  font-size: 20px;
  text-align: left;
`;

const ValidateText = styled.div`
  color: rgb(146, 17, 17);
  font-size: 15px;
  margin-top: 2%;
`;

const SignupLogin = styled.div`
  width: 50%;
  margin-top: 5%;
  margin-left: 20%;
`;

const LoginLink = styled.a`
  margin-left: 10%;
  color: steelblue;
  &:hover {
    color: skyblue;
  }
`;
function Signup() {
  const [userinfo, setUserinfo] = useState({
    userName: '',
    userEmail: '',
    password: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const modalHandler = () => {
    setModalOpen(false);
  };

  const handleInputValue = (key) => (e) => {
    setUserinfo({ ...userinfo, [key]: e.target.value });
  };

  const onSubmit = () => {
    setPasswordError(false);
    setConfirmPasswordError(false);
    setEmailError(false);
    setUsernameError(false);
    setLoading(true);
    if (!emailValidator(userinfo.userEmail)) {
      setEmailError(true);
      setLoading(false);
    }
    if (!nicknameValidator(userinfo.userName)) {
      setUsernameError(true);
      setLoading(false);
    }
    if (!passwordValidator(userinfo.password)) {
      setPasswordError(true);
      setLoading(false);
    }
    if (!passwordMatchValidator(userinfo.password, userinfo.retypePassword)) {
      setConfirmPasswordError(true);
      setLoading(false);
    } else {
      axios.post(
        `${process.env.REACT_APP_API_URL}/users/signup`,
        {
          userName: userinfo.userName,
          userEmail: userinfo.userEmail,
          password: userinfo.password,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      setModalOpen(true);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <SignupContainer>
        <SignupImg src={SignupsImg} alt='signup-img'></SignupImg>
        <SignupField>
          <div>
            <img src={Logo} alt='coniamls-logo' />
          </div>
          <h3>회원가입</h3>
          <InputTitle>이메일</InputTitle>

          <ShadowBigInput
            type='text'
            className='input-signup'
            placeholder='example@gmail.com'
            onChange={handleInputValue('userEmail')}
          />
          {emailError ? (
            <ValidateText>이메일 형식에 맞춰 작성해주세요.</ValidateText>
          ) : null}
          <InputTitle>닉네임</InputTitle>
          <ShadowBigInput
            type='text'
            className='input-signup'
            placeholder='Petmily'
            onChange={handleInputValue('userName')}
            maxLength='12'
          />
          {usernameError ? (
            <ValidateText>
              1~12자의 영문, 숫자, 한글이 사용 가능 합니다.
            </ValidateText>
          ) : null}
          <InputTitle>비밀번호</InputTitle>

          <ShadowBigInput
            type='text'
            className='input-signup'
            placeholder='8자 이상의 영문, 숫자를 입력해주세요'
            onChange={handleInputValue('password')}
          />
          {passwordError ? (
            <ValidateText>
              8자 이상의 영문, 숫자를 입력해야 합니다.
            </ValidateText>
          ) : null}
          <InputTitle>비밀번호 확인</InputTitle>

          <ShadowBigInput
            type='text'
            className='input-signup'
            placeholder='8자 이상의 영문, 숫자를 입력해주세요'
            onChange={handleInputValue('retypePassword')}
          />
          {confirmPasswordError ? (
            <ValidateText>비밀번호가 다릅니다.</ValidateText>
          ) : null}
          <br />
          <Button onClick={onSubmit}>회원가입</Button>

          <SignupLogin>
            이미 회원이신가요? <LoginLink href='/login'>로그인</LoginLink>
          </SignupLogin>
        </SignupField>
      </SignupContainer>

      {modalOpen ? (
        <ConfirmModal handleModal={modalHandler}>
          축하합니다. 회원가입이 되었습니다!
        </ConfirmModal>
      ) : null}
    </>
  );
}

export default Signup;
