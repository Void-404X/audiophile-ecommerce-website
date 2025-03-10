import React, { useState } from "react";
import useHeadphonesStore from "../store/useHeadphonesStore";
import { useLocation } from "react-router-dom";
import useStore from "../store/store";
import { useNavigate } from "react-router-dom";
import xx99mark1 from "../assets/icons/you_may_also_like_xx99.svg";
import xx99mark2 from "../assets/icons/you_may_also_like_xx99_2.svg";
import xx59 from "../assets/icons/you_may_also_like_xx59.svg";

import zx9 from "../assets/icons/you_may_also_like_zx9.svg";
import zx7 from "../assets/icons/you_may_also_like_zx7.svg";

interface Props {
  current_product: string;
}

const products_headphones = [
  { name: "XX99 Mark I Headphones", image: xx99mark1 },
  { name: "XX99 Mark II Headphones", image: xx99mark2 },
  { name: "XX59 Headphones", image: xx59 },
  { name: "ZX9 SPEAKER", image: zx9 },
];

const products_speakers = [
  { name: "ZX7 SPEAKER", image: zx7 },
  { name: "ZX9 SPEAKER", image: zx9 },
  { name: "XX99 Mark I Headphones", image: xx99mark1 },
  { name: "XX59 Headphones", image: xx59 },
];

const YouMayAlsoLike: React.FC<Props> = ({ current_product }) => {
  const navigate = useNavigate();
  const { headphonesData } = useHeadphonesStore();
  const { setSelectedProduct } = useStore();
  const location = useLocation();

  const segments = location.pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1] || "";
  const [currentProduct, setCurrentProduct] = useState(lastSegment);

  const handleClick = (productName: string) => {
    const selectedProduct = headphonesData.find((p) => p.name === productName);
    if (selectedProduct) {
      setSelectedProduct(selectedProduct);
      setCurrentProduct(selectedProduct.type);
      console.log(selectedProduct);
      navigate(
        `/detail/${selectedProduct.name.toLowerCase().replace(/\s+/g, "-")}/${selectedProduct.type}`
      );
    }
  };

  return (
    <div>
      <h3 className="mt-30 mb-10 font-bold text-2xl leading-9 tracking-[0.86px]">
        YOU MAY ALSO LIKE
      </h3>

      {currentProduct === "headphones" &&
        products_headphones
          .filter((product) => product.name !== current_product)
          .map((product, index) => (
            <div key={index} className="mt-10 mb-20">
              <div className="w-full h-40 bg-[#F1F1F1] flex justify-center items-center">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="mt-10 mb-3 font-bold text-2xl tracking-[1.71px]">
                  {product.name}
                </span>
                <button
                  onClick={() => handleClick(product.name)}
                  className="mt-5 w-40 h-12 bg-[#D87D4A] text-white font-bold uppercase"
                >
                  SEE PRODUCT
                </button>
              </div>
            </div>
          ))}

      {currentProduct === "speaker" &&
        products_speakers
          .filter((product) => product.name !== current_product)
          .map((product, index) => (
            <div key={index} className="mt-10 mb-20">
              <div className="w-full h-40 bg-[#F1F1F1] flex justify-center items-center">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="mt-10 mb-3 font-bold text-2xl tracking-[1.71px]">
                  {product.name}
                </span>
                <button
                  onClick={() => handleClick(product.name)}
                  className="mt-5 w-40 h-12 bg-[#D87D4A] text-white font-bold uppercase"
                >
                  SEE PRODUCT
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default YouMayAlsoLike;
