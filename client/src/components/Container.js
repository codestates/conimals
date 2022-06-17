import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column; // 아이템들 세로로 정렬
  align-items: center; // 좌우 가운데로 정렬
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 80);
  overflow: hidden;
`;

export const LoginContainer = styled.div`
  width: 100vw;
  margin-top: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 500px) {
    height: 100%;
    transform: translate(15%, 0%);
  }
`;

export const LoginField = styled.div`
  position: relative;
  text-align: center;
  transform: translate(-110%, 0%);
  z-index: 1;
`;

export const TestContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  transform: translate(0%, -10%);
  /* margin-top: 10%; */
`;

export const ResultContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  transform: translate(0%, -10%);
  margin-top: 10%;
  @media screen and (max-width: 450px) {
    transform: translate(0%, 0%);
  }
`;

export const MypageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10%;
  overflow-x: hidden;
  height: 100vh;
`;

export const MypageContainer2 = styled.div`
  margin: 2%;
  width: 100%;
  justify-content: center;
  text-align: center;
`;

export const ResultInfo = styled.div`
  position: relative;
  color: #bbbbbb;
  font-size: 0.1rem;
  text-align: center;
  margin-top: 10%;
  z-index: 2;
`;

export const ResultText = styled.div`
  text-align: center;
  margin: 5%;
  z-index: 2;
  word-break: keep-all;
  @media screen and (max-width: 450px) {
    h2 {
      font-size: 32px;
    }
    h3 {
      font-size: 24px;
    }
  }
`;

export const InnerText = styled.div`
  margin-top: 5%;
`;

export const KakaoLogin = styled.img`
  width: 30vw;
  height: auto;
  cursor: pointer;
  margin-top: 5%;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const PolicyContainer = styled(Container)`
  text-align: center;
  max-width: 860px;
  margin: 120px auto;
  word-break: keep-all;
`;
