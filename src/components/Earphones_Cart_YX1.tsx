import React from "react";
import yx1earphone from "../assets/icons/yx1earphone.svg";
import yx1earphonemd from "../assets/icons/yxearphonemd.svg";

const Earphones_Cart_YX1: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mx-6 md:mx-10 lg:mx-10 xl:mx-20 2xl:mx-40 space-x-0 md:space-x-4 lg:space-x-12  text-center">
      <div className="md:h-80 flex items-center justify-center">
        <img
          className="w-100 h-auto object-cover md:hidden"
          src={yx1earphone}
          alt="yx1earphone"
        />
        <img
          className="hidden md:block md:w-84 md:h-80"
          src={yx1earphonemd}
          alt="yx1earphonemd"
        />
      </div>
      <div className="w-100 max-w-screen-lg mt-8 md:mt-0 h-60 md:w-84 md:h-80 bg-[#F1F1F1] p-6 rounded-lg flex flex-col items-center justify-center">
        <h2 className="text-3xl mt-4 font-bold text-black tracking-wide">
          YX1 EARPHONES
        </h2>
        <button className="mt-8 w-40 h-12 border border-black text-black text-sm font-medium tracking-wide transition duration-300 hover:bg-black hover:text-white">
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
};

export default Earphones_Cart_YX1;
