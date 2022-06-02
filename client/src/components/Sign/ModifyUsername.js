import React, { useState } from 'react';
import axios from 'axios';

import Modal from '../Modal/Modals';

function ModifyUsername() {
  const [newUsername, setNewUsername] = useState({
    username: '',
    newUsername: '',
  });
  const [modalOpen, setModalOpen] = useState(false);

  const modalHandler = () => {
    setModalOpen(false);
  };

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
        setModalOpen(true);
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
      <button onClick={handleNewUsername}>닉네임 수정</button>
      {modalOpen ? (
        <Modal handleModal={modalHandler}>닉네임 수정이 완료되었습니다.</Modal>
      ) : null}
    </>
  );
}

export default ModifyUsername;
