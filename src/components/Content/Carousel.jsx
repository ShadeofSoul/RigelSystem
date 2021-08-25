import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Content.css";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

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
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='grid gap-4'>
            <p className='text-center text-blue-400 text-xl'>
              “In this single galaxy of ours there are eighty-seven thousand
              million suns.”
            </p>
            <p className='text-2xl text-gray-100'> - Arthur C. Clarke</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='grid gap-4'>
            <p className='text-center text-blue-400 text-xl'>
              “Space has the ability to produce a triple bottom line, or ROIII:
              Return on Investment, Innovation, and Inspiration.”
            </p>
            <p className='text-2xl text-gray-100'>- Robert C. Jacobson.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='grid gap-4'>
            <p className='text-center text-blue-400 text-xl'>
              “The Earth was small, light blue, and so touchingly alone, our
              home that must be defended like a holy relic.”
            </p>
            <p className='text-2xl text-gray-100'>– Christa McAuliffe.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='grid gap-4'>
            <p className='text-center text-blue-400 text-xl'>
              “Part of life’s mystery depends on future possibilities, and
              mystery is an elusive quality which evaporates when sampled
              frequently, to be followed by boredom.”
            </p>
            <p className='text-2xl text-gray-100'>– Michael Collins.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
