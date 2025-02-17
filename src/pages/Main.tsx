import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import AudioFeatureCard from "../components/AudioFeatureCard";
import Footer from "../components/Footer"


const Main: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Outlet />
      <AudioFeatureCard />
      <Footer />
    </div>
  );
};

export default Main;
