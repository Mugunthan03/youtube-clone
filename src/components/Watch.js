import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { API_KEY } from '../constants/youtube';
import { PiThumbsUp,PiThumbsDown, PiShareFatThin  } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import LiveChat from './LiveChat';
import { useDispatch } from 'react-redux';
import { setMessage } from '../utils/chatSlice';


const Watch = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');

    const [title, setTitle] = useState('');
    const [channelLogo, setChannelLogo] = useState('');
    const [channelTitle, setChannelTitle] = useState('');

    const[input,setInput] = useState('')

    const dispatch = useDispatch()

    const handleSubmit=()=>{
       dispatch(setMessage({name:'admin',message:input}))
       setInput('')
    }

    const watchVideo = async () => {
        try {
            const videoDetailsResponse = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos`, {
                params: {
                    part: 'snippet',
                    id: videoId,
                    key: API_KEY
                }
            });

            const channelId = videoDetailsResponse.data.items[0].snippet.channelId;
            const channelLogoResponse = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels`, {
                params: {
                    part: 'snippet',
                    id: channelId,
                    key: API_KEY
                }
            });

            setTitle(videoDetailsResponse.data.items[0].snippet.title);
            setChannelLogo(channelLogoResponse.data.items[0].snippet.thumbnails.default.url);
            setChannelTitle(channelLogoResponse.data.items[0].snippet.title);
         
           
            
        } catch (error) {
            console.error('Error fetching video and channel details:', error);
        }
    };

    useEffect(() => {
        watchVideo();
    }, [videoId]);

    return (
        <div className='mt-16 w-[92%] xl:w-[95%]  h-screen md:h-full lg:h-screen flex flex-wrap mx-0 md:mx-10 '>
            
            <div className='w-full lg:w-[60%] m-5 mx-5 h-[70%] '>
                <iframe src={`https://www.youtube.com/embed/${videoId}?&rel=0&autoplay=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='rounded-xl w-full h-[50%]  md:w-full md:h-[500px] lg:h-[400px] '></iframe>

                <div>
                    <div >
                        <h1 className='text-sm md:text-xl font-bold mt-2 mx-1 '>{title}</h1>
                    </div>

                    <div className='flex  items-center  flex-wrap xl:flex-nowrap  gap-2 mt-5 '>

                        <div className='flex  justify-start items-center gap-5 w-full  xl:w-1/2'>
                        <img src={channelLogo} alt="Channel Logo" className='w-8 md:w-12 md:h-12 rounded-full mt-2' />
                        <p className='font-bold text-sm xl:text-base '>{channelTitle}</p>

                        <p className='bg-black rounded-full text-xs xl:text-base text-white p-2 ml-5 px-5 cursor-pointer'>subscribe</p>
                        

                        </div>
                       
                        <div className='flex  xl:w-1/2  justify-between mx-2 text-xs xl:text-base mt-2 gap-2 '>

                        <div className='flex items-center gap-2 bg-[#F2F2F2] px-5 rounded-full'>
                        <p className='flex items-center gap-2 p-2 font-medium '><PiThumbsUp />107K</p>
                        <p className='border-l-2  border-gray-400 px-2'><PiThumbsDown /></p>
                        </div>
                        
                        <p className='flex items-center gap-3 bg-[#F2F2F2] rounded-full px-5 font-medium '><PiShareFatThin />share</p>
                        <p className='flex items-center gap-3 bg-[#F2F2F2] rounded-full px-5 font-medium'><TfiDownload />Download</p>

                        </div>
                        
                    </div>
                    <div></div>
                   
                </div>
            </div>

            <div className='w-full lg:w-[28%] h-96 lg:h-2/3  mx-5  mt-0 lg:mt-5 border-gray-300 border-2  flex flex-col justify-between rounded-md'>

                <div className='flex justify-between items-center p-2 border-b-2 border-gray-300 border  '>
                    <h1 className='text-xl'>Top Chat</h1>
                    <BsThreeDotsVertical />
                </div>
                <div className='overflow-y-scroll  h-full mx-1 flex flex-col-reverse '>
                   <LiveChat />               
                </div>

                <div className='flex  items-center justify-between gap-2  border-t-2 border-gray-300 border w-full cursor-pointer '>
                <img src='https://designimages.appypie.com/profilepicture/profilepicture-10-portrait-photography.jpg' alt='profile '
                 className='w-8 rounded-full mt-2 ml-2 mb-2'/>

                    <input type='text' className='w-full bg-transparent border-2 mt-2 mb-2 px-2 rounded-xl border-gray-300 outline-none' placeholder='Send Message...'  onChange={(e)=>setInput(e.target.value)} value={input}/>
                    <LuSendHorizonal size={30} className='mr-2 ' onClick={handleSubmit} />

                </div>
                
                
                </div>  
        </div>
    );
};

export default Watch;
