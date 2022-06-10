import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ConfirmModal from '../components/Modal/ConfirmModals';
import ModifyUsername from '../components/Sign/ModifyUsername';
import ModifyPassword from '../components/Sign/ModifyPassword';
import { Container } from '../components/Container';

function Mypage() {
  const [userinfo, setUserinfo] = useState({
    id: '',
    userName: '',
    userEmail: '',
    uploads: '',
    // userType: '' -> 차후 어드민 계정, 카카오 로그인 계정 구분 시 활용 가능
  });

  const [modifyMode, setModifyMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const modalHandler = () => {
    setModalOpen(false);
  };

  const getUserinfo = () => {
    if (localStorage.kakao) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/mypages/auth`, {
          headers: { authorization: `Bearer ${localStorage.kakao}` },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          setUserinfo({
            id: res.data.data.id,
            userId: res.data.data.id,
            userName: res.data.data.userName,
            userEmail: res.data.data.userEmail,
            uploads: res.data.data.uploads,
          });
        });
    } else {
      axios
        .get(`${process.env.REACT_APP_API_URL}/mypages/auth`, {
          headers: { authorization: `Bearer ${localStorage.user}` },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          setUserinfo({
            id: res.data.data.id,
            userId: res.data.data.id,
            userName: res.data.data.userName,
            userEmail: res.data.data.userEmail,
            uploads: res.data.data.uploads,
          });
        });
    }
  };

  const handleWithdrawal = () => {
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
        console.log(res);
      });
  };

  const handleModifyMode = () => {
    setModifyMode(!modifyMode);
  };

  useEffect(() => {
    if (localStorage.getItem('user') || localStorage.getItem('kakao')) {
      getUserinfo();
    }
  }, []);

  return (
    // 회원 정보 수정 버튼 클릭 시 수정 가능 필드로 전환, 수정 완료 버튼으로 버튼 교체
    // 수정 완료 버튼 클릭시 axios 전송, .then => 수정 불가 필드로 전환
    <>
      <div>Mypage</div>
      {localStorage.getItem('user') || localStorage.getItem('kakao') ? (
        <>
          <div>{`${userinfo.userName}님의 마이페이지 입니다.`}</div>
          {modifyMode ? (
            <>
              <ModifyPassword />
              <br />
              <ModifyUsername />
              <br />
            </>
          ) : (
            <>
              <br />
              <div>
                <div>
                  닉네임: <input value={userinfo.userName} disabled />
                </div>
                <div>
                  이메일:{' '}
                  <input value={userinfo.userEmail} type='email' disabled />
                </div>
                <div>
                  비밀번호:{' '}
                  <input value={userinfo.password} type='password' disabled />
                </div>
              </div>
            </>
          )}
          {/* // TODO: 탈퇴 버튼 클릭 시 확인 / 취소 comfirm 창 표출, 분기에 따른 취소 가능 */}
          <br />

          {modifyMode ? (
            <button onClick={handleModifyMode}>수정완료</button>
          ) : (
            <button onClick={handleModifyMode}>회원정보 수정</button>
          )}
          <div className='withdrawal'>
            <button onClick={handleWithdrawal}>회원탈퇴</button>
          </div>
          {modalOpen ? (
            <ConfirmModal handleModal={modalHandler}>
              회원탈퇴가 완료되었습니다.
            </ConfirmModal>
          ) : null}
        </>
      ) : (
        <Container>
          <div>non-login</div>
        </Container>
      )}
    </>
  );
}

export default Mypage;
