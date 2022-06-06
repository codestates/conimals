import React, { useState } from 'react';
import axios from 'axios';

import ConfirmModal from '../Modal/ConfirmModals';
import passwordValidator from '../../utils/validator';

function ModifyPassword() {
  const [newPassword, setNewPassword] = useState({
    password: '',
    newPassword: '',
  });

  const [errMsg, setErrMsg] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const modalHandler = () => {
    setModalOpen(false);
  };

  const handleInputValue = (key) => (e) => {
    setNewPassword({ ...newPassword, [key]: e.target.value });
  };

  const handleNewPassword = () => {
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/mypages/password`,
        {
          password: newPassword.password,
          changedPassword: newPassword.newPassword,
        },
        {
          headers: { authorization: `Bearer ${localStorage.user}` },
          withCredentials: true,
        }
      )
      .then((res) => {
        // TODO: Modal 알림 띄우기
        setModalOpen(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const checkPasswordBlur = (e) => {
    if (!passwordValidator(e.target.value)) {
      setErrMsg('8자 이상의 영문, 숫자 조합이어야 합니다.');
    }
  };

  return (
    <>
      <div>비밀번호 변경</div>
      <input
        placeholder='기존 비밀번호를 입력해주세요'
        onChange={handleInputValue('password')}
      />
      <br />
      <input
        placeholder='변경하실 비밀번호를 입력해주세요'
        onChange={handleInputValue('newPassword')}
        onBlur={() => checkPasswordBlur}
      />
      <br />
      {errMsg}
      <br />
      <button onClick={handleNewPassword}>비밀번호 수정</button>
      <br />
      {modalOpen ? (
        <ConfirmModal handleModal={modalHandler}>
          비밀번호 수정이 완료되었습니다.
        </ConfirmModal>
      ) : null}
    </>
  );
}

export default ModifyPassword;
