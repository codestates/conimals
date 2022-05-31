import React from 'react';
import axios from 'axios';

function Logout() {
  const handleLogout = () => {
    axios
      .get(`http://localhost:8080/users/logout`, {
        headers: { authorization: `Beraer ${localStorage.getItem('user')}` },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        // setUserinfos(null);
        // setIsLogin(false);
        // navigate('/');
        alert('로그아웃 되었습니다.');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <button onClick={handleLogout}>logout</button>;
}

export default Logout;
