import React, { useState } from 'react';
import Logout from './Logout';
import axios from 'axios';
import { Modal1 } from '../Modal/Modals'
// import dotenv from "dotenv";
// dotenv.config();

function Login() {

  const [loginInfo, setLoginInfo] = useState({
    userEmail: "",
    password: "",
  });

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleLogin = () => {
    const { userEmail, password } = loginInfo;
    
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/users/login`,
        { userEmail: userEmail, password: password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      ).then((res) => 
      {
        if(res.data.data.accessToken) {
          localStorage.setItem('user', res.data.data.accessToken);
        }}).then(() => console.log(localStorage.user))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        email
        <input onChange={handleInputValue("userEmail")}></input>
      </div>
      <div>
        password
        <input onChange={handleInputValue("password")}></input>
      </div>
      <button onClick={handleLogin}>login</button>
      <Logout />

      <Modal1 />
    </>
  );
}

export default Login;
