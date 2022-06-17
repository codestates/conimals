import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Sign/Logout';
import Logo from '../assets/Conimals_logo_horizontal1.png';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 96px;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: #fffffcde;
`;

const NavBlock = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoStyle = styled.div`
  width: 240px;
  img {
    width: 100%;
  }
`;

export const NavButton = styled.button`
  border: none;
  background: none;
  display: block;
  padding: 1rem;
  cursor: pointer;
  h5 {
    font-weight: 500;
  }
`;

function Nav() {
  return (
    <>
      <Header>
        <NavBlock>
          <Link to='/'>
            <LogoStyle>
              <img src={Logo} alt='logo' />
            </LogoStyle>
          </Link>
          <Link to='/test'>
            <NavButton>
              <h5>반려생활 적합 테스트</h5>
            </NavButton>
          </Link>
          <Link to='/map'>
            <NavButton>
              <h5>동물 보호소 찾기</h5>
            </NavButton>
          </Link>
          <Link to='/posts'>
            <NavButton>
              <h5>입양 정보 게시판</h5>
            </NavButton>
          </Link>
          {localStorage.getItem('user') || localStorage.getItem('kakao') ? (
            <Logout />
          ) : (
            <Link to='/login'>
              <NavButton>
                <h5>Login</h5>
              </NavButton>
            </Link>
          )}
          {localStorage.getItem('user') || localStorage.getItem('kakao') ? (
            <Link to='/mypage'>
              <NavButton>
                <h5>Mypage</h5>
              </NavButton>
            </Link>
          ) : null}
        </NavBlock>
      </Header>
    </>
  );
}

export default Nav;
