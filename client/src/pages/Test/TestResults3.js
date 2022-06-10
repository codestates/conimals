import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { ResultContainer } from '../../components/Container';
import styled from 'styled-components';

const ResultInfo = styled.div`
  font-size: 0.1rem;
  text-align: center;
  padding: 1rem;
`;

export default function TestResults1() {
  const location = useLocation();
  const [username, setUsername] = useState('guest');

  return (
    <>
      <ResultContainer>
        <h1>반려동물을 위한 좋은 환경은 무엇일까요?</h1>

        <div>{`${username}님을 위한 조건을 알아보기 위해`}</div>
        <div>저희가 안내하는 동물보호단체에서 제공하는</div>
        <div>입양 조건을 확인해보세요!</div>
        <br />
        <a href='/map'>
          <button>내 주변 보호소 찾기</button>
        </a>
        <ResultInfo>
          <div>
            이 테스트가 반려동물과 함께하는 것을 결정짓는 절대적인 기준이 되지는
            않습니다.
          </div>
          <div>
            더 자세한 사항은 동물보호단체 등에 나와있는 입양 조건 및 동의 항목을
            참고해 주세요.
          </div>
        </ResultInfo>
      </ResultContainer>
    </>
  );
}
