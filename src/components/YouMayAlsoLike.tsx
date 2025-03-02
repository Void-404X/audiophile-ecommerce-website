import React from "react";
import { useEffect } from "react";
import useHeadphonesStore from "../store/useHeadphonesStore";
import useStore from "../store/store";
import { useNavigate } from "react-router-dom";
import xx99mark1 from "../assets/icons/you_may_also_like_xx99.svg";
import xx99mark2 from "../assets/icons/you_may_also_like_xx99_2.svg";
import xx59 from "../assets/icons/you_may_also_like_xx59.svg";
import zx9 from "../assets/icons/you_may_also_like_zx9.svg";

interface Props {
  current_product: string;
}

const products_headphones = [
  { name: "XX99 Mark I Headphones", image: xx99mark1 },
  { name: "XX99 Mark II Headphones", image: xx99mark2 },
  { name: "XX59 Headphones", image: xx59 },
  { name: "ZX9 SPEAKER", image: zx9 },
];

const YouMayAlsoLike: React.FC<Props> = ({ current_product }) => {
  const navigate = useNavigate();
  const { headphonesData, setCurrentData, currentData } = useHeadphonesStore();
  const { setSelectedProduct } = useStore();

  const handleClick = (productName: string) => {
    const selectedProduct = headphonesData.find((p) => p.name === productName);

    if (selectedProduct) {
      setSelectedProduct(selectedProduct);

      navigate(
        `/detail/${selectedProduct.name.toLowerCase().replace(/\s+/g, "-")}`
      );
    }
  };

  useEffect(() => {
    console.log("Updated currentData:", );
    setCurrentData(currentData);
  }, [navigate]);

  return (
    <div>
      <h3 className="mt-10 mb-10 font-bold text-2xl leading-9 tracking-[0.86px]">
        YOU MAY ALSO LIKE
      </h3>

      {products_headphones
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
