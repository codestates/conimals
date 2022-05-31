import React, { useState } from 'react';
import Logout from './Logout';
import axios from 'axios';
import Modal from '../Modal/Modals';

// 로그인 성공, 실패 Modal 알림 띄우기
function Login() {
  const [loginInfo, setLoginInfo] = useState({
    userEmail: '',
    password: '',
  });

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
        console.log(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        email
        <input onChange={handleInputValue('userEmail')}></input>
      </div>
      <div>
        password
        <input onChange={handleInputValue('password')}></input>
      </div>
      <button onClick={handleLogin}>login</button>
      <Logout />
    </>
  );
}

export default Login;
