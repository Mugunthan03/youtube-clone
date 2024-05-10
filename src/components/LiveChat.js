import React, { useEffect } from 'react'
import CommentSection from './CommentSection'
import { useDispatch, useSelector } from 'react-redux'
import { setMessage } from '../utils/chatSlice';
import { generateRandomName,generateRandomMessage } from '../utils/randomName';


const LiveChat = () => {
  const message = useSelector((store)=>store.chat.message)
  const dispatch = useDispatch()

  useEffect(()=>{

    const timer = setInterval(() => {
      dispatch(setMessage({name:generateRandomName(),message:generateRandomMessage(16)}))      
    }, 1000);

    return (()=>{
      clearInterval(timer)
    })
  },[])


  return (
    <div >
      {
        message.map((item,index)=>{
          return <CommentSection key={index} item={item} />
        })
      }
        
      </div>
  )
}

export default LiveChat