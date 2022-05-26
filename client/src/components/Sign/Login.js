import React, { useState } from 'react';


const axios = require("axios");

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
      "http://localhost:3000/users/login",
      { email: email, password: password},
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
    </>

  );
}

export default Login;
