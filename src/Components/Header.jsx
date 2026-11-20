
import React, { useState } from 'react';
import {
  AiFillApple,
  AiOutlineSearch,
  AiFillShopping,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="text-sm mt-5">
      <div className="container mx-auto w-[95%] flex items-center justify-between h-12">
        <AiFillApple className="text-xl" />

        <ul className="hidden md:flex gap-5">
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>Vision</li>
          <li>AirPods</li>
          <li>TV & Home</li>
          <li>Entertainment</li>
          <li>Accessories</li>
          <li>Support</li>
        </ul>

        <div className="flex items-center gap-4 text-lg">
          <AiOutlineSearch />
          <AiFillShopping />
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-3 p-4">
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>Vision</li>
          <li>AirPods</li>
          <li>TV & Home</li>
          <li>Entertainment</li>
          <li>Accessories</li>
          <li>Support</li>
        </ul>
      )}
    </header>
  );
};

export default Header;
