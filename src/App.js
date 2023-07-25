import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopbarStart from './Component/TopbarStart';
import NavLayout from './Component/NavLayout';
import Home from './Component/Home';
import Shop from './Component/Shop';
import ShopDetail from './Component/ShopDetail';
import Contact from './Component/Contact';
import Pages from './Component/Pages';
import LogIn from './Component/LogIn';
import SignUp from './Component/SignUp';
import Cart from './Component/Cart';

function App() {
  return (
    <>
      <TopbarStart />
      <div>
        <NavLayout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/ShopDetail" element={<ShopDetail />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Pages" element={<Pages />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
