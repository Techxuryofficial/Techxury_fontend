// import React, { useEffect } from 'react'
import './Mainstyling.css'
import { Link } from 'react-router-dom'
import { CiClock2 } from "react-icons/ci";
import FOG from 'vanta/src/vanta.fog'


// swiper impotin part 

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';




const CoursesNews = () => {

    

    return (
        <>
          <div className="container mx-auto">
          <h5 className="h124">Top Categories</h5>

          <div className="grid lg:grid-cols-4 px-auto sm:grid-cols-1">
            <div className="lg:col-span-3 flex justify-between flex-wrap sm:mx-auto">
              <div className="mx-auto px-2">
                <div className="flex my-2">
                  <img
                    src="https://images.pexels.com/photos/17330600/pexels-photo-17330600/free-photo-of-red-cardinal-sitting-next-to-metal-figure-of-bird.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    className="Cr_pic mr-3 rounded"
                    alt=""
                    srcset=""
                  />
                  <div>
                    <h2 className="cr_txt_hd -z-0">Web Devlopment</h2>
                    <p className="cr_txt_para text-sm -z-0">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="flex my-2">
                  <img
                    src="https://images.pexels.com/photos/17330600/pexels-photo-17330600/free-photo-of-red-cardinal-sitting-next-to-metal-figure-of-bird.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    className="Cr_pic mr-3 rounded"
                    alt=""
                    srcset=""
                  />
                  <div>
                    <h2 className="cr_txt_hd">Web Devlopment</h2>
                    <p className="cr_txt_para text-sm">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>

              <div className=" mx-auto px-2">
                <div className="flex my-2">
                  <img
                    src="https://images.pexels.com/photos/17330600/pexels-photo-17330600/free-photo-of-red-cardinal-sitting-next-to-metal-figure-of-bird.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    className="Cr_pic mr-3 rounded"
                    alt=""
                    srcset=""
                  />
                  <div>
                    <h2 className="cr_txt_hd">Web Devlopment</h2>
                    <p className="cr_txt_para text-sm">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="flex my-2">
                  <img
                    src="https://images.pexels.com/photos/17330600/pexels-photo-17330600/free-photo-of-red-cardinal-sitting-next-to-metal-figure-of-bird.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    className="Cr_pic mr-3 rounded"
                    alt=""
                    srcset=""
                  />
                  <div>
                    <h2 className="cr_txt_hd">Web Devlopment</h2>
                    <p className="cr_txt_para text-sm">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mx-auto px-2">
                <div className="flex my-2">
                  <img
                    src="https://images.pexels.com/photos/17330600/pexels-photo-17330600/free-photo-of-red-cardinal-sitting-next-to-metal-figure-of-bird.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    className="Cr_pic mr-3 rounded"
                    alt=""
                    srcset=""
                  />
                  <div>
                    <h2 className="cr_txt_hd">Web Devlopment</h2>
                    <p className="cr_txt_para text-sm">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="flex my-2">
                  <img
                    src="https://images.pexels.com/photos/17330600/pexels-photo-17330600/free-photo-of-red-cardinal-sitting-next-to-metal-figure-of-bird.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    className="Cr_pic mr-3 rounded"
                    alt=""
                    srcset=""
                  />
                  <div>
                    <h2 className="cr_txt_hd">Web Devlopment</h2>
                    <p className="cr_txt_para text-sm">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 cr_news_right_pic">
              <div className='cr_news_img'>
                <img src="https://images.pexels.com/photos/5784812/pexels-photo-5784812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              </div>

              <div className='cr_news_text'>
                <h1 className='text-3xl'>Web dev</h1>
                
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default CoursesNews
