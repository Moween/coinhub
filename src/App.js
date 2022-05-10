import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import Home from './screens/Home';
import Header from './components/layout/Header';
import './App.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
