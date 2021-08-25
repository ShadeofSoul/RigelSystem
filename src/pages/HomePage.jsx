import React from "react";
import AboutUs from "../components/Content/AboutUs";
import Carousel from "../components/Content/Carousel";
import BestProducts from "../components/Content/Products/BestProducts";
import SecondCarousel from "../components/Content/SecondCarousel";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../components/Navbar/Navbar.css";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";

const HomePage = () => {
  return (
    <>
      <div className='home'>
        <Carousel />
      </div>

      <AboutUs />
      <Flip left>
        <SecondCarousel />
      </Flip>
      <h2 className='text-center text-5xl text-blue-400 mt-20'>
        TOP 3 CREATURES
      </h2>
      <Bounce top>
        <div className='grid grid-cols-1 2xl:grid-cols-3 sm:grid-cols-3'>
          <BestProducts />
        </div>
      </Bounce>

      <Footer />
    </>
  );
};

export default HomePage;
