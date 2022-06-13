import React, { useState } from 'react';
import axios from 'axios';

import ConfirmModal from '../Modal/ConfirmModals';
import passwordValidator from '../../utils/validator';
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

function ModifyPassword() {
  const [newPassword, setNewPassword] = useState({
    password: '',
    newPassword: '',
  });

  const [errMsg, setErrMsg] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const modalHandler = () => {
    setModalOpen(false);
  };

  const handleInputValue = (key) => (e) => {
    setNewPassword({ ...newPassword, [key]: e.target.value });
  };

  const handleNewPassword = () => {
    setLoading(true);
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
        setModalOpen(true);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  const checkPasswordBlur = (e) => {
    if (!passwordValidator(e.target.value)) {
      setErrMsg('8자 이상의 영문, 숫자 조합이어야 합니다.');
    }
  };

  return (
    <>
      {loading ? <Loading /> : null}
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
      <Button onClick={handleNewPassword}>비밀번호 수정</Button>
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
