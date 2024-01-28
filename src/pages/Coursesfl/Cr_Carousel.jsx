// import React from 'react'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Coursestyling.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import './styles.css';

// import required modules
import { Scrollbar } from 'swiper/modules';
import { FaSearch } from "react-icons/fa";
import { Link  } from 'react-router-dom';
const Cr_Carousel = () => {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper cr_carousel_css z-0"
      >
        <SwiperSlide><img src="./img/cr1.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./img/cr2.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./img/cr3.webp" alt="" /></SwiperSlide>
        
      </Swiper>


      <div className='my-3 container flex justify-center place-content-center mx-2'>
                <div className='text-center py-auto flex '>
                    <input type="text" name="" id="" placeholder='Search Content' className='py-2 px-2 outline-none text-lg font-semibold'/>
                    <Link to='' className='text-center py-2 px-5 text-black bg-orange-600 text-lg flex font-semibold'><FaSearch className='my-auto' />Search</Link>
                </div>
      </div>
      </>
  )
}

export default Cr_Carousel
