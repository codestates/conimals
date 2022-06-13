import React from 'react';
import styled from 'styled-components';

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

export const ModalBtn = styled.button`
  padding: 5px;
  color: black;
  border-radius: 20px;
  background-color: white;
  cursor: pointer;
  position: absolute;
  top: 2.5%;
  right: 1%;
`;

export const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 40rem;
  height: 30rem;
  border-radius: 1rem;
  position: relative;
`;

export const SignButton = styled.div`
  margin: 5%;
  position: relative;
  border: none;
  display: inline-block;
  padding: 20px 30px;
  border-radius: 15px;
  font-family: sans-serif;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
  cursor: pointer;
  z-index: 999;
`;

export const TextPoint = styled.div`
  color: blueviolet;
  display: flex;
  flex-direction: column;
`;

const gusetMode = () => {
  localStorage.setItem('user', 'guest');
  console.log(localStorage);
  window.location.replace('/test');
};

export default function SignsModal({ handleModal }) {
  return (
    <ModalContainer>
      <ModalBackdrop onClick={handleModal}>
        <ModalView
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <h2>앗 아직 회원이 아니시군요!</h2>
          <h4>걱정 마세요!</h4>
          <div>
            비회원도 <span>게스트 모드</span>로
            <div>양육 적합 테스트에 1회 참여가가능합니다.</div>
          </div>
          <SignButton onClick={gusetMode}>게스트 모드 시작</SignButton>
          <div>또는</div>
          <a href='/signup'>
            <SignButton>회원가입</SignButton>
          </a>
          <a href='/login'>
            <SignButton>로그인</SignButton>
          </a>
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  );
}
