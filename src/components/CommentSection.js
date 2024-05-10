import React from 'react'

const CommentSection = ({item}) => {
  return (
    <div className='flex items-center gap-2 '>
        <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' alt='profile '
                 className='w-8 rounded-full mt-2 ml-2 mb-2'/>
        <h1 className='text-xs xl:text-base'>{item.name}</h1>
        <h1  className='text-xs xl:text-base'>{item.message}</h1>
    </div>
  )
}

export default CommentSection