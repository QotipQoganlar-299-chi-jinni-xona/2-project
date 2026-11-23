import React from 'react'
import Moreinfo from '../assets/Moreinfo.svg'


const QuestionsA = () => {
    return (
        <>
            <div className='flex items-center flex-col gap-[60px] mt-[50px]'>
                <p className='text-[28px] font-[700] text-[#1D1D1F]'>
                    Questions? Answers.
                </p>
                <div className='flex items-start flex-col gap-[20px] xl:w-[900px]'>
                    <ul className='flex items-center justify-between w-full'>
                        <li className='text-[18px] font-[700] text-[#1D1D1F]'>
                            What is Apple TV+?
                        </li>
                        <img src={Moreinfo} alt="" />
                    </ul>
                    <div className='border border-gray-600 w-full'></div>
                    <ul className='flex items-center justify-between w-full'>
                        <li className='text-[18px] font-[700] text-[#1D1D1F]'>
                            How can I watch it?
                        </li>
                        <img src={Moreinfo} alt="" />
                    </ul>
                    <div className='border border-gray-600 w-full'></div>
                    <ul className='flex items-center justify-between w-full'>
                        <li className='text-[18px] font-[700] text-[#1D1D1F]'>
                            What does it cost?
                        </li>
                        <img src={Moreinfo} alt="" />
                    </ul>
                    <div className='border border-gray-600 w-full'></div>
                    <ul className='flex items-center justify-between w-full'>
                        <li className='text-[18px] font-[700] text-[#1D1D1F]'>
                            Can I share with my family?
                        </li>
                        <img src={Moreinfo} alt="" />
                    </ul>
                    <div className='border border-gray-600 w-full'></div>
                    <ul className='flex items-center justify-between w-full'>
                        <li className='text-[18px] font-[700] text-[#1D1D1F] pr-[30px]'>
                            Are there commercials? And can I watch
                            on demand?
                        </li>
                        <img src={Moreinfo} alt="" />
                    </ul>
                    <div className='border border-gray-600 w-full'></div>
                    <ul className='flex items-center justify-between w-full'>
                        <li className='text-[18px] font-[700] text-[#1D1D1F]'>
                            Do I need an Apple TV 4K?
                        </li>
                        <img src={Moreinfo} alt="" />
                    </ul>
                    <div className='border border-gray-600 w-full'></div>
                    <ul className='flex items-center justify-between w-full'>
                        <li className='text-[18px] font-[700] text-[#1D1D1F]'>
                            Can I download to watch offline?
                        </li>
                        <img src={Moreinfo} alt="" />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default QuestionsA