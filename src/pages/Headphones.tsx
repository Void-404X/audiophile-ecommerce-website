import React from "react";
import Goods from "../components/Goods";
import ProductCategory from "../components/ProductCategory";

import xx992 from "../assets/icons/headphones_xx992_phone.svg";
import xx991 from "../assets/icons/headphones_xx991_phone.svg";
import xx59 from "../assets/icons/headphones_xx59_phone.svg";

const headphonesData = [
  {
    id: 1,
    name: "XX99 Mark II Headphones",
    image: xx992,
    tag: "NEW PRODUCT",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    buttonLabel: "SEE PRODUCT",
  },
  {
    id: 2,
    name: "XX99 Mark I Headphones",
    image: xx991,
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    buttonLabel: "SEE PRODUCT",
  },
  {
    id: 3,
    name: "XX59 Headphones",
    image: xx59,
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    buttonLabel: "SEE PRODUCT",
  },
];

const Headphones: React.FC = () => {
  return (
    <div>
      <div className="bg-[#191919] w-full h-40 text-white flex justify-center items-center mb-10 font-manrope font-bold text-[40px] leading-[44px] tracking-[1.43px]">
        HEADPHONES
      </div>
      <div className="flex flex-col items-center gap-10">
        {headphonesData.map((item) => (
          <Goods key={item.id} {...item} />
        ))}
      </div>
      <ProductCategory />
    </div>
  );
};

export default Headphones;
