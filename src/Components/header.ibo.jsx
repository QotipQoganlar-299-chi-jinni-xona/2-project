import React, { useState } from 'react';
import { AiFillApple, AiOutlineSearch, AiOutlineShopping, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi';

const navItems = ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support'];
const products = [
  { name: 'MacBook Air', sub: 'New', icon: '▱' }, { name: 'MacBook Pro', icon: '▱' }, { name: 'iMac', icon: '▣' },
  { name: 'Mac mini', icon: '▰' }, { name: 'Mac Studio', icon: '▰' }, { name: 'Mac Pro', icon: '▥' },
  { name: 'Compare', icon: '◫' }, { name: 'Displays', icon: '▤' }, { name: 'Accessories', icon: '◉' },
  { name: 'Sequoia Preview', sub: 'Preview', icon: '✿' }, { name: 'Shop Mac', icon: '▣' },
];

export default function HeaderIbo() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);
  return (
    <>
      <header className="apple-header">
        <div className="apple-nav">
          <a className="apple-mark" href="#top" aria-label="Apple home"><AiFillApple /></a>
          <nav className={menuOpen ? 'nav-links nav-links-open' : 'nav-links'}>
            {navItems.map((item) => <a key={item} href={item === 'Mac' ? '#top' : '#explore'} onClick={() => setMenuOpen(false)}>{item}</a>)}
          </nav>
          <div className="nav-actions">
            <button aria-label="Search" onClick={() => setSearchOpen(!searchOpen)}><AiOutlineSearch /></button>
            <button aria-label="Shopping bag" onClick={() => setBagOpen(!bagOpen)}><AiOutlineShopping /></button>
            <button className="mobile-menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}</button>
          </div>
        </div>
        {searchOpen && <form className="nav-popover" onSubmit={(e) => { e.preventDefault(); document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' }); setSearchOpen(false); }}><AiOutlineSearch /><input autoFocus placeholder="Search apple.com" aria-label="Search Apple" /><button type="submit">Search</button></form>}
        {bagOpen && <div className="nav-popover bag-popover"><strong>Your bag is empty.</strong><a href="#explore" onClick={() => setBagOpen(false)}>Shop Mac <FiChevronRight /></a></div>}
      </header>
      <div className="product-strip" aria-label="Mac products">
        <div className="product-strip-inner">{products.map((product) => <a href="#explore" className="product-shortcut" key={product.name}><span className="product-symbol">{product.icon}</span><span>{product.name}</span>{product.sub && <small>{product.sub}</small>}</a>)}</div>
      </div>
      <div className="education-banner">Now through 9/30, get a gift card up to $150 when you buy Mac or iPad with education savings! <a href="#explore">Shop <FiChevronRight /></a></div>
    </>
  );
}
