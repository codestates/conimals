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
          <h3>????????????</h3>
          <InputTitle>?????????</InputTitle>

          <ShadowBigInput
            type='text'
            className='input-signup'
            placeholder='example@gmail.com'
            onChange={handleInputValue('userEmail')}
          />
          {emailError ? (
            <ValidateText>????????? ????????? ?????? ??????????????????.</ValidateText>
          ) : null}
          <InputTitle>?????????</InputTitle>
          <ShadowBigInput
            type='text'
            className='input-signup'
            placeholder='Petmily'
            onChange={handleInputValue('userName')}
            maxLength='12'
          />
          {usernameError ? (
            <ValidateText>
              1~12?????? ??????, ??????, ????????? ?????? ?????? ?????????.
            </ValidateText>
          ) : null}
          <InputTitle>????????????</InputTitle>

          <ShadowBigInput
            type='text'
            className='input-signup'
            placeholder='8??? ????????? ??????, ????????? ??????????????????'
            onChange={handleInputValue('password')}
          />
          {passwordError ? (
            <ValidateText>
              8??? ????????? ??????, ????????? ???????????? ?????????.
            </ValidateText>
          ) : null}
          <InputTitle>???????????? ??????</InputTitle>

          <ShadowBigInput
            type='text'
            className='input-signup'
            placeholder='8??? ????????? ??????, ????????? ??????????????????'
            onChange={handleInputValue('retypePassword')}
          />
          {confirmPasswordError ? (
            <ValidateText>??????????????? ????????????.</ValidateText>
          ) : null}
          <br />
          <Button onClick={onSubmit}>????????????</Button>

          <SignupLogin>
            ?????? ??????????????????? <LoginLink href='/login'>?????????</LoginLink>
          </SignupLogin>
        </SignupField>
      </SignupContainer>

      {modalOpen ? (
        <ConfirmModal handleModal={modalHandler}>
          ???????????????. ??????????????? ???????????????!
        </ConfirmModal>
      ) : null}
    </>
  );
}

export default Signup;
