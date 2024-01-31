import React from 'react'

const Profile_Card = () => {
  return (
    <>
      <div className=' mx-auto my-3 pr_card_detail '>
        <div className=' pr_left_pic mx-auto'>
          {/* <div className='pr_cover_pic'>
          </div> */}
          <img src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='pr_img_pic text-center mx-auto' alt="" />

          <h1 className='text-2xl font-bold my-3 text-center'>Error Name</h1>

          <p className='my-1 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aliquam dolorem</p>

        </div>

        <div className=' pr_bg_information'>
          <h1 className='text-3xl ml-2 font-bold  mt-3'>Information</h1>
          <hr className='to-black' />

          <div className='Pr_information_flex'>

              <div className='w-6/12 pl-3' >

                <div className='my-3 pr_detail_mx_auto'>
                  <h4 className=' pr_detail_title'>Email Id:</h4>
                  <p className='mt-2   pr_detail_para'> Techxury.official@gamil.com</p>
                </div>

                <div className='my-3 pr_detail_mx_auto'>
                  <h4 className=' pr_detail_title'>User Id:</h4>
                  <p className='mt-2   pr_detail_para'> 123456789@Techxury</p>
                </div>

                <div className='my-3 pr_detail_mx_auto'>
                  <h4 className=' pr_detail_title'>Issue Date:</h4>
                  <p className='mt-2   pr_detail_para' >31/jan/2024</p>
                </div>
              </div>
  
              <div className='w-6/12 pl-3'>

              <div className='my-3 pr_detail_mx_auto'>
                  <h4 className=' pr_detail_title'>Skill:</h4>
                  <p className='mt-2   pr_detail_para'> XYZ Experience</p>
                </div>

                <div className='my-3 pr_detail_mx_auto'>
                  <h4 className=' pr_detail_title'>Completed Courses:</h4>
                  <p className='mt-2   pr_detail_para'> Nothing</p>{/* LIke:) web dev, A.i , Data science */}
                </div>


              </div>


          </div>
        </div>





      </div>
      {/* <div className=' mx-auto border-2  border-black pr_candyman'>
        <div>
          <img src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='pr_img_pic mx-auto' alt="" />
          <h1 className='text-2xl font-bold text-center my-2'>Elon musk <span className='px-2 py-0 bg-purple-600 text-sm border-2 border-black font-bold text-white  '>Level 1</span></h1>

          <div className='mx-auto text-center text-gray-500'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam itaque sit praesentium repellat saepe dolorem?
          </div>

          <div className='border-b border-b-blue-500 mx-40 my-3'>
            <h6 className='text-sm text-blue-600'>User id:</h6>
            <p>1234@Techxury</p>
          </div>

          <div className='border-b border-b-blue-500 mx-40 my-3'>
            <h6 className='text-sm text-blue-600'>Email id:</h6>
            <p>rajiv@gmail.com</p>
          </div>

          <div className='border-b border-b-blue-500 mx-40 my-3'>
            <h6 className='text-sm text-blue-600'>Skill:</h6>
            <p>XYZ Experience</p>
          </div>

          <div className='border-b border-b-blue-500 mx-40 my-3'>
            <h6 className='text-sm text-blue-600'>Issue Date:</h6>
            <p>24/1/24</p>
          </div>
        </div>
      </div> */}


    </>
  )
}

export default Profile_Card
