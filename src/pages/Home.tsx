import React from "react";
import ProductCategory from "../components/ProductCategory";
import Banner from "../components/Banner";
import SpeakerPromoCard from "../components/SpeakerPromoCard";
import Speaker_Cart_ZX7 from "../components/Speaker_Cart_ZX7";

const Home: React.FC = () => {
  return (
    <div className="relative w-screen overflow-hidden">
      <Banner />
      <div className="pt-20">
        <ProductCategory />
        <SpeakerPromoCard />
        <Speaker_Cart_ZX7 />
      </div>
    </div>
  );
};

export default Home;
