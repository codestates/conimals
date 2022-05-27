import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Map from "./pages/Map";
import Test from "./pages/Test/Test";
import TestResults from "./pages/Test/TestResults";
import Login from "./components/Sign/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/map" element={<Map />} />
        <Route path="/test" element={<Test />} />
        <Route path="/results" element={<TestResults />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
