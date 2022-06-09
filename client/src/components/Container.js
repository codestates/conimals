import styled from 'styled-components';

import TestBG from '../assets/TestBg.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column; // 아이템들 세로로 정렬
  align-items: center; // 좌우 가운데로 정렬
  width: 100vw;
  min-height: calc(var(--vh, 1vh) * 80);
`;

export const ContainerRow = styled.div`
  display: flex; // 아이템들 가로로 정렬
  width: 100%;
`;

export const ResultContainer = styled(Container)`
  justify-content: center; // 상하 가운데로 정렬
`;

export const TestContainer = styled(Container)`
  justify-content: center; // 상하 가운데로 정렬
  background: url(../assets/TestBg.png);
`;
