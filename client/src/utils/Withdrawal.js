import React, { useState } from 'react';
import axios from 'axios';

import ConfirmModal from '../components/Modal/ConfirmModals';
import { WithdrawalButton } from '../components/Button';

// useConfirm - confirm 창이 뜨는 이벤트, 상황에 따라 다른 이벤트 부여 가능 //
const useConfirm = (message = '', onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== 'function') return;
  if (onCancel && typeof onCancel !== 'function') return;
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else onCancel();
  };
  return confirmAction;
};

export default function UseConfirm() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalHandler = () => {
    setModalOpen(false);
  };

  const withdrawal = () => {
    if (localStorage.kakao) {
      axios
        .delete(`${process.env.REACT_APP_API_URL}/mypages/withdrawal`, {
          headers: { authorization: `Bearer ${localStorage.kakao}` },
          withCredentials: true,
        })
        .then((res) => {
          localStorage.removeItem('kakao');
          setModalOpen(true);
        });
    }
    axios
      .delete(`${process.env.REACT_APP_API_URL}/mypages/withdrawal`, {
        headers: { authorization: `Bearer ${localStorage.user}` },
        withCredentials: true,
      })
      .then((res) => {
        localStorage.removeItem('user');
        setModalOpen(true);
      });
  };
  const cancel = () => {};
  const confirmDelete = useConfirm(
    '정말로 회원 탈퇴 하시겠습니까?',
    withdrawal,
    cancel
  );
  return (
    <>
      <WithdrawalButton onClick={confirmDelete}>회원탈퇴</WithdrawalButton>
      {modalOpen ? (
        <ConfirmModal handleModal={modalHandler}>
          회원탈퇴가 완료되었습니다.
        </ConfirmModal>
      ) : null}
    </>
  );
}
