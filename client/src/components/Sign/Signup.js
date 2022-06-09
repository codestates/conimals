import React, { useState } from 'react';
import {
  passwordValidator,
  passwordMatchValidator,
  nicknameValidator,
  emailValidator,
} from '../../utils/validator';
import ConfirmModal from '../Modal/ConfirmModals';
import Loading from '../../utils/LoadingIndicator';
import './Signup.css';

const axios = require('axios');

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
    if (
      !emailValidator(userinfo.userEmail) ||
      !nicknameValidator(userinfo.userName) ||
      !passwordValidator(userinfo.password) ||
      !passwordMatchValidator(userinfo.password, userinfo.retypePassword)
    ) {
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
      }
    } else {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/users/signup`,
          {
            userName: userinfo.userName,
            userEmail: userinfo.userEmail,
            password: userinfo.password,
          },
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
            // "rejectUnauthorized": false
          }
        )
        .then((res) => console.log(res));
      setModalOpen(true);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <div className='signup-page'>
        <div className='desc input-title'>이메일</div>
        {emailError ? (
          <div className='validate-text'>이메일 형식에 맞춰 작성해주세요.</div>
        ) : null}
        <input
          type='text'
          className='input-signup'
          placeholder='example@gmail.com'
          onChange={handleInputValue('userEmail')}
        />
        <div className='desc input-title'>닉네임</div>
        <input
          type='text'
          className='input-signup'
          placeholder='Petmily'
          onChange={handleInputValue('userName')}
          maxLength='12'
        />
        {usernameError ? (
          <div className='validate-text'>
            1~12자의 영문, 숫자, 한글이 사용 가능 합니다.
          </div>
        ) : null}
        <div className='desc input-title'>비밀번호</div>
        {passwordError ? (
          <div className='validate-text'>
            8자 이상의 영문, 숫자를 입력해야 합니다.
          </div>
        ) : null}
        <input
          type='text'
          className='input-signup'
          placeholder='8자 이상의 영문, 숫자를 입력해주세요'
          onChange={handleInputValue('password')}
        />
        <div className='desc input-title'>비밀번호 확인</div>
        {confirmPasswordError ? (
          <div className='validate-text'>비밀번호가 다릅니다.</div>
        ) : null}
        <input
          type='text'
          className='input-signup'
          placeholder='8자 이상의 영문, 숫자를 입력해주세요'
          onChange={handleInputValue('retypePassword')}
        />
        <br />
        <button className='signup-btn' onClick={onSubmit}>
          회원가입
        </button>
      </div>

      {modalOpen ? (
        <ConfirmModal handleModal={modalHandler}>
          축하합니다. 회원가입이 되었습니다!
        </ConfirmModal>
      ) : null}
    </>
  );
}

export default Signup;
