import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResultVector from '../../assets/TestResultVector';
import ResultVector2 from '../../assets/TestResultVector2';
import {
  ResultContainer,
  ResultInfo,
  ResultText,
  InnerText,
} from '../../components/Container';
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

export default function TestResults1() {
  const [username, setUsername] = useState('guest');

  const getUserinfo = () => {
    if (localStorage.kakao) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/mypages/auth`, {
          headers: { authorization: `Bearer ${localStorage.kakao}` },
          withCredentials: true,
        })
        .then((res) => {
          setUsername(res.data.data.userName);
        });
    } else {
      axios
        .get(`${process.env.REACT_APP_API_URL}/mypages/auth`, {
          headers: { authorization: `Bearer ${localStorage.user}` },
          withCredentials: true,
        })
        .then((res) => {
          setUsername(res.data.data.userName);
        });
    }
  };

  useEffect(() => {
    if (localStorage.getItem('user') || localStorage.getItem('kakao')) {
      getUserinfo();
    }
  }, []);

  return (
    <>
      <ResultContainer>
        <ResultVector />
        <ResultText>
          <ResultVector2 />
          <h2>반려동물을 위한 좋은 환경은 무엇일까요?</h2>
          <InnerText>
            <h3>
              {`${username}님의 환경에 맞는 조건을 알아보시려면`}
              <br />
              저희가 안내하는 동물보호단체에서 제공하는
              <br />
              입양 조건을 확인해보세요!
            </h3>
          </InnerText>
          <br />
          <a href='/map'>
            <Button>내 주변 보호소 찾기</Button>
          </a>
          <ResultInfo>
            <h6>
              이 테스트가 반려동물과 함께하는 것을 결정짓는 절대적인 기준이
              되지는 않습니다.
              <br />더 자세한 사항은 동물보호단체 등에 나와있는 입양 조건 및
              동의 항목을 참고해 주세요.
            </h6>
          </ResultInfo>
        </ResultText>
      </ResultContainer>
    </>
  );
}
