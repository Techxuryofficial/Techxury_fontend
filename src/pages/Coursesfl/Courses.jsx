import React, { useState, useEffect, useRef } from 'react'
// import { VANTA } from 'vanta';

import MnCourses from '../Main/MnCourses'
import Cr_heading from './Cr_heading'
import { FaBook } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import Cr_Carousel from './Cr_Carousel';
function Courses() {


  return (
    <>
      <Cr_Carousel />
      <Cr_heading />
      {/* <MnCourses /> */}
      
        
     
    </>
  )
}

export default Courses
