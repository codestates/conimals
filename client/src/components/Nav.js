import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Sign/Logout';

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
      <Link to='/posts'>
        <button>posts</button>
      </Link>
      <Link to='/write'>
        <button>write</button>
      </Link>
      <Link to='/edit'>
        <button>edit</button>
      </Link>
      <Logout />
    </>
  );
}

export default Nav;
