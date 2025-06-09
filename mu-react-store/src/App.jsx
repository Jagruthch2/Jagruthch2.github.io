import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Login from'./Login';
import Register from './Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header name="Mu-react-store"/>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App
