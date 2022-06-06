import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { UDContainer } from '../../components/Container';
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
      <UDContainer>
        <h1>반려동물과 함께 할 준비가 충분히 되셨군요!</h1>
        <div>{`${username}님과 함께 할 친구를`}</div>
        <div>저희가 안내드리는 동물 보호단체에서 확인해보세요!</div>
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
      </UDContainer>
    </>
  );
}
