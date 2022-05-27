import React, {  } from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components'

// Modal1.propTypes = {
//   visible: PropTypes.bool,
// }

// 모달 내용이 들어갈 곳
const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`
// 모달 집중 효과 (dimmed)
const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
`
// 모달 창 
const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`
// import { Modal1 } from '../Modal/Modals' 형식으로 import해 이용
// 알림 모달, 로그인 모달 규격 다르게 만들어 2종으로 활용/재사용 가능

export function Modal1({ className, visible, children }) {

  return (
    <>
      <ModalOverlay visible={visible} />
      {/* tabIndex="-1": 키보드로 포커스 순서에서 제외 */}
      <ModalWrapper className={className} tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0" className="modal-inner">
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  )
}
