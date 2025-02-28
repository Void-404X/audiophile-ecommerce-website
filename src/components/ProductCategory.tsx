import React from "react";
import headphones from "../assets/icons/headphones.svg";
import speakers from "../assets/icons/speakers.svg";
import earphones from "../assets/icons/earphones.svg";
import arrow from "../assets/icons/arrow.svg";

const ProductCategory: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-24 md:gap-8 md:justify-between h-auto px-6 my-10 lg:px-20 xl:px-60 2xl:px-80">
      <div className="relative bg-gray-100 p-6 md:w-full rounded-lg flex flex-col items-center">
        <div className="absolute top-16 w-24 h-6 bg-black opacity-30 rounded-full blur-lg"></div>
        <img
          src={headphones}
          alt="HEADPHONES"
          className="w-28 h-28 object-contain mb-6"
        />
        <div className="text-center mt-4">
          <span className="block text-lg font-bold">HEADPHONES</span>
          <a
            href="/headphone"
            className="text-gray-600 hover:text-[#D87D4A] focus:text-white active:text-white flex items-center justify-center gap-2 mt-2 transition-colors duration-300"
          >
            <span className="pr-2">SHOP</span>
            <img src={arrow} alt="arrow" className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="relative bg-gray-100 p-6 md:w-full rounded-lg flex flex-col items-center">
        <div className="absolute top-16 w-24 h-6 bg-black opacity-30 rounded-full blur-lg"></div>
        <img
          src={speakers}
          alt="SPEAKERS"
          className="w-28 h-28 object-contain mb-6"
        />
        <div className="text-center mt-4">
          <span className="block text-lg font-bold">SPEAKERS</span>
          <a
            href="#"
            className="text-gray-600 hover:text-[#D87D4A] flex items-center justify-center gap-2 mt-2 transition-colors duration-300"
          >
            <span className="pr-2">SHOP</span>
            <img src={arrow} alt="arrow" className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="relative bg-gray-100 p-6 md:w-full rounded-lg flex flex-col items-center">
        <div className="absolute top-16 w-24 h-6 bg-black opacity-30 rounded-full blur-lg"></div>
        <img
          src={earphones}
          alt="EARPHONES"
          className="w-28 h-28  mb-6"
        />
        <div className="text-center mt-4">
          <span className="block text-lg font-bold">EARPHONES</span>
          <a
            href="/fakdsfjla"
            className="text-gray-600 hover:text-[#D87D4A] cursor-pointer focus:text-[#D87D4A] active:text-[#D87D4A] flex items-center justify-center gap-2 mt-2 transition-colors duration-300"
          >
            <span className="pr-2">SHOP</span>
            <img src={arrow} alt="arrow" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
