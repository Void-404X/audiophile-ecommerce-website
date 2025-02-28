import React from "react";
import speaker_zx9 from "../assets/icons/speaker_zx9.svg";
import oval from "../assets/icons/oval.svg";
import full_oval from "../assets/icons/full_oval.svg";

const SpeakerPromoCard: React.FC = () => {
  return (
    <>
      <div className="relative bg-[#D87D4A] max-w-full mx-6 md:mx-10 h-[40rem] md:h-[45rem] rounded-lg flex flex-col items-center text-center pt-12 lg:mx-20 xl:mx-60 2xl:mx-80 lg:hidden">
        <img
          src={oval}
          alt="oval background"
          className="absolute top-0 w-full h-170 md:h-200 top-[-140px] md:top-[-130px]"
        />
        <img src={speaker_zx9} alt="ZX9 Speaker" className="relative z-10" />
        <div className="mt-10">
          <h2 className="relative z-10 text-white font-bold text-4xl md:text-6xl leading-[40px] md:leading-[70px] tracking-[1.3px] mt-6">
            ZX9 <br /> SPEAKER
          </h2>

          <p className="relative z-10 text-white text-[15px] leading-[25px] font-medium opacity-75 mt-4 max-w-[20rem]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>


            <button className="hover:bg-[#4C4C4C] z-10 bg-black text-white py-3 px-6 text-sm uppercase">
              See Product
            </button>
 
        </div>
      </div>

      <div className="relative h-130 bg-[#D87D4A] lg:mx-10 xl:mx-20 2xl:mx-40 overflow-hidden rounded-md hidden lg:block">
        <img
          className="absolute left-0 top-0 w-[100] h-auto object-contain bg-transparent transform translate-y-[-1rem] translate-x-[-10rem]"
          src={full_oval}
          alt="full_oval"
        />
        <img
          className="absolute left-0 top-0 w-100 h-auto object-contain bg-transparent transform translate-y-[4.5rem] translate-x-[7rem]"
          src={speaker_zx9}
          alt="speaker_zx9"
        />
        <div className="mt-10 flex justify-end">
          <div className="xl:mr-[5rem] 2xl:mr-[10rem]">
            <h2 className="relative z-10 text-white font-bold text-4xl md:text-6xl leading-[40px] md:leading-[70px] tracking-[1.3px] mt-6">
              ZX9 <br /> SPEAKER
            </h2>

            <p className="relative z-10 w-87 text-white text-[15px] leading-[25px] font-medium opacity-75 mt-4">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>

            <button className="relative z-10 mt-6 bg-black text-white py-3 px-6 text-sm uppercase">
              See Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakerPromoCard;
