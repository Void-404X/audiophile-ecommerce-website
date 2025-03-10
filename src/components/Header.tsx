import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import menuIcon from "../assets/icons/menu.svg";
import logoIcon from "../assets/icons/logo.svg";
import shopIcon from "../assets/icons/shop.svg";

const NAV_ITEMS = [
  { name: "HOME", path: "/" },
  { name: "HEADPHONES", path: "/headphones" },
  { name: "SPEAKERS", path: "/speakers" },
  { name: "EARPHONES", path: "/earphones" },
];

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header
      className={`w-full bg-[#191919] z-30 px-8 py-6 flex justify-between items-center border-b border-gray-500 
        md:border-none lg:border lg:border-gray-500 lg:px-20 xl:px-60 2xl:px-80 
        ${isHome ? "absolute" : "relative"}`}
    >
      {/* Mobile Menu Icon */}
      <button className="lg:hidden">
        <img src={menuIcon} alt="menu" className="w-8 h-8" />
      </button>

      {/* Logo */}
      <img src={logoIcon} alt="logo" className="w-24 md:w-auto mx-auto md:mx-0 md:ml-10 md:mr-auto lg:mx-0" />

      {/* Navigation Links */}
      <nav className="hidden lg:flex items-center gap-6 mx-auto">
        {NAV_ITEMS.map(({ name, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `pb-2 cursor-pointer transition-colors ${
                isActive ? "text-[#D87D4A] border-b-2 border-[#D87D4A]" : "text-white hover:text-[#D87D4A]"
              }`
            }
          >
            {name}
          </NavLink>
        ))}
      </nav>


      <button className="cursor-pointer">
        <img src={shopIcon} alt="shop" className="w-8 h-8" />
      </button>
    </header>
  );
};

export default Header;
