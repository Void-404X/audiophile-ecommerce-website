import React from "react";
import headphones from "../assets/icons/headphones.svg";
import speakers from "../assets/icons/speakers.svg";
import earphones from "../assets/icons/earphones.svg";
import arrow from "../assets/icons/arrow.svg";

const ProductCategory: React.FC = () => {
  const categories = [
    { name: "HEADPHONES", img: headphones, link: "#" },
    { name: "SPEAKERS", img: speakers, link: "#" },
    { name: "EARPHONES", img: earphones, link: "#" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-24 md:gap-8 md:justify-between h-auto px-6 my-10 lg:px-20 xl:px-60 2xl:px-80">
      {categories.map((item, index) => (
        <div
          key={index}
          className="relative bg-gray-100 h-42 p-6 md:w-full rounded-lg flex flex-col items-center"
        >

          <div className="absolute top-24 w-24 h-6 bg-black opacity-50 rounded-full blur-lg transform -translate-y-12"></div>


          <img
            src={item.img}
            alt={item.name}
            className="w-28 h-28 object-contain mb-4 transform -translate-y-3/4"
          />

          {/* Текст и кнопка */}
          <div className="text-center mt-4 transform -translate-y-20">
            <span className="block text-lg font-bold">{item.name}</span>
            <a
              href={item.link}
              className="text-gray-600 flex items-center justify-center gap-2 mt-2"
            >
              <span className="pr-2">SHOP</span>
              <img src={arrow} alt="arrow" className="w-4 h-4 text-yellow-500" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCategory;
