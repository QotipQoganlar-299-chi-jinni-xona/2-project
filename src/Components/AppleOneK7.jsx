import React from 'react'
import { SiApplemusic, SiAppletv, SiApplearcade, SiApplenews, SiIcloud } from "react-icons/si";
import { MdOutlineTrackChanges } from "react-icons/md"; 
import { DiApple } from "react-icons/di";
const AppleOneK7 = () => {
  return (
    <div>
        <div className='max-w-[100%] w-[85%] mx-auto py-[100px]'> 
            <div className='flex justify-center text-[100px] items-center font-bold '>
                <DiApple/>
                <p>One</p>
            </div> 
            <div className="flex flex-wrap justify-center gap-4 py-6">
              
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-[#FA57C1] to-[#FA233B] flex items-center justify-center text-white shadow-sm">
                <SiApplemusic className="text-3xl" />
              </div>

              
              <div className="w-14 h-14 rounded-2xl bg-[#1D1D1F] flex items-center justify-center text-white shadow-sm">
                <SiAppletv className="text-3xl" />
              </div>

              
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-[#FF5E3A] to-[#FF2A68] flex items-center justify-center text-white shadow-sm">
                <SiApplearcade className="text-3xl" />
              </div>

             
              <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-[#FA243C] shadow-sm">
                <SiApplenews className="text-3xl" />
              </div>

              <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-[#A4FF00] shadow-sm">
                <MdOutlineTrackChanges className="text-3xl" />
              </div>

             
              <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-[#3693F3] shadow-sm">
                <SiIcloud className="text-3xl" />
              </div>
            </div>
            <div className='flex justify-center text-[20px] pt-[20px]'>
                <p>
                    Bundle Apple Arcade with up to five other great services.
                    And enjoy more for less.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AppleOneK7