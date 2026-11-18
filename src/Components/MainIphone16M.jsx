import React from 'react'
import img from "../assets/Container.png"
const MainIphone16M = () => {
  return (
    <div>
      <div className='max-w-full w-[85%] mx-auto'>
        <div className='flex items-center justify-center gap-[800px]'>
          <p className='text-[60px] font-bold'>iPhone</p>
          <p className='text-[20px] font-bold'>Designed to be loved.</p>
        </div>
        <div className='pt-[40px]'>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default MainIphone16M