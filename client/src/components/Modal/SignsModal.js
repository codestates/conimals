import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button, EditButton, GuestButton } from '../Button';

export const ModalContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 998;
`;

export const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40rem;
  height: 30rem;
  border-radius: 1rem;
  position: relative;
  > div.close-btn {
    position: absolute;
    top: 2px;
    right: 7px;
    cursor: pointer;
    color: black;
    font-size: 2rem;
  }
`;

export const SignButton = styled.button`
  width: 30%;
  margin: 5%;
  position: relative;
  padding: 1% 5%;
  border-radius: 15px;
  font-family: sans-serif;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  font-weight: 600;
  transition: 0.25s;
  cursor: pointer;
  z-index: 999;
`;

export const TextPoint = styled.span`
  color: blueviolet;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.span`
  display: flex;
  text-align: center;
  width: 35%;
`;

export const ButtonMargin = styled.span`
  margin-left: 10%;
`;

export const Title = styled.span`
  margin-bottom: 3%;
`;

export const Close = styled.div`
  position: absolute;
  top: 1rem;
  right: 0.3rem;
  font-size: 2rem;
  width: 4rem;
  height: 4rem;
  text-align: center;
  cursor: pointer;
`;

export const GuestText = styled.div`
  font-size: 1rem;
`;

const gusetMode = () => {
  localStorage.setItem('first-guest', '1');
  window.location.replace('/test');
};

export default function SignsModal({ handleModal }) {
  const navigate = useNavigate();
  return (
    <ModalContainer>
      <ModalBackdrop onClick={handleModal}>
        <ModalView
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {localStorage.guest === 'use' ? (
            <>
              <div onClick={() => navigate('/')}>&times;</div>
              <Title>
                <h3>게스트 모드를 이용하셨습니다!</h3>
              </Title>
              <Title>
                <GuestText>
                  <div>다시 참여하시려면</div>
                  <br />
                  <TextPoint>회원가입 또는 로그인을</TextPoint>
                  <div>진행해주세요.</div>
                </GuestText>
              </Title>
            </>
          ) : (
            <>
              <div className='close-btn' onClick={() => navigate('/')}>
                &times;
              </div>
              <Title>
                <h3>앗 아직 회원이 아니시군요!</h3>
              </Title>
              <Title>
                <div>
                  <h4>걱정 마세요!</h4>
                </div>
                <br />
                <TextPoint>비회원도 게스트 모드로</TextPoint>
                <div>양육 적합 테스트에 1회 참여가 가능합니다.</div>
              </Title>
              <GuestButton onClick={gusetMode}>게스트 모드 시작</GuestButton>
              <br />
              <div>또는</div>
            </>
          )}
          <Container>
            <a href='/signup'>
              <Button>회원가입</Button>
            </a>
            <ButtonMargin>
              <a href='/login'>
                <EditButton>로그인</EditButton>
              </a>
            </ButtonMargin>
          </Container>
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  );
}
