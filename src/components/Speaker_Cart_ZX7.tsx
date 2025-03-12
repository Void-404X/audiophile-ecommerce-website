import React from "react";
import zx7_speaker from "../assets/icons/zx7speaker.svg";
import { useNavigate } from "react-router-dom";

const Speaker_Cart_ZX7: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative md:mx-10 lg:mx-10 xl:mx-20 2xl:mx-40 mx-6 h-80 flex flex-col justify-center rounded-lg my-8">
      <div className="absolute inset-0  flex justify-end">
        <img
          src={zx7_speaker}
          alt="ZX7 Speaker"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="relative z-10 ml-[5%]">
        <span className="text-2xl font-bold text-black block xl:text-5xl">
          ZX7 SPEAKER
        </span>
      </div>

      <div className="relative z-10 ml-[5%]">
        <button onClick={() => navigate("detail/zx7%20speaker/undefined")} className="mt-4 hover:bg-[#000000] cursor-pointer hover:text-white px-4 py-2 border border-black text-black text-sm font-medium w-fit">
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
};

export default Speaker_Cart_ZX7;
