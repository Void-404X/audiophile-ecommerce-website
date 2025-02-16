import React from "react";
import zx7_speaker from "../assets/icons/zx7speaker.svg";

const Speaker_Cart_ZX7: React.FC = () => {
  return (
    <div className="relative max-w-screen-md h-80 flex items-center rounded-lg overflow-hidden mx-6 bg-gray-300 my-8">

      <div className="absolute inset-0">
        <img
          src={zx7_speaker}
          alt="ZX7 Speaker"
          className="w-[200%] h-full object-cover"
        />
      </div>


      <div className="relative z-10 flex flex-col pl-4">
        <span className="text-2xl font-bold tracking-wide text-black">ZX7 SPEAKER</span>
        <button className="mt-4 py-2 border border-black text-black text-sm font-medium">
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
};

export default Speaker_Cart_ZX7;
