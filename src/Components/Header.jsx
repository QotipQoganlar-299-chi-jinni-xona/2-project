import React, { useState } from "react";
import { AiFillApple, AiOutlineSearch,AiFillShopping,AiOutlineMenu,AiOutlineClose,} from "react-icons/ai";
// import { IoChevronForward } from "react-icons/io5";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>


      <header className="texst-sm mt-5">
        <div className="container mx-auto w-[95%] flex items-center justify-between h-12">
          <AiFillApple className="text-xl cursor-pointer" />

          <ul className="hidden md:flex gap-5">
            <li className="cursor-pointer hover:text-gray-500">Store</li>
            <li className="cursor-pointer hover:text-gray-500">Mac</li>
            <li className="cursor-pointer hover:text-gray-500">iPad</li>
            <li className="cursor-pointer hover:text-gray-500">iPhone</li>
            <li className="cursor-pointer hover:text-gray-500">Watch</li>
            <li className="cursor-pointer hover:text-gray-500">Vision</li>
            <li className="cursor-pointer hover:text-gray-500">AirPods</li>
            <li className="cursor-pointer hover:text-gray-500">TV & Home</li>
            <li className="cursor-pointer hover:text-gray-500">Entertainment</li>
            <li className="cursor-pointer hover:text-gray-500">Accessories</li>
            <li className="cursor-pointer hover:text-gray-500">Support</li>
          </ul>

          <div className="flex items-center gap-4 text-lg">
            <AiOutlineSearch className="cursor-pointer" />
            <AiFillShopping className="cursor-pointer" />
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>
      </header>


    </div>

  );
};

export default Header;
