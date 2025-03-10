import React, { useState } from "react";
import useStore from "../store/store";
import { useNavigate } from "react-router-dom";
import YouMayAlsoLike from "./YouMayAlsoLike";
import ProductCategory from "./ProductCategory";

const ProductDetails: React.FC = () => {
  const { selectedProduct } = useStore();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  if (!selectedProduct) {
    return <p className="text-center text-lg">No product selected.</p>;
  }

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="p-6 lg:mx-40">
      <span
        className="cursor-pointer text-gray-500"
        onClick={() => navigate(-1)}
      >
        Go Back
      </span>

      <div className="flex flex-col lg:flex-row justify-between">
        <div className="mt-6 mb-10 w-full h-82 bg-[#F1F1F1] flex justify-center items-center lg:w-135 lg:h-135">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="max-w-sm mx-auto"
          />
        </div>

        <div className="lg:flex lg:flex-col lg:mt-20">
          {selectedProduct.tag && (
            <span className="font-manrope text-[14px] tracking-[10px] text-[#D87D4A] block mt-8 mb-6">
              {selectedProduct.tag}
            </span>
          )}
          <h3 className="w-50 font-manrope font-bold text-[28px] leading-[44px] tracking-[1.43px] text-black mb-6">
            {selectedProduct.name}
          </h3>
          <p className="font-manrope font-medium text-[15px] leading-6 max-w-lg  mb-6">
            {selectedProduct.description}
          </p>
          <span className="text-[20px] font-bold block mb-4">
            $ {selectedProduct.price}
          </span>
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-between w-32 bg-gray-100 rounded-lg px-4 py-2">
              <button
                onClick={decrease}
                className="text-gray-400 text-xl cursor-pointer"
                disabled={quantity === 1}
              >
                –
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={increase}
                className="text-gray-400 text-xl cursor-pointer"
              >
                +
              </button>
            </div>

            <button className="w-40 h-12 bg-[#D87D4A] cursor-pointer hover:bg-[#FBAF85] text-white font-manrope font-bold text-[13px] tracking-[1px]">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:flex:row mt-20 lg:space-x-60">
        <div>
          <h3 className="font-manrope font-bold text-2xl leading-9 tracking-[0.86px]">
            FEATURES
          </h3>
          {selectedProduct && (
            <>
              <p className="mb-5 mt-10 opacity-50 font-manrope font-medium text-base leading-6 lg:w-160">
                {selectedProduct.features1}
              </p>
              <p className="opacity-50 font-manrope font-medium text-base leading-6 lg:w-160">
                {selectedProduct.features2}
              </p>
            </>
          )}
        </div>
        <div className="mt-20">
          <h3 className="mb-4 font-manrope font-bold text-2xl leading-9 tracking-[0.86px]">
            IN THE BOX
          </h3>

          <ul className="space-y-2">
            {selectedProduct.inTheBox?.map((boxItem, index) => (
              <li key={index} className="flex items-center gap-4">
                <span className="text-[#D87D4A] text-lg font-bold leading-6">
                  {boxItem.quantity}x
                </span>
                <span className="text-gray-700 text-lg font-medium leading-6">
                  {boxItem.item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 lg:hidden">
        <img
          className="w-full h-50 mt-5"
          src={selectedProduct.images?.[0] || ""}
          alt="first"
        />
        <img
          className="w-full h-50 mt-5"
          src={selectedProduct.images?.[1] || ""}
          alt="second"
        />
        <img
          className="w-full h-110 mt-5"
          src={selectedProduct.images?.[2] || ""}
          alt="third"
        />
      </div>

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-[445px_635px] hidden lg:grid mt-20">
        <div className="row-span-1">
          <img
            src={selectedProduct.images?.[0] || ""}
            alt="Person wearing headphones"
            className="w-full h-[280px] object-cover rounded-lg"
          />
        </div>
        <div className="row-span-2">
          <img
            src={selectedProduct.images?.[2] || ""}
            alt="Big close-up of headphones"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>
        <div className="row-span-1">
          <img
            src={selectedProduct.images?.[1] || ""}
            alt="Headphones on table with phone"
            className="w-full h-[280px] object-cover rounded-lg"
          />
        </div>
      </div>

      <YouMayAlsoLike current_product={selectedProduct.name} />
      <ProductCategory />
    </div>
  );
};

export default ProductDetails;
