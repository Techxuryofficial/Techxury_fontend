// import React from 'react'
import "./Mainstyling.css";
// Import Swiper React components
import { Link } from "react-router-dom";
import CoursesNews from "./CoursesNews";
// import required modules
import { FaBook } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


const Courses = () => {
  return (
    <>
      <CoursesNews />
       

        <div className="container mx-auto py-3">
          <h1 className="text-white text-2xl font-semibold flex">
            Famous courses <FaArrowRightLong className="my-auto ml-2 " />
          </h1>


          {/* <div className="mn_cr_data overflow-hidden cursor-pointer">
                  <div className="cr_mn_img">
                    <img
                      src="https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="cr_mn_img "
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div>
                    <div className=" ml-2">
                      <h6 className="text-left text-base ">Web development</h6>
                      <h4 className="text-left text-3xl font-semibold">
                        Data Mining
                      </h4>

                      <p className="mn-cr-name mt-2 text-left text-gray-400 font-semibold capitalize ">
                        narendra Modi{" "}
                      </p>
                    </div>
                    <div className="flex justify-between mx-2 my-2">
                      <div className="flex text-sm my-auto">
                        <FaBook className=" my-auto mr-1" />9 Lesson
                      </div>
                      <div className="flex text-sm my-auto mr-2">
                        <IoMdTime className=" my-auto mr-1" />
                        3hr
                      </div>
                    </div>
                    <hr className="mx-2 border-black" />
                  </div>
                </div> */}
          <div>
            
          <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mncr_poster"
      >
        <SwiperSlide>
        <div className="mn_cr_data overflow-hidden cursor-pointer">
                  <div className="cr_mn_img">
                    <img
                      src="https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="cr_mn_img "
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div>
                    <div className=" ml-2">
                      <h6 className="text-left text-base ">Web development</h6>
                      <h4 className="text-left text-3xl font-semibold">
                        Data Mining
                      </h4>

                      <p className="mn-cr-name mt-2 text-left text-gray-400 font-semibold capitalize ">
                        narendra Modi
                      </p>
                    </div>
                    <div className="flex justify-between mx-2 my-2">
                      <div className="flex text-sm my-auto">
                        <FaBook className=" my-auto mr-1" />9 Lesson
                      </div>
                      <div className="flex text-sm my-auto mr-2">
                        <IoMdTime className=" my-auto mr-1" />
                        3hr
                      </div>
                    </div>
                    
                  </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="mn_cr_data overflow-hidden cursor-pointer">
                  <div className="cr_mn_img">
                    <img
                      src="https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="cr_mn_img "
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div>
                    <div className=" ml-2">
                      <h6 className="text-left text-base ">Web development</h6>
                      <h4 className="text-left text-3xl font-semibold">
                        Data Mining
                      </h4>

                      <p className="mn-cr-name mt-2 text-left text-gray-400 font-semibold capitalize ">
                        narendra Modi{" "}
                      </p>
                    </div>
                    <div className="flex justify-between mx-2 my-2">
                      <div className="flex text-sm my-auto">
                        <FaBook className=" my-auto mr-1" />9 Lesson
                      </div>
                      <div className="flex text-sm my-auto mr-2">
                        <IoMdTime className=" my-auto mr-1" />
                        3hr
                      </div>
                    </div>
                    
                  </div>
                </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="mn_cr_data overflow-hidden cursor-pointer">
                  <div className="cr_mn_img">
                    <img
                      src="https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="cr_mn_img "
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div>
                    <div className=" ml-2">
                      <h6 className="text-left text-base ">Web development</h6>
                      <h4 className="text-left text-3xl font-semibold">
                        Data Mining
                      </h4>

                      <p className="mn-cr-name mt-2 text-left text-gray-400 font-semibold capitalize ">
                        narendra Modi{" "}
                      </p>
                    </div>
                    <div className="flex justify-between mx-2 my-2">
                      <div className="flex text-sm my-auto">
                        <FaBook className=" my-auto mr-1" />9 Lesson
                      </div>
                      <div className="flex text-sm my-auto mr-2">
                        <IoMdTime className=" my-auto mr-1" />
                        3hr
                      </div>
                    </div>
                    
                  </div>
                </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className="mn_cr_data overflow-hidden cursor-pointer">
                  <div className="cr_mn_img">
                    <img
                      src="https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="cr_mn_img "
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div>
                    <div className=" ml-2">
                      <h6 className="text-left text-base ">Web development</h6>
                      <h4 className="text-left text-3xl font-semibold">
                        Data Mining
                      </h4>

                      <p className="mn-cr-name mt-2 text-left text-gray-400 font-semibold capitalize ">
                        narendra Modi{" "}
                      </p>
                    </div>
                    <div className="flex justify-between mx-2 my-2">
                      <div className="flex text-sm my-auto">
                        <FaBook className=" my-auto mr-1" />9 Lesson
                      </div>
                      <div className="flex text-sm my-auto mr-2">
                        <IoMdTime className=" my-auto mr-1" />
                        3hr
                      </div>
                    </div>
                    
                  </div>
                </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className="mn_cr_data overflow-hidden cursor-pointer">
                  <div className="cr_mn_img">
                    <img
                      src="https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="cr_mn_img "
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div>
                    <div className=" ml-2">
                      <h6 className="text-left text-base ">Web development</h6>
                      <h4 className="text-left text-3xl font-semibold">
                        Data Mining
                      </h4>

                      <p className="mn-cr-name mt-2 text-left text-gray-400 font-semibold capitalize ">
                        narendra Modi{" "}
                      </p>
                    </div>
                    <div className="flex justify-between mx-2 my-2">
                      <div className="flex text-sm my-auto">
                        <FaBook className=" my-auto mr-1" />9 Lesson
                      </div>
                      <div className="flex text-sm my-auto mr-2">
                        <IoMdTime className=" my-auto mr-1" />
                        3hr
                      </div>
                    </div>
                    
                  </div>
                </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className="mn_cr_data overflow-hidden cursor-pointer">
                  <div className="cr_mn_img">
                    <img
                      src="https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="cr_mn_img "
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div>
                    <div className=" ml-2">
                      <h6 className="text-left text-base ">Web development</h6>
                      <h4 className="text-left text-3xl font-semibold">
                        Data Mining
                      </h4>

                      <p className="mn-cr-name mt-2 text-left text-gray-400 font-semibold capitalize ">
                        narendra Modi{" "}
                      </p>
                    </div>
                    <div className="flex justify-between mx-2 my-2">
                      <div className="flex text-sm my-auto">
                        <FaBook className=" my-auto mr-1" />9 Lesson
                      </div>
                      <div className="flex text-sm my-auto mr-2">
                        <IoMdTime className=" my-auto mr-1" />
                        3hr
                      </div>
                    </div>
                    
                  </div>
                </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className="mn_cr_data overflow-hidden cursor-pointer">
                  <div className="cr_mn_img">
                    <img
                      src="https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="cr_mn_img "
                      alt=""
                      srcset=""
                    />
                  </div>
                  <div>
                    <div className=" ml-2">
                      <h6 className="text-left text-base ">Web development</h6>
                      <h4 className="text-left text-3xl font-semibold">
                        Data Mining
                      </h4>

                      <p className="mn-cr-name mt-2 text-left text-gray-400 font-semibold capitalize ">
                        narendra Modi{" "}
                      </p>
                    </div>
                    <div className="flex justify-between mx-2 my-2">
                      <div className="flex text-sm my-auto">
                        <FaBook className=" my-auto mr-1" />9 Lesson
                      </div>
                      <div className="flex text-sm my-auto mr-2">
                        <IoMdTime className=" my-auto mr-1" />
                        3hr
                      </div>
                    </div>
                    
                  </div>
                </div>
        </SwiperSlide>
        
      </Swiper>
          
          </div>
        </div>
    </>
  );
};

export default Courses;
