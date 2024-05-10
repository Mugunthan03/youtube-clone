import React from 'react'
import logo from '../assets/youtube.jpg'
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { toggleSideBar } from '../utils/appSlice';

const Navbar = () => {

    const dispatch = useDispatch()

    const handleToggle = ()=>{
        dispatch(toggleSideBar())
    }
    
  return (
  <div className='flex justify-between items-center p-2 px-5 cursor-pointer bg-white fixed top-0 z-20 w-full'>

    <div className='flex items-center gap-5'>
        <AiOutlineMenu size={24} onClick={handleToggle} className='hidden lg:block'/>
        <img src={logo}  className='w-20 md:w-28' alt='youtube logo'/>
    </div>
    <div className='ml-[20%] md:hidden'>
      <IoSearchOutline size={24}/>
    </div>

    <div className='flex items-center w-[40%] hidden md:flex'>

        <div className='border border-gray-400 rounded-s-full p-2 w-full '>
        <input type='search' placeholder='Search' className='outline-none  w-full bg-transparent'/>
        </div> 
        <button className='border bg-gray-100 border-gray-400 p-2 rounded-r-full w-16'><IoSearchOutline size={24}/></button>                    
    </div>

    <div className='flex items-center gap-5'>
        <RiVideoAddLine size={24}/>
        <IoMdNotificationsOutline size={24}/>
        <img src='https://designimages.appypie.com/profilepicture/profilepicture-10-portrait-photography.jpg' alt='profile '
         className='w-8 rounded-full'/>
    </div>
  </div>
  )
}

export default Navbar
