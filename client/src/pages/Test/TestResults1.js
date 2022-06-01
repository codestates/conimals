import React, { useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';

import { UDContainer } from '../../components/Container';

const img = styled.div`
  width: 100%;
  padding: 1rem;
`;

export default function TestResults1() {
  const location = useLocation();
  const [username, setUsername] = useState('guest');
  return (
    <>
      <img className='result-image'></img>
      <UDContainer>
        <h1 className='result-title'>반려동물과 혼연일체!</h1>
        <div>지금 바로 입양을 고려해보셔도 되겠네요!</div>
        <div>{`${username}님과 함께 할 친구를`}</div>
        <div>저희가 안내해드리는 동물 보호단체에서 확인해보세요!</div>
        <br />
        <a href='/map'>
          <button>내 주변 보호소 찾기</button>
        </a>
      </UDContainer>
    </>
  );
}
