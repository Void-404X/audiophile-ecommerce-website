import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import menu from "../assets/icons/menu.svg";
import logo from "../assets/icons/logo.svg";
import shop from "../assets/icons/shop.svg";

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div
      className={`w-full bg-[#191919] z-30 px-8 py-6 flex justify-between items-center border-b border-gray-500 md:border-none lg:border lg:border-gray-500 lg:justify-between lg:px-20 xl:px-60 2xl:px-80 ${isHome ? "absolute" : "relative"}`}
    >
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
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "text-[#D87D4A] pb-2 cursor-pointer" : "text-white pb-2 cursor-pointer"}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/headphones" 
            className={({ isActive }) => isActive ? "text-[#D87D4A] pb-2 cursor-pointer" : "text-white pb-2 cursor-pointer"}>
            HEADPHONES
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/speakers" 
            className={({ isActive }) => isActive ? "text-[#D87D4A] pb-2 cursor-pointer" : "text-white pb-2 cursor-pointer"}>
            SPEAKERS
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/earphones" 
            className={({ isActive }) => isActive ? "text-[#D87D4A] pb-2 cursor-pointer" : "text-white pb-2 cursor-pointer"}>
            EARPHONES
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-6 cursor-pointer">
        <li>
          <img src={shop} alt="shop" className="w-8 h-8" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
