import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillApple,
  AiOutlineSearch,
  AiFillShopping,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';
// import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="text-sm pt-5 bg-black text-white">
      <div className="container mx-auto w-[90%] flex items-center justify-between h-12">
        <AiFillApple className="text-xl" />
        <ul className="hidden lg:flex gap-5 items-center">
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>Vision</li>
          <li>AirPods</li>
          <li>
            <Link to="/TV-Home">TV & Home</Link>
          </li>
          <li>Entertainment</li>
          <li>Accessories</li>
          <li>Support</li>
          <li>
            <Link to="/environment" className="hover:text-gray-500">
              Environment
            </Link>
          </li>
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
        <ul className="md:hidden flex flex-col gap-3 p-4 bg-white border-t">
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>Vision</li>
          <li>AirPods</li>
          <li>TV & Home</li>
          <li>
            <Link to="/music" onClick={() => setOpen(false)}>
              Entertainment
            </Link>
          </li>
          <li>Accessories</li>
          <li>Support</li>
          <li>
            <Link to="/environment" onClick={() => setOpen(false)}>
              Environment
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
