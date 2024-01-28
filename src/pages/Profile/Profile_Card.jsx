import React from 'react'

const Profile_Card = () => {
  return (
    <>
    <div className='pr_cover_pic'>

    </div>
      <div className=' mx-auto border-2  border-black pr_candyman'>
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
      </div>

      
    </>
  )
}

export default Profile_Card
