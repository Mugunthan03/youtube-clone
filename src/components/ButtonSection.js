import React, { useState } from 'react'

const ButtonSection = () => {

    const list = ['All','web development','computer files','array','gaming','game shows','tamil cinema','music','java','telvison comedy','business ideas','AI','drama','street food','live','feature phones','recently uploaded']
    const[active,setActive] = useState(0)

    const handleButton = (index)=>{
      setActive(index)
    }

  return (
    <div className='flex overflow-x-auto w-full md:w-full  xl:w-[93%] mt-1 whitespace-nowrap no-scrollbar mx-2'>
        {
            list.map((item,index)=>{
                return  <button key={index} className={`text-xs  font-medium mx-2 my-3 px-3 py-2 rounded-lg capitalize  ${active === index ? 'bg-black text-white':'bg-gray-200'}`}
                onClick={()=>handleButton(index)}>{item}</button>
                 
            })
        }
    </div>
  )
}

export default ButtonSection