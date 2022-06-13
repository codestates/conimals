import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Sign/Logout';
import Logo from '../assets/Conimals_logo_horizontal1.png';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 96px;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #fffcfd;
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
            <button>적합 테스트</button>
          </Link>
          <Link to='/test'>
            <button>동물 보호소 찾기</button>
          </Link>
          <Link to='/login'>
            <button>Login</button>
          </Link>
          <Logout />
          <Link to='/mypage'>
            <button>Mypage</button>
          </Link>
          <Link to='/posts'>
            <button>게시판</button>
          </Link>
          <Link to='/write'>
            <button>write</button>
          </Link>
        </NavBlock>
      </Header>
    </>
  );
}

export default Nav;
