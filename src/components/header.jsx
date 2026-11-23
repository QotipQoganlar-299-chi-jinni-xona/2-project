import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="logo">
          Support
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <a href="#kategoriler">Products</a>
          <a href="#hizli-kartlar">Support</a>
          <a href="#arama">Search</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;