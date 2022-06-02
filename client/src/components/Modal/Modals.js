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
  z-index: 999;
`;

export const ModalBtn = styled.button`
  padding: 1px;
  color: black;
  border-radius: 20px;
  background-color: white;
  cursor: pointer;
  position: absolute;
  top: 5%;
  right: 4px;
`;

export const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 20rem;
  height: 5rem;
  border-radius: 1rem;
  position: relative;
`;

export default function Modal({ handleModal, children }) {
  return (
    <ModalContainer>
      <ModalBackdrop onClick={handleModal}>
        <ModalView
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {children}
          <ModalBtn onClick={handleModal}>&times;</ModalBtn>
        </ModalView>
      </ModalBackdrop>
    </ModalContainer>
  );
}
