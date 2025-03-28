import React from "react";
import stick from "../assets/icons/stick.svg";
import logo from "../assets/icons/logo.svg";

import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";

import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-black text-white flex flex-col items-center text-center md:items-start md:text-start px-6 md:px-12 pb-12">
      <img src={stick} alt="stick" className="mb-8" />

      <img className="my-12" src={logo} alt="logo" />

      <ul className="flex flex-col md:flex-row md:gap-8 gap-4 text-sm font-bold tracking-widest mb-8">
        <li onClick={() => navigate('/')} className="cursor-pointer hover:text-[#D87D4A]">HOME</li>
        <li onClick={() => navigate('/headphones')} className="cursor-pointer hover:text-[#D87D4A]">HEADPHONES</li>
        <li onClick={() => navigate('/speakers')} className="cursor-pointer hover:text-[#D87D4A]">SPEAKERS</li>
        <li onClick={() => navigate('/earphones')} className="cursor-pointer hover:text-[#D87D4A]">EARPHONES</li>
      </ul>

      <p className="text-gray-400 my-6 md:max-w-160 text-sm md:text-md leading-6 max-w-md mb-8">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <div className="md:flex md:flex-row md:items-center md:justify-between w-full py-4">
        <span className="text-gray-400 text-sm font-bold md:justify-start">
          Copyright 2021. All Rights Reserved
        </span>
        <ul className="flex gap-4 mt-12 md:mt-0 md:justify-end justify-center">
          <li>
            <img
              src={facebook}
              alt="facebook"
              className="w-6 cursor-pointer hover:opacity-75"
            />
          </li>
          <li>
            <img
              src={twitter}
              alt="twitter"
              className="w-6 cursor-pointer hover:opacity-75"
            />
          </li>
          <li>
            <img
              src={instagram}
              alt="instagram"
              className="w-6 cursor-pointer hover:opacity-75"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
