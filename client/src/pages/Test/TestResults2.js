import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { UDContainer } from '../../components/Container';

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
      </UDContainer>
    </>
  );
}
