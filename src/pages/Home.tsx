import React from "react";
import ProductCategory from "../components/ProductCategory";
import Banner from "../components/Banner";
import SpeakerPromoCard from "../components/SpeakerPromoCard";

const Home: React.FC = () => {
  return (
    <div className="relative w-screen overflow-hidden">
      <Banner />
      <div className="pt-20">
        <ProductCategory />
        <SpeakerPromoCard />
      </div>
    </div>
  );
};

export default Home;
