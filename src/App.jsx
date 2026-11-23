import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import HeaderIbo from './Components/header.ibo';
import FooterIbo from './Components/footer.ibo';

export default function App() {
  return <div className="site-shell"><HeaderIbo /><Routes><Route path="/" element={<Home />} /></Routes><FooterIbo /></div>;
}
