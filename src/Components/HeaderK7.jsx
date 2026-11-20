import React from 'react'

const HeaderK7 = () => {
  return (
    <div className='bg-black text-amber-50 pt-[30px]'>
        <div className='max-w-[100%] w-[85%] mx-auto '>
            <div className='flex justify-between pb-[30px]'>
                <div>
                    <p className='text-[30px]'>Apple Arcade</p>
                </div>
                <div className='flex gap-[20px] items-center'>
                    <p>Overview</p>
                    <p>How-To Films</p>
                    <button className='bg-[#FF4D45] rounded-full p-[5px]'>Try it free</button>
                 </div>
            </div>
        </div>
        <div className='bg-[#333336] py-[20px] flex justify-center'>
                <p>Get 3 months of Apple Arcade free when you buy a new iPhone, iPad, Apple TV, or Mac.</p>
        </div>
    </div>
  )
}

export default HeaderK7