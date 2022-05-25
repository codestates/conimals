import React, { } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './pages/Main';
import Map from './pages/Map';
import Test from './pages/Test/Test';
import TestResults from './pages/Test/TestResults';
import Login from './components/Sign/Login'

function App() {

  return (
      <BrowserRouter>
        <Nav />

          <Switch>
            <Route exact path="/" component={ Main } />
            <Route path="/map" component={ Map } />
            <Route path="/test" component={ Test } />
            <Route path="/results" component={ TestResults } />
            <Route path="/login" component={ Login } />
          </Switch>

        <Footer />

      </BrowserRouter>

  );
}

export default App;
