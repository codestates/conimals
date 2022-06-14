import styled from 'styled-components';

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

export const JCContainer = styled(Container)`
  justify-content: center; // 상하 가운데로 정렬
`;

export const TestContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ResultContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ResultInfo = styled.div`
  /* display: flex; */
  position: relative;
  color: gainsboro;
  font-size: 0.1rem;
  text-align: center;
  margin-top: 10%;
  z-index: 2;
`;

export const ResultText = styled.div`
  text-align: center;
  margin: 5%;
  z-index: 2;
`;

export const InnerText = styled.div`
  margin-top: 5%;
`;
