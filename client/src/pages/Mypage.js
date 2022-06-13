import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ModifyUsername from '../components/Sign/ModifyUsername';
import ModifyPassword from '../components/Sign/ModifyPassword';
import Withdrawal from '../utils/Withdrawal';
import Loading from '../utils/LoadingIndicator';
import { Container } from '../components/Container';
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
  cursor: pointer;
`;

function Mypage() {
  const [userinfo, setUserinfo] = useState({
    id: '',
    userName: '',
    userEmail: '',
    uploads: '',
  });

  const [modifyMode, setModifyMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const getUserinfo = () => {
    setLoading(true);
    if (localStorage.kakao) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/mypages/auth`, {
          headers: { authorization: `Bearer ${localStorage.kakao}` },
          withCredentials: true,
        })
        .then((res) => {
          setLoading(false);
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
          setLoading(false);
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
  const handleModifyMode = () => {
    setModifyMode(!modifyMode);
  };

  useEffect(() => {
    if (localStorage.getItem('user') || localStorage.getItem('kakao')) {
      getUserinfo();
    }
  }, []);

  return (
    <>
      {loading ? <Loading /> : null}
      {localStorage.getItem('user') || localStorage.getItem('kakao') ? (
        <>
          <Container>
            <h2>{`마이페이지`}</h2>
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
                    닉네임 <input value={userinfo.userName} disabled />
                  </div>
                  <div>
                    이메일{' '}
                    <input value={userinfo.userEmail} type='email' disabled />
                  </div>
                </div>
              </>
            )}
            <br />

            {modifyMode ? (
              <Button onClick={handleModifyMode}>수정완료</Button>
            ) : (
              <Button onClick={handleModifyMode}>회원정보 수정</Button>
            )}
            <br />
            <Withdrawal />
          </Container>
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
