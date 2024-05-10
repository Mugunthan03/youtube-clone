import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts,SiYoutubegaming } from "react-icons/si";
import { MdOutlineSubscriptions, MdPlaylistPlay ,MdOutlineWatchLater,MdOutlineMovie,MdOutlineTv} from "react-icons/md";
import { BiSolidUserAccount,BiLike } from "react-icons/bi";
import { GoHistory } from "react-icons/go";
import { LiaFileVideoSolid } from "react-icons/lia";
import { RiFireLine } from "react-icons/ri";
import { AiOutlineShopping } from "react-icons/ai";
import { IoMusicalNoteOutline } from "react-icons/io5";



import { useSelector } from 'react-redux';
import '../index.css'



const nav = [
    {
        icons:<IoMdHome size={24}/>,
        title :'Home'
    },
    {
        icons:<SiYoutubeshorts size={24}/>,
        title :'Shorts'
    },
    {
        icons:<MdOutlineSubscriptions size={24}/>,
        title :'Subscription'
    }, 
    {
        icons:<BiSolidUserAccount size={24} />,
        title:'Your Channel'
    },
    {
        icons:<GoHistory size={24} />,
        title:'History'
    },
    {
        icons:<MdPlaylistPlay size={24} />,
        title:'Playlists'
    },
    {
        icons:<LiaFileVideoSolid size={24} />,
        title:'Your Videos'
    },
    {
        icons:<MdOutlineWatchLater size={24} />,
        title:'Watch Later'
    },
    {
        icons:<BiLike size={24} />,
        title:'Liked videos'
    },
    {
        icons:<RiFireLine size={24} />,
        title:'Trending'
    },
    {
        icons:<AiOutlineShopping size={24} />,
        title:'shopping'
    },
    {
        icons:<IoMusicalNoteOutline size={24} />,
        title:'Music'
    },
    {
        icons:<MdOutlineMovie size={24} />,
        title:'Movies'
    },
    {
        icons:<MdOutlineTv size={24} />,
        title:'Live'
    },
    {
        icons:<SiYoutubegaming size={24} />,
        title:'Gaming'
    },
]

const Sidebar = () => {  

    const open = useSelector((Store)=>Store.app.open)
    
  return (
    <div className='w-full min-h-screen overflow-x-hidden overflow-y-scroll  pt-16  h-[calc(100vh-2rem)] p-5 sidebar hidden lg:block '>
          
            {
                nav.map((item,index)=>{
                    return  <div className='flex gap-2 items-center py-4  '>
                        <button key={index} >{item.icons}</button>
                        <h1 className={`w-full md:mr-2 lg:mr-3  md:text-sm font-medium  cursor-pointer ${open?'':'hidden'}`}>{item.title}</h1>
                        </div>
                })
            }
           
           </div>
   
  )
}

export default Sidebar