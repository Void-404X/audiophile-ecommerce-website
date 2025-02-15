import React from "react";
import speaker_zx9 from "../assets/icons/speaker_zx9.svg";
import oval from "../assets/icons/oval.svg";

const SpeakerPromoCard: React.FC = () => {
  return (
    <div className="relative bg-[#D87D4A] max-w-screen-md mx-6 h-[40rem] rounded-lg flex flex-col items-center text-center pt-12">
      <img
        src={oval}
        alt="oval background"
        className="absolute top-0 w-170 h-170 top-[-80px]"
      />
      <img
        src={speaker_zx9}
        alt="ZX9 Speaker"
        className="relative z-10 top-[30px]"
      />
      <div className="mt-15">
        <h2 className="relative z-10 text-white font-bold text-[36px] leading-[40px] tracking-[1.3px] mt-6">
          ZX9 <br /> SPEAKER
        </h2>

        <p className="relative z-10 text-white text-[15px] leading-[25px] font-medium opacity-75 mt-4 max-w-[20rem]">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>

        <button className="relative z-10 mt-6 bg-black text-white py-3 px-6  text-sm uppercase">
          See Product
        </button>
      </div>
    </div>
  );
};

export default SpeakerPromoCard;
