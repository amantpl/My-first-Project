import React from "react";
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2">
        <img src="./assets/Logo.svg" alt="Logo" />
        <button className="text-xs text-white bg-gradient-to-r from-orange-400 to-red-400 px-2.5 py-1.5 rounded-2xl">Hoster is hiring</button>
      </div>
      <ul className="items-center justify-between hidden gap-6 text-gray-400 lg:flex font-lato">
        <li>
          <a href="#">Plans</a>
        </li>
        <li>
        <a href="#">Find Domain</a>
        </li>
        <li>
        <a href="#">Why Hoster</a>
        </li>
      </ul>
      <div className="items-center justify-center gap-6 lg:flex font-lato">
        <a href="#">Sign In</a>
        <button className='px-4 py-3 text-white bg-blue-400 rounded-md hover:bg-blue-600'>Join Waitlist</button>
      </div>
      <div className="lg:hidden">
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
