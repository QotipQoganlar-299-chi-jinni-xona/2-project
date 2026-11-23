import React from 'react'
import appleOne from '../assets/One.svg'
import TryAppleOneBtn from './TryAppleOneBtn'
import SixApps from '../assets/SixApps.svg'

const ManyApps = () => {
    return (
        <>
        <div className='bg-[#F5F5F7] w-full'>
            <div className="container mx-auto w-[90%]">
                <div className='flex items-center flex-col gap-[30px] py-[60px] mt-[70px] lg:items-center lg:justify-between lg:flex-row-reverse'>
                <ul className='flex items-center flex-col gap-[20px]'>
                    <ul className='flex items-center gap-[10px] flex-col'>
                    <li>
                        <img src={appleOne} alt="" />
                    </li>
                    <li className='w-[300px] lg:w-[360px] text-[28px] font-[700] text-[#1D1D1F] text-center leading-[1.3]'>
                        Bundle Apple TV+
                        with up to five other
                        great services.
                        And enjoy more for less.
                    </li>
                    </ul>
                    <li>
                        <TryAppleOneBtn/>
                    </li>
                    <li className='text-[17px] text-[#0066CC] font-[600]'>
                        Learn more
                    </li>
                </ul>
                <img src={SixApps} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default ManyApps