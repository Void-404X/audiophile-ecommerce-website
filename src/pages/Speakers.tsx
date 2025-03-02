import React from "react";
import ProductCategory from "../components/ProductCategory";
import Goods from "../components/Goods";
import zx9 from "../assets/icons/speaker_zx9_phone.svg";
import zx7 from "../assets/icons/speaker_zx7_phone.svg";

const speakersData = [
  {
    id: 1,
    name: "ZX9 Speaker",
    image: zx9,
    tag: "NEW PRODUCT",
    description:
      "Upgrade your sound system with the all-new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity – creating new possibilities for more pleasing and practical audio setups.",
    buttonLabel: "SEE PRODUCT",
  },
  {
    id: 2,
    name: "ZX7 Speaker",
    image: zx7,
    description:
      "Stream high-quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represent the top-of-the-line powered speakers for home or studio use.",
    buttonLabel: "SEE PRODUCT",
    reverse: true,
  },
];

const Speakers: React.FC = () => {
  return (
    <div>
      <div className="bg-[#191919] w-full h-40 text-white flex justify-center items-center mb-10 font-manrope font-bold text-[40px] leading-[44px] tracking-[1.43px]">
        SPEAKERS
      </div>
      <div className="flex flex-col items-center gap-10 mt-30">
        {speakersData.map((item) => (
          <Goods key={item.id} {...item} />
        ))}
      </div>
      <ProductCategory />
    </div>
  );
};

export default Speakers;
