import React from "react";

interface HeadphonesGoodsProps {
  name: string;
  image: string;
  tag?: string;
  description: string;
  buttonLabel: string;
  reverse?: boolean; // New prop for reversing layout
}

const HeadphonesGoods: React.FC<HeadphonesGoodsProps> = ({
  name,
  image,
  tag,
  description,
  buttonLabel,
  reverse = false, // Default to false
}) => {
  return (
    <div
      className={`w-full flex flex-col items-center gap-6 mb-30 lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } `}
    >
      <div className="min-w-[90%] lg:min-w-135 h-90 lg:h-135 bg-[#F1F1F1] mx-10 flex justify-center items-center mb-10">
        <img className="w-60 h-60 object-contain" src={image} alt={name} />
      </div>

      <div
        className={`text-center w-full px-10 lg:w-130 lg:text-left ${
          reverse ? "ml-auto" : ""
        }`}
      >
        {tag && (
          <span className="font-manrope text-[14px] tracking-[10px] text-[#D87D4A] block mt-8 mb-6">
            {tag}
          </span>
        )}
        <h3 className="font-manrope font-bold text-[28px] leading-[44px] tracking-[1.43px] text-black mb-6">
          {name}
        </h3>
        <p className="font-manrope lg:text-left lg:ml-0 font-medium text-[15px] leading-6 max-w-lg mx-auto mb-6">
          {description}
        </p>
        <button className="w-40 h-12 bg-[#D87D4A] cursor-pointer hover:bg-[#FBAF85] text-white font-manrope font-bold text-[13px] tracking-[1px] mt-4">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default HeadphonesGoods;
