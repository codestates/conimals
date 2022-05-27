import React, { useState } from 'react';
import axios from 'axios';

function ModifyUsername() {

  const [newUsername, setNewUsername] = useState({
    username: '',
    newUsername: '',
  })

  const handleInputValue = (key) => (e) => {
    setNewUsername({ ...newUsername, [key]: e.target.value });
  };

  const handleNewUsername = () => {
    axios
      .patch(
        `http://localhost:8080/users/username`,
        {
          oldUsername: newUsername.username,
          newUsername: newUsername.newUsername,
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
      placeholder='og-username' 
      onChange={ handleInputValue('Username') }
    />
    <input 
      placeholder='변경하실 닉네임를 입력해주세요' 
      onChange={ handleInputValue('newUsername') }
    />
    <button onClick={ handleNewUsername }>Submit</button>
  </>
  )
}

export default ModifyUsername;
