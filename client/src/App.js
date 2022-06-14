import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './pages/Main';
import ConimalsMap from './pages/Map';
// import Policy from './utils/policy';

import Test from './pages/Test/Test';
import TestResults1 from './pages/Test/TestResults1';
import TestResults2 from './pages/Test/TestResults2';
import TestResults3 from './pages/Test/TestResults3';

import Login from './components/Sign/Login';
import Mypage from './pages/Mypage';
import Signup from './components/Sign/Signup';
import KakaoOauth from './components/Sign/KakaoOauth';
import Posts from './pages/post/Posts';
import Write from './pages/post/Write';
import EditPost from './pages/post/EditPost';
import View from './pages/post/View';

// import policy from './utils/policy.html';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
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
        <Route path='/oauth/kakao/callback' element={<KakaoOauth />} />

        <Route path='/posts' element={<Posts />} />
        <Route path='/view/:id' element={<View />} />
        <Route path='/write' element={<Write />} />
        <Route path='/edit/:id' element={<EditPost />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
