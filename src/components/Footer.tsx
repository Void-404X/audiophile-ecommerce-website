import React from "react";
import stick from "../assets/icons/stick.svg";
import logo from "../assets/icons/logo.svg";

import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";

const Footer: React.FC = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center text-center px-6 pb-12">
      <img src={stick} alt="stick" className="mb-8" />

      <img className="my-12" src={logo} alt="logo" />

      <ul className="flex flex-col gap-4 text-sm font-bold tracking-widest mb-8">
        <li className="cursor-pointer hover:text-yellow-400">HOME</li>
        <li className="cursor-pointer hover:text-yellow-400">HEADPHONES</li>
        <li className="cursor-pointer hover:text-yellow-400">SPEAKERS</li>
        <li className="cursor-pointer hover:text-yellow-400">EARPHONES</li>
      </ul>

      <p className="text-gray-400 my-12 text-sm leading-6 max-w-md mb-8">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <span className="text-gray-400 text-sm font-bold">
        Copyright 2021. All Rights Reserved
      </span>

      <ul className="flex gap-4 mt-12">
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
  );
};

export default Footer;
