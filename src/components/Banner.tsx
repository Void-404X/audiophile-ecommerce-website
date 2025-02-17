import React from "react";
import bitmap from "../assets/icons/bitmap.svg";

const Banner: React.FC = () => {
  return (
    <div className="bg-[#191919] relative z-20 w-full h-[calc(100vh-6rem)] flex justify-center items-center lg:flex-row-reverse lg:justify-between lg:bg-[rgb(16,16,16)] md:bg-[rgb(16,16,16)] lg:px-20 xl:px-60 2xl:px-80">
      <img
        className="absolute w-full h-full lg:w-auto lg:h-auto lg:ml-8 lg:order-last lg:ml-auto"
        src={bitmap}
        alt="bitmap"
      />
      <div className="relative text-center w-[20rem] lg:text-left lg:w-[25rem] lg:mr-auto">
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
        <button className="w-40 h-12 bg-[#D87D4A] text-white">
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
};

export default Banner;
