import React from "react";
import bitmap from "../assets/icons/bitmap.svg";

const Home: React.FC = () => {
  return (
    <div className="relative w-screen overflow-hidden">
      <img className="w-screen h-auto" src={bitmap} alt="bitmap" />

      <div className="absolute w-[20rem] left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 text-center">
        <span className="text-white font-normal text-[14px] leading-normal tracking-[10px] opacity-50 block mb-4">
          NEW PRODUCT
        </span>
        <h3 className="font-bold text-[36px] leading-[40px] tracking-[1.3px] text-white mb-6">
          XX99 Mark II Headphones
        </h3>
        <span className="opacity-75 font-medium text-[15px] leading-[25px] text-white mt-4 block mb-7">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </span>
        <button className={`w-40 h-12 bg-[#D87D4A] text-white`}>
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
};

export default Home;
