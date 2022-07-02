import React from 'react';
import './styles/normalize.scss';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Subheader from './components/Subheader';

import Main from './pages/Main';
import Login from './pages/Login';
import CardPage from './pages/CardPage';

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      {location.pathname !== '/login' ? <Header /> : null}
      {location.pathname !== '/login' ? <Subheader /> : null}
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/item/:id" element={<CardPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
