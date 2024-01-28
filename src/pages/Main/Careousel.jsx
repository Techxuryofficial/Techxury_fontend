
import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Careousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper z-0"
      >
        <SwiperSlide><img src="./img/cr1.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./img/cr2.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./img/cr3.webp" alt="" /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Careousel
