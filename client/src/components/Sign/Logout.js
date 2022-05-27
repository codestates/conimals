import React, {  } from 'react';
import axios from 'axios';

function Logout() {

  const handleLogout = () => {
    
    axios.get(
      `${process.env.REACT_APP_API_URL}/users/logout`, 
    {
      headers: { authorization: `${localStorage.getItem('user')}`},
      withCredentials: true,
    }
    ).then((res) => {
      localStorage.removeItem('user')
      console.log(localStorage)
      // setUserinfos(null);
      // setIsLogin(false);
      // navigate('/');
      alert('로그아웃 되었습니다.');
    })
    .catch(err => {
      console.log(err);
    });
  };

  return (
    <button onClick={handleLogout}>logout</button>
  )
}



export default Logout;
