import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import Button from './common/Button';

// const NavBlock = styled.div`
//   z-index: 20;
//   position: fixed;
//   width: 100%;
//   background: #fff;
//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
// `;
// Wrapper는 이후 반응형을 만들때 div를 (Resposive)컴포넌트의 속성에 스타일 추가할 것
// const Wrapper = styled.div`
//   height: 4rem;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   .logo {
//     font-size: 1.125rem;
//     font-weight: 800;
//     letter-spacing: 2px;
//     text-decoration: none;
//   }
//   .right {
//     display: flex;
//     align-items: center;
//   }
// `;

function Nav() {
  return (
    <>
      <Link to='/login'>
        <button>Login</button>
      </Link>
      <Link to='/mypage'>
        <button>Mypage</button>
      </Link>
      <Link to='/test'>
        <button>test</button>
      </Link>
    </>
  );
}

export default Nav;
