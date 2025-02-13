import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <div className="bg-[#191919] min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
