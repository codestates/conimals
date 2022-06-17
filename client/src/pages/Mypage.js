import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ModifyUsername from '../components/Sign/ModifyUsername';
import ModifyPassword from '../components/Sign/ModifyPassword';
import { EditInput, Line } from '../components/Input';
import { MypageContainer, MypageContainer2 } from '../components/Container';
import { EditButton } from '../components/Button';

import Withdrawal from '../utils/Withdrawal';
import Loading from '../utils/LoadingIndicator';

import MypageVector from '../assets/MypageVector';

const TextContainer = styled.div`
  flex-direction: column;
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
          console.log(res);
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
          <MypageContainer>
            <MypageVector />
            <TextContainer>
              <MypageContainer2>
                <h3>{`${userinfo.userName}님의 마이페이지`}</h3>
                <br />
                <br />
              </MypageContainer2>
              <br />
              {modifyMode ? (
                <>
                  <ModifyUsername />
                  <br />
                  {localStorage.kakao ? null : (
                    <>
                      <ModifyPassword />
                      <br />
                    </>
                  )}
                </>
              ) : (
                <>
                  <MypageContainer2>
                    <div>
                      <h4>닉네임</h4>
                    </div>
                    <EditInput value={userinfo.userName} disabled />
                    <br />
                    <br />
                    {userinfo.userEmail ? (
                      <>
                        <div>
                          <h4>이메일</h4>
                        </div>
                        <EditInput
                          value={userinfo.userEmail}
                          type='email'
                          disabled
                        />
                      </>
                    ) : null}
                  </MypageContainer2>
                </>
              )}
              <MypageContainer2>
                {modifyMode ? (
                  <>
                    <EditButton onClick={handleModifyMode}>수정완료</EditButton>
                  </>
                ) : (
                  <>
                    <EditButton onClick={handleModifyMode}>
                      회원정보 수정
                    </EditButton>
                    <Line />
                  </>
                )}
                <br />
                <Withdrawal />
              </MypageContainer2>
            </TextContainer>
          </MypageContainer>
        </>
      ) : (
        <>'non-logined'</>
      )}
    </>
  );
}

export default Mypage;
