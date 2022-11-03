import React from 'react';
import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/shared/navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
};

export default App;