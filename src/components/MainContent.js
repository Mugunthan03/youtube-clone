import React from 'react'
import Sidebar from './Sidebar'
import VideoContent from './VideoContent'
import ButtonSection from './ButtonSection'

const MainContent = () => {
  return (
    // <div className=' w-full  flex'>
    //     <Sidebar />
    //     <div className='w-full md:w-[80%]  mx-5 '>
    //     <ButtonSection />
    //     <VideoContent />
    //     </div>
       
    // </div>
    <div className='flex'>
      <div className='w-auto md:w-auto'>
      <Sidebar />

      </div>
      <div className='w-[98%] lg:w-[82%] xl:w-[88%]  mt-16'>
      <ButtonSection />
      <VideoContent />
   


      </div>
    </div>
  )
}

export default MainContent