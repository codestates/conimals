import React, { useState } from 'react';
import axios from 'axios';

function ModifyPassword() {

  const [newPassword, setNewPassword] = useState({
    password: '',
    newPassword: '',
    retypeNewPassword: ''
  })

  const handleInputValue = (key) => (e) => {
    setNewPassword({ ...newPassword, [key]: e.target.value });
  };

  const handleNewPassword = () => {
    axios
      .patch(
        `http://localhost:8080/users/password`,
        {
          oldPassword: newPassword.password,
          newPassword: newPassword.newPassword,
        },
        { withCredentials: true },
      )
      .then(res => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      })
    }

  return (
  <>
    <input 
      placeholder='og-password' 
      onChange={ handleInputValue('password') }
    />
    <input 
      placeholder='변경하실 비밀번호를 입력해주세요' 
      onChange={ handleInputValue('newPassword') }
    />
    <input 
      placeholder='새로운 비밀번호를 다시 입력해주세요' 
      onChange={ handleInputValue('retypeNewPassword') }
    />
    <button onClick={ handleNewPassword }>Submit</button>
  </>
  )
}

export default ModifyPassword;
