import React from "react";
import ProductCategory from "../components/ProductCategory";
import Goods from "../components/Goods";
import yx1 from "../assets/icons/earphones_yx1_phone.svg";

const earphonesData = [
  {
    id: 1,
    name: "YX1 Wireless Earphones",
    image: yx1,
    tag: "NEW PRODUCT",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    buttonLabel: "SEE PRODUCT",
  },
];

const Earphones: React.FC = () => {
  return (
    <div>
      <div className="bg-[#191919] w-full h-40 text-white flex justify-center items-center mb-10 font-manrope font-bold text-[40px] leading-[44px] tracking-[1.43px]">
        EARPHONES
      </div>
      <div className="flex flex-col items-center gap-10 mt-30">
        {earphonesData.map((item) => (
          <Goods key={item.id} {...item} />
        ))}
      </div>
      <ProductCategory />
    </div>
  );
};

export default Earphones;
