import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Main from './pages/Main';
import ConimalsMap from './pages/Map';
import Test from './pages/Test/Test';
import TestResults1 from './pages/Test/TestResults1';
import TestResults2 from './pages/Test/TestResults2';
import TestResults3 from './pages/Test/TestResults3';
import Login from './components/Sign/Login';
import Mypage from './pages/Mypage';
import Signup from './components/Sign/Signup';

/**
 * Footer는 현재 일부러 지웠습니다
 * map 페이지에서 하단에 억지로 나오는게 있어서
 * map 페이지에서만 안나오게끔 하는 방법을 강구해야합니다
 */
function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/map' element={<ConimalsMap />} />
        <Route path='/test' element={<Test />} />
        <Route path='/results1' element={<TestResults1 />} />
        <Route path='/results2' element={<TestResults2 />} />
        <Route path='/results3' element={<TestResults3 />} />

        <Route path='/login' element={<Login />} />
        <Route path='/mypage' element={<Mypage />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
