import React, { useState } from 'react';
import Logout from './Logout';
import axios from 'axios';


function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleLogin = () => {
    const { email, password } = loginInfo;
    
    axios.post(
      "http://localhost:8080/users/login",
      { email: email, password: password },
      {
        headers: { 'Content-Type': 'application/json'},
        withCredentials: true,
      }).catch(err => console.log(err))
    }
  

  return (
    <>    
      <div>email
        <input onChange={handleInputValue('email')}></input>
      </div>
      <div>password
        <input onChange={handleInputValue('password')}></input>
      </div>
      <button onClick={handleLogin}>login</button>
      <Logout />
    </>

  );
}

export default Login;
