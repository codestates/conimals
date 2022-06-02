import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { UDContainer } from '../../components/Container';

export default function TestResults1() {
  const location = useLocation();
  const [username, setUsername] = useState('guest');

  return (
    <>
      <UDContainer>
        <h1>반려동물을 위한 좋은 환경은 무엇일까요?</h1>

        <div>{`${username}님을 위한 조건을 알아보기 위해`}</div>
        <div>저희가 안내하는 동물보호단체에서 제공하는</div>
        <div>입양 조건을 확인해보세요!</div>
        <br />
        <a href='/map'>
          <button>내 주변 보호소 찾기</button>
        </a>
      </UDContainer>
    </>
  );
}
