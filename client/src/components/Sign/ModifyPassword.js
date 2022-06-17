import React, { useState } from 'react';
import axios from 'axios';

import ConfirmModal from '../Modal/ConfirmModals';
import passwordValidator from '../../utils/validator';
import Loading from '../../utils/LoadingIndicator';
import { MypageContainer2 } from '../Container';
import { EditInput, Line } from '../Input';
import { Button } from '../Button';

function ModifyPassword() {
  const [newPassword, setNewPassword] = useState({
    password: '',
    changedPassword: '',
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
          changedPassword: newPassword.changedPassword,
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

  const checkPasswordBlur = (e) => {
    if (!passwordValidator(e.target.value)) {
      setErrMsg('8자 이상의 영문, 숫자 조합이어야 합니다.');
    }
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <MypageContainer2>
        <div>
          <h4>비밀번호 변경</h4>
        </div>
        <br />
        <EditInput
          type='password'
          placeholder='기존 비밀번호를 입력해주세요'
          onChange={handleInputValue('password')}
        />
        <br />
        <EditInput
          type='password'
          placeholder='변경하실 비밀번호를 입력해주세요'
          onChange={handleInputValue('changedPassword')}
          onBlur={() => checkPasswordBlur}
        />
        {errMsg}
        <br />
        <Button onClick={handleNewPassword}>비밀번호 변경</Button>
        {modalOpen ? (
          <ConfirmModal handleModal={modalHandler}>
            비밀번호 수정이 완료되었습니다.
          </ConfirmModal>
        ) : null}
        <Line />
      </MypageContainer2>
    </>
  );
}

export default ModifyPassword;
