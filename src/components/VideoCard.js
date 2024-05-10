import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY } from '../constants/youtube';

const VideoCard = ({ item }) => {
    const[ylogo,setYlogo] = useState('')
    
    const youTubeChannel = async () => {
        try {
            const res = await axios.get(`https://www.googleapis.com/youtube/v3/channels`, {
                params: {
                    part: 'snippet,contentDetails,statistics',
                    id: item.snippet.channelId,
                    key: API_KEY
                }
            });
            // console.log(res);
            setYlogo(res.data.items[0].snippet.thumbnails.high.url)
           

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        youTubeChannel();
    }, []);

    const formatViews = (viewCount) => {
        if (viewCount >= 1000000) {
            return (viewCount / 1000000).toFixed(1) + 'M';
        } else if (viewCount >= 100000) {
            return (viewCount / 100000).toFixed(1) + 'L';
        } else {
            return viewCount;
        }
    };

    return (
      
        <div className='md:w-full lg:w-96  '>
            <div className='cursor-pointer'>
                <img src={item.snippet.thumbnails.medium.url} className='w-full rounded-md my-3' loading='lazy' />
            </div>

            <div className='flex gap-2 cursor-pointer'>
                <img src={ylogo} alt='youtube logo' className='w-10 h-10 rounded-full' />
                <div>
                    <h1 className='font-bold text-sm md:text-xs'>{item.snippet.title}</h1>
                    <p>{item.snippet.channelTitle}</p>
                    <p>{formatViews(item.statistics.viewCount)} views</p>                  
                </div>
            </div>
        </div>
        
    );
};

export default VideoCard;
