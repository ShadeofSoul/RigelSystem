import React from "react";
import AboutUs from "../components/Content/AboutUs";
import Carousel from "../components/Content/Carousel";
import BestProducts from "../components/Content/Products/BestProducts";
import SecondCarousel from "../components/Content/SecondCarousel";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../components/Navbar/Navbar.css";

const HomePage = () => {
  return (
    <>
      <div className='home'>
        <Carousel />
      </div>
      <AboutUs />
      <SecondCarousel />
      <h2 className='text-center text-5xl text-blue-400 mt-20'>
        TOP 3 CREATURES
      </h2>
      <div className='grid grid-cols-1 2xl:grid-cols-3 sm:grid-cols-3'>
        <BestProducts />
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
