import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
=======
import {
  passwordValidator,
  passwordMatchValidator,
  nicknameValidator,
  emailValidator,
} from '../../utils/validator';
import Modal from '../Modal/Modals';
>>>>>>> 6f9e8b1e6017a3f1ff906d680dd39946b550381b

const axios = require('axios');

function Signup() {
  const navigate = useNavigate();

  const [userinfo, setUserinfo] = useState({
    userName: '',
    userEmail: '',
    password: '',
<<<<<<< HEAD
  });

  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userEmail, setEmail] = useState('');

  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
=======
    retypePassword: '',
  });

  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
>>>>>>> 6f9e8b1e6017a3f1ff906d680dd39946b550381b
  const [emailError, setEmailError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const modalHandler = () => {
    setModalOpen(false);
  };

<<<<<<< HEAD
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
=======
  const handleInputValue = (key) => (e) => {
    setUserinfo({ ...userinfo, [key]: e.target.value });
>>>>>>> 6f9e8b1e6017a3f1ff906d680dd39946b550381b
  };

  const onSubmit = () => {
    setPasswordError(false);
    setConfirmPasswordError(false);
    setEmailError(false);
    setUsernameError(false);
    console.log({ ...userinfo });
<<<<<<< HEAD
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
=======
    if (
      !emailValidator(userinfo.userEmail) ||
      !nicknameValidator(userinfo.userName) ||
      !passwordValidator(userinfo.password) ||
      !passwordMatchValidator(userinfo.password, userinfo.retypePassword)
    ) {
      if (!emailValidator(userinfo.userEmail)) {
        setEmailError(true);
      }
      if (!nicknameValidator(userinfo.userName)) {
        setUsernameError(true);
      }
      if (!passwordValidator(userinfo.password)) {
        setPasswordError(true);
      }
      if (!passwordMatchValidator(userinfo.password, userinfo.retypePassword)) {
        setConfirmPasswordError(true);
      }
    } else {
      axios
        .post(
          `http://localhost:8080/users/signup`,
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
      // TODO: Modal로 구현하기
      setModalOpen(true);
    }
>>>>>>> 6f9e8b1e6017a3f1ff906d680dd39946b550381b
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
<<<<<<< HEAD
          onBlur={onChangeEmail}
=======
>>>>>>> 6f9e8b1e6017a3f1ff906d680dd39946b550381b
          onChange={handleInputValue('userEmail')}
        />
        <div className='desc input-title'>닉네임</div>
        <input
          type='text'
          className='input-signup'
          placeholder='Petmily'
<<<<<<< HEAD
          onBlur={onChangeUsername}
          onChange={handleInputValue('userName')}
        />
=======
          onChange={handleInputValue('userName')}
          maxLength='12'
        />
        {usernameError ? (
          <div className='validate-text'>
            1~12자의 영문, 숫자, 한글이 사용 가능 합니다.
          </div>
        ) : null}
>>>>>>> 6f9e8b1e6017a3f1ff906d680dd39946b550381b
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
<<<<<<< HEAD
          onBlur={checkPassword}
=======
>>>>>>> 6f9e8b1e6017a3f1ff906d680dd39946b550381b
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
<<<<<<< HEAD
          onChange={checkPasswordMatch}
        />

        <button className='signup-btn' onClick={handleButtonValid}>
=======
          onChange={handleInputValue('retypePassword')}
        />

        <button className='signup-btn' onClick={onSubmit}>
>>>>>>> 6f9e8b1e6017a3f1ff906d680dd39946b550381b
          회원가입
        </button>
      </div>

      {modalOpen ? (
        <Modal handleModal={modalHandler}>
          축하합니다. 회원가입이 되었습니다!
        </Modal>
      ) : null}
    </>
  );
}

export default Signup;
