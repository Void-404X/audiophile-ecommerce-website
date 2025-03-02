import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import AudioFeatureCard from "../components/AudioFeatureCard";
import Footer from "../components/Footer";

const Main: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
