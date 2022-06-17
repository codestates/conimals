import React, { useState } from 'react';
import axios from 'axios';

import ConfirmModal from '../Modal/ConfirmModals';
import Loading from '../../utils/LoadingIndicator';
import { MypageContainer2 } from '../Container';
import { EditInput, Line } from '../Input';
import { Button } from '../Button';

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
        `${process.env.REACT_APP_API_URL}/mypages/username`,
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
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <MypageContainer2>
        <div>
          <h4>닉네임 변경 </h4>
        </div>
        <EditInput
          type='text'
          placeholder='변경하실 닉네임를 입력해주세요'
          onChange={handleInputValue('newUsername')}
        />

        <div>
          <Button onClick={handleNewUsername}>닉네임 변경</Button>
        </div>
      </MypageContainer2>

      {modalOpen ? (
        <ConfirmModal handleModal={modalHandler}>
          닉네임 수정이 완료되었습니다.
        </ConfirmModal>
      ) : null}
      <Line />
    </>
  );
}

export default ModifyUsername;
