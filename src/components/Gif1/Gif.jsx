import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Gif.css';

// import required modules
import { Pagination } from 'swiper/modules';


const Gif = () => {
  return (
    <>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={10}
       
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='swiperSlide'>
          <img src="https://www.boultaudio.com/cdn/shop/files/tws_updated_90x.gif?v=1689682081" />
        </SwiperSlide>
        <SwiperSlide className='swiperSlide'>
          <img src="https://www.boultaudio.com/cdn/shop/files/neckbands_gif_dd8b7b3e-cda2-4710-aa49-6098303abee0_90x.gif?v=1689682038" />
        </SwiperSlide>
        <SwiperSlide className='swiperSlide'>
          <img src="https://www.boultaudio.com/cdn/shop/files/smartwatches_gif_inL_6a761d49-d1be-47b0-bb00-28f33af7f043_90x.gif?v=1689682050" />
        </SwiperSlide>
        <SwiperSlide className='swiperSlide'>
          <img src="https://www.boultaudio.com/cdn/shop/files/headphones_gif_86d1e7e3-3d84-4b9f-ba38-37aea67e4281_90x.gif?v=1689682024" />
        </SwiperSlide>
        <SwiperSlide className='swiperSlide'>
          <img src="https://www.boultaudio.com/cdn/shop/files/speakers_gif_edad5c55-18f4-4349-be2f-536d3b7f727e_90x.gif?v=1689682066" />
        </SwiperSlide>
        <SwiperSlide className='swiperSlide'>
          <img src="https://www.boultaudio.com/cdn/shop/files/accessories_gif_0e310c6f-88bb-4c46-a4e1-b8193e66a7ad_90x.gif?v=1689682011" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Gif;
