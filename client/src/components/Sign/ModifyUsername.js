import React, { useState } from 'react';
import axios from 'axios';

function ModifyUsername() {
  const [newUsername, setNewUsername] = useState({
    username: '',
    newUsername: '',
  });

  const handleInputValue = (key) => (e) => {
    setNewUsername({ ...newUsername, [key]: e.target.value });
  };

  const handleNewUsername = () => {
    axios
      .patch(
        `http://localhost:8080/mypages/username`,
        {
          userName: newUsername.newUsername,
        },
        {
          headers: { authorization: `Beraer ${localStorage.user}` },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <input
        placeholder='변경하실 닉네임를 입력해주세요'
        onChange={handleInputValue('newUsername')}
      />
      <button onClick={handleNewUsername}>Submit</button>
    </>
  );
}

export default ModifyUsername;
