import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY, YOUTUBE_VIDEO } from '../constants/youtube';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContent = () => {
    const [video,setVideo] = useState([]);

    const youtube_video = async () => {
        try {
            const data = await axios.get(YOUTUBE_VIDEO,{
                params: {
                    key: API_KEY
                }
            });
            setVideo(data?.data?.items);
            // console.log(data.data.items);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        youtube_video();
    }, []);

    return (
        <div className='flex  mt-2 w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-5  mx-5 overflow-y-auto scrollbar-hidden' style={{ maxHeight: 'calc(100vh - 150px)' }}>
                {video.map((item) => (
                    <Link to={`/watch?v=${item.id}`} key={item.id}>
                        <VideoCard item={item} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default VideoContent;
