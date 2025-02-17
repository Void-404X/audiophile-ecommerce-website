import React from "react";
import persone_with_headphone from "../assets/icons/persone_with_headphone.svg";

const AudioFeatureCard: React.FC = () => {
  return (
    <div className="max-w-screen-md mx-6 my-30">
      <div className="w-full mb-10">
        <img className="w-full" src={persone_with_headphone} alt="persone_with_headphone" />
      </div>
      <div>
        <h3 className="text-4xl text-center mb-8 font-bold leading-normal tracking-wide">
          Bringing you the <span className="text-[#D87D4A]">best</span> audio
          gear
        </h3>
        <p className="text-base text-center opacity-50 font-medium leading-6">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default AudioFeatureCard;
