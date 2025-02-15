import React from "react";
import menu from "../assets/icons/menu.svg";
import logo from "../assets/icons/logo.svg";
import shop from "../assets/icons/shop.svg";

const Header: React.FC = () => {
  const handleClick = () => {
    alert("Hello");
  };
  return (
    <div className="w-full bg-[#191919] px-8 py-6 flex justify-between items-center border-b">
      <ul className="flex items-center gap-6">
        <li onClick={handleClick}>
          <img src={menu} alt="menu" />
        </li>
      </ul>
      <img src={logo} alt="logo" />
      <ul className="flex items-center gap-6">
        <li>
          <img src={shop} alt="shop" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
