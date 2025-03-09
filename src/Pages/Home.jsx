import React from "react";
// import { assets } from "../assets/assets_frontend/assets.js";
import Header from "../Components/Header";
import SpcialityMenu from "../Components/SpcialityMenu";
import TopDoctor from "../Components/TopDoctor";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="h-16 w-full">
      <Header />
      <SpcialityMenu />
      <TopDoctor />
      <Banner />
    </div>
  );
};

export default Home;
