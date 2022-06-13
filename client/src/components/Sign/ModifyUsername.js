import React, { useState } from 'react';
import axios from 'axios';

import ConfirmModal from '../Modal/ConfirmModals';
import Loading from '../../utils/LoadingIndicator';
import styled from 'styled-components';

const Button = styled.div`
  position: relative;
  border: none;
  display: inline-block;
  padding: 15px 30px;
  border-radius: 15px;
  margin-top: 30px;
  font-family: sans-serif;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
  background-color: indianred;
  color: #ffffff;
`;

function ModifyUsername() {
  const [newUsername, setNewUsername] = useState({
    username: '',
    newUsername: '',
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const modalHandler = () => {
    setModalOpen(false);
  };

  const handleInputValue = (key) => (e) => {
    setNewUsername({ ...newUsername, [key]: e.target.value });
  };

  const handleNewUsername = () => {
    setLoading(true);
    axios
      .patch(
        `http://localhost:8080/mypages/username`,
        {
          userName: newUsername.newUsername,
        },
        {
          headers: { authorization: `Bearer ${localStorage.user}` },
          withCredentials: true,
        }
      )
      .then((res) => {
        setModalOpen(true);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <div>
        <input
          placeholder='변경하실 닉네임를 입력해주세요'
          onChange={handleInputValue('newUsername')}
        />
        <br />
        <Button onClick={handleNewUsername}>닉네임 수정</Button>
      </div>
      {modalOpen ? (
        <ConfirmModal handleModal={modalHandler}>
          닉네임 수정이 완료되었습니다.
        </ConfirmModal>
      ) : null}
    </>
  );
}

export default ModifyUsername;
