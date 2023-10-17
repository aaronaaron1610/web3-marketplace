import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LogIn from './components/User/LogIn';
import NFTs from './components/NFTs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nfts" element={<NFTs />} />
        {/* <Route path="/myAcc" element={<MyAccount />} /> */}
        <Route path="login" element={<LogIn />} />
      </Routes>
    </Router>
  );
}
export default App;
