import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../components/Content/Content.css";
import { useAuth } from "../contexts/AuthContext";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { JSON_API_PRODUCTS } from "../helpers/consts";
import axios from "axios";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function History({}) {
  let products = JSON.parse(localStorage.getItem("historyOfBuy"))?.products;
  console.log(products);

  return (
    <>
      <h1 className='text-center mt-10'> Purchase History </h1>
      <Swiper
        // onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        style={{ paddingBottom: "5vw" }}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        className='mySwiper '
      >
        {products?.map((item) => (
          <SwiperSlide>
            <div className='grid gap-4'>
              <img
                className='text-center text-blue-400 text-xl'
                src={item.img}
              />
              <p className='text-2xl text-gray-100'>{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
