import React from "react";
import Goods from "../components/Goods";
import ProductCategory from "../components/ProductCategory";
import useHeadphonesStore from "../store/useHeadphonesStore";

const Headphones: React.FC = () => {
  const { headphonesData } = useHeadphonesStore();
  const filteredHeadphones = headphonesData.filter(item => item.type === "headphones");
  
  return (
    <div>
      <div className="bg-[#191919] w-full h-40 text-white flex justify-center items-center mb-10 font-manrope font-bold text-[40px] leading-[44px] tracking-[1.43px]">
        HEADPHONES
      </div>
      <div className="flex flex-col items-center gap-10 mt-20">
        {filteredHeadphones.map((item) => (
          <Goods key={item.id} {...item} />
        ))}
      </div>
      <ProductCategory />
    </div>
  );
};

export default Headphones;
