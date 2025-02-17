import React from "react";
import yx1earphone from "../assets/icons/yx1earphone.svg";
import yx1earphonemd from "../assets/icons/yxearphonemd.svg";

const Earphones_Cart_YX1: React.FC = () => {
  return (
    <div className="md:flex md:justify-between mx-6 md:mx-10">
      <div className="max-w-screen-md md:w-84 md:h-80">
        <img
          className="md:hidden md:w-80 md:h-80"
          src={yx1earphone}
          alt="yx1earphone"
        />
        <img
          className="hidden md:block md:w-84 md:h-80"
          src={yx1earphonemd}
          alt="yx1earphonemd"
        />
      </div>
      <div className="max-w-screen-md mt-8 md:mt-0 h-80 md:w-84 md:h-80 bg-[#F1F1F1] p-6 rounded-lg flex flex-col items-center">
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
