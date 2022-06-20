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
import { Button } from '../../components/Button';

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
          <h2>반려동물과 함께 할 준비가 충분하시군요!</h2>
          <InnerText>
            <h3>
              {username}님과 함께 할 친구를
              <br />
              동물 보호단체에서 확인해보세요!
            </h3>
          </InnerText>
          <br />
          <a href='/map'>
            <Button>보호소 찾기</Button>
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
