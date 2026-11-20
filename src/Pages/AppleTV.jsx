import React from 'react'
import StreambtnA from '../Components/StreambtnA'
import rockrasm from '../assets/rock.png'
import Free3Months from '../Components/Free3Months'

const AppleTV = () => {
  return (
    <>
      <section className='bg-black pb-[20px]'>
        <div className="container mx-auto w-[90%] pt-[10px]">
          <div className='flex items-center justify-between'>
            <p className='text-white font-[700] text-[20px]'>
              Apple TV+
            </p>
            <StreambtnA />
          </div>
        </div>
        <img className='w-full pt-[12px] h-[400px] xl:h-[700px]' src={rockrasm} alt="" />
      </section>
      <section className='bg-black pb-[20px]'>
        <div className="container mx-auto w-[90%]">
          <div className='flex items-center flex-col gap-[200px]'>
            <ul className='flex items-center flex-col gap-[50px]'>
              <li className='text-[28px] xl:text-[45px] font-[700] text-white leading-[1.3] xl:w-[980px] lg:w-[700px]'>
                New Apple Originals
                every month — always ad‑free.
              </li>
              <li className='text-[28px] xl:text-[45px] font-[700] text-white leading-[1.3] xl:w-[980px] lg:w-[700px]'>
                Stream on the Apple TV app on
                Apple devices, smart TVs,
                consoles, or sticks.
              </li>
              <li className='text-[28px] xl:text-[45px] font-[700] text-white leading-[1.3] xl:w-[980px] lg:w-[700px]'>
                Watch in 4K HDR video with
                immersive Spatial Audio.
              </li>
              <li className='text-[28px] xl:text-[45px] font-[700] text-white leading-[1.3] xl:w-[980px] lg:w-[700px]'>
                Share a single subscription with
                up to five people.
              </li>
            </ul>
            <div className='flex items-start flex-col gap-[60px] lg:flex-row xl:flex xl:items-start xl:justify-between xl:w-[980px]'>
              <Free3Months/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AppleTV