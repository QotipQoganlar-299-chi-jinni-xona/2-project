import React from 'react'
import { 
  TbDeviceMobileRotated, 
  TbDeviceIpadHorizontal, 
  TbDeviceLaptop, 
  TbDeviceTv, 
  TbCardboards 
} from "react-icons/tb";
import { SlArrowDown } from "react-icons/sl";
const AplleProductK7 = () => {
  return (
<div>
    <div className="flex flex-col items-center gap-8 text-[#1D1D1F] py-[50px]">
        <div className='items-center'>
            <p className='font-bold text-[40px] pb-[20px] '>
                Play across
                your devices.
            </p>
        </div>
        
      <div className="flex gap-14">
        <div className="flex flex-col items-center gap-2">
          <TbDeviceMobileRotated className="text-5xl stroke-[1.5]" />
          <span className="text-sm font-semibold">iPhone</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <TbDeviceIpadHorizontal className="text-5xl stroke-[1.5]" />
          <span className="text-sm font-semibold">iPad</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <TbDeviceLaptop className="text-5xl stroke-[1.5]" />
          <span className="text-sm font-semibold">Mac</span>
        </div>
      </div>

      <div className="flex gap-14">
        <div className="flex flex-col items-center gap-2">
          <TbDeviceTv className="text-5xl stroke-[1.5]" />
          <span className="text-sm font-semibold">Apple TV</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <TbCardboards className="text-5xl stroke-[1.5]" />
          <span className="text-sm font-semibold">Apple Vision Pro</span>
        </div>
      </div>
    </div>
    <div className='max-w-[100%] w-[85%] mx-auto '>
        <div className='flex justify-center py-[50px]'>
            <p className='text-[60px] font-bold'>
                Questions? Answers.
            </p>
        </div>
        <div className='py-[50px] flex flex-col gap-[30px] font-bold'>
            <div className='flex justify-between text-[20px]'>
                <p>What is Apple Arcade?</p>
                <SlArrowDown/>
            </div>
            <hr />
            <div className='flex justify-between text-[20px]'>
                <p>What games are included?</p>
                <SlArrowDown/>
            </div>
            <hr />
            <div className='flex justify-between text-[20px]'>
                <p>How often are new games added?</p>
                <SlArrowDown/>
            </div>
            <hr />
            <div className='flex justify-between text-[20px]'>
                <p>Where do I find Apple Arcade?</p>
                <SlArrowDown/>
            </div>
            <hr />
            <div className='flex justify-between text-[20px]'>
                <p>What does it cost?</p>
                <SlArrowDown/>
            </div>
            <hr />
            <div className='flex justify-between text-[20px]'>
                <p>What do I need to join Apple Arcade?</p>
                <SlArrowDown/>
            </div>
            <hr />
            <div className='flex justify-between text-[20px]'>
                <p>Can I play with a controller?</p>
                <SlArrowDown/>
            </div>
            <hr />
            

        </div>
    </div>
    
</div>
  )
}

export default AplleProductK7