import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";

import "./Content.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

export default function SecondCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src='https://cdn.promodj.com/afs/cf4dce03af803a27148b483e87d7f09811:resize:2000x2000:same:8e9625' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700634480.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://get.wallhere.com/photo/space-planet-stars-galaxy-1325911.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://www.artranked.com/images/30/30ec91085724191b78c42999689e5fda.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://getwallpapers.com/wallpaper/full/3/d/0/96704.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://ds.obmenvsemfiles.net/fo/get/3199240/Nature_Science_Fiction_Fantasy_Wallpaper-nashobmen.org.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://avatars.mds.yandex.net/get-zen_doc/1645803/pub_5f764ff10d5f8951c90d2507_5f76548485c72a7ce4fa9067/scale_1200' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://i.imgur.com/ritVlA5.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://gamebomb.ru/files/galleries/001/2/27/220888.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://pbs.twimg.com/media/EzlqxzOXIAQETUT.jpg' />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        className='mySwiper2'
      >
        <SwiperSlide>
          <img src='https://cdn.promodj.com/afs/cf4dce03af803a27148b483e87d7f09811:resize:2000x2000:same:8e9625' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700634480.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://get.wallhere.com/photo/space-planet-stars-galaxy-1325911.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://www.artranked.com/images/30/30ec91085724191b78c42999689e5fda.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://getwallpapers.com/wallpaper/full/3/d/0/96704.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://ds.obmenvsemfiles.net/fo/get/3199240/Nature_Science_Fiction_Fantasy_Wallpaper-nashobmen.org.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://avatars.mds.yandex.net/get-zen_doc/1645803/pub_5f764ff10d5f8951c90d2507_5f76548485c72a7ce4fa9067/scale_1200' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://i.imgur.com/ritVlA5.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://gamebomb.ru/files/galleries/001/2/27/220888.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://pbs.twimg.com/media/EzlqxzOXIAQETUT.jpg' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
