import React from "react";
import menu from "../assets/icons/menu.svg";
import logo from "../assets/icons/logo.svg";
import shop from "../assets/icons/shop.svg";

const Header: React.FC = () => {
  return (
    <div className="w-full bg-[#191919] md:bg-transparent absolute z-30 px-8 py-6 flex justify-between items-center border-b border-gray-500 md:border-none lg:border lg:border-gray-500 lg:justify-between lg:px-20 xl:px-60 2xl:px-80">
      <ul className="flex items-center gap-6 lg:hidden">
        <li>
          <img src={menu} alt="menu" className="w-8 h-8" />
        </li>
      </ul>

      <img
        className="w-24 md:w-auto mx-auto md:mx-0 md:ml-10 md:mr-auto lg:mx-0"
        src={logo}
        alt="logo"
      />

      <ul className="hidden lg:flex items-center gap-6 mx-auto">
        <li className="text-white">HOME</li>
        <li className="text-white">HEADPHONES</li>
        <li className="text-white">SPEAKERS</li>
        <li className="text-white">EARPHONES</li>
      </ul>

      <ul className="flex items-center gap-6">
        <li>
          <img src={shop} alt="shop" className="w-8 h-8" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
