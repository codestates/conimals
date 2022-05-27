import React, { } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './pages/Main';
import Map from './pages/Map';
import Test from './pages/Test/Test';
import TestResults from './pages/Test/TestResults';
import Login from './components/Sign/Login'
import Mypage from './pages/Mypage'
// import LoginDummy from './pages/Mypage'
import Signup from './components/Sign/Signup'

function App() {

  return (
      <BrowserRouter>
        <Nav />

          <Routes>
            <Route exact path="/" element={ <Main /> } />
            <Route path="/map" element={ <Map /> } />
            <Route path="/test" element={ <Test /> } />
            <Route path="/results" element={ <TestResults /> } />

            <Route path="/login" element={ <Login /> } />
            <Route path="/mypage" element={ <Mypage /> } />
            <Route path="/signup" element={ <Signup /> } />
          </Routes>

        <Footer />

      </BrowserRouter>

  );
}

export default App;
