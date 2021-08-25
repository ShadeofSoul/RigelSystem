import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../Content.css";
import { useAuth } from "../../../contexts/AuthContext";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { JSON_API_PRODUCTS } from "../../../helpers/consts";
import axios from "axios";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function Recommend({ product }) {
  const [swiperRef, setSwiperRef] = useState(null);

  const {
    user: { email },
  } = useAuth();
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    let arr = [];
    const { data } = await axios(`${JSON_API_PRODUCTS}`);
    data.forEach((elem) => {
      if (elem.type === product.type) {
        if (elem.id !== product.id) {
          arr.push(elem);
        }
      }
    });
    setProducts(arr);
  };
  useEffect(() => {
    getProducts();
  }, [products.length]);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
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
        {products.map((item) => (
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
