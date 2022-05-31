import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const axios = require('axios');

function Signup() {
  const navigate = useNavigate();

  const [userinfo, setUserinfo] = useState({
    userName: '',
    userEmail: '',
    password: '',
  });

  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userEmail, setEmail] = useState('');

  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [validatedAll, setValidatedAll] = useState(false);

  const handleInputValue = (key) => (e) => {
    setUserinfo({ ...userinfo, [key]: e.target.value });
  };

  const checkPassword = (e) => {
    const regExp = /(?=.*\d)(?=.*[a-zA-ZS]).{8,}/;
    setPassword(e.target.value);
    if (regExp.test(e.target.value)) {
      setPasswordError(false);
    } else setPasswordError(true);
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeEmail = (e) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!e.target.value || emailRegex.test(e.target.value))
      setEmailError(false);
    else setEmailError(true);
    setEmail(e.target.value);
  };

  const checkPasswordMatch = (e) => {
    if (e.target.value === password) setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setConfirmPassword(e.target.value);
  };

  const handleButtonValid = () => {
    validation();
    if (!validatedAll) alert('조건에 맞게 모든 칸을 작성해주세요');
    else onSubmit();
  };

  const validation = () => {
    // 만약, vaildate가 모두 통과되지 않았으면 false, 전부 통과하면 true
    if (!passwordError || !confirmPasswordError || !emailError) {
      setValidatedAll(true);
    }
  };

  const onSubmit = () => {
    console.log({ ...userinfo });
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/users/signup`,
        { ...userinfo },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
          // "rejectUnauthorized": false
        }
      )
      .then((res) => console.log(res));
    alert('축하합니다. 회원가입이 되었습니다!');
  };

  return (
    <>
      <div className='signupPage'>
        <div className='desc input-title'>이메일</div>
        {emailError ? (
          <div className='validate-text'>이메일 형식에 맞춰 작성해주세요.</div>
        ) : null}
        <input
          type='text'
          className='input-signup'
          placeholder='example@gmail.com'
          onBlur={onChangeEmail}
          onChange={handleInputValue('userEmail')}
        />
        <div className='desc input-title'>닉네임</div>
        <input
          type='text'
          className='input-signup'
          placeholder='Petmily'
          onBlur={onChangeUsername}
          onChange={handleInputValue('userName')}
        />
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
          onBlur={checkPassword}
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
          onChange={checkPasswordMatch}
        />

        <button className='signup-btn' onClick={handleButtonValid}>
          회원가입
        </button>
      </div>
    </>
  );
}

export default Signup;
