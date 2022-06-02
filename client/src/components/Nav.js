import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      Nav
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
