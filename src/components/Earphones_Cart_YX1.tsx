import React from "react";
import yx1earphone from "../assets/icons/yx1earphone.svg";

const Earphones_Cart_YX1: React.FC = () => {
  return (
    <div>
      <div className="max-w-screen-md mx-6">
        <img className="w-full" src={yx1earphone} alt="yx1earphone" />
      </div>
      <div className="max-w-screen-md mt-8 h-50 mx-6 bg-[#F1F1F1] p-6 rounded-lg flex flex-col items-start">
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
