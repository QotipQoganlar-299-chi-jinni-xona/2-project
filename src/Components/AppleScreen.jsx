import React from 'react'
import applescreen from '../assets/screenphone.png'

const AppleScreen = () => {
    return (
        <>
            <div className='w-full bg-[#f5f5f7] mt-[20px]'>
                <div className="flex flex-col items-center justify-center text-center py-12 lg:py-6 px-4">
                    <p className="text-[22px] sm:text-[26px] font-semibold tracking-tight text-[#1d1d1f] leading-tight mb-2">
                        AirPlay
                    </p>

                    <h2 className="text-[36px] lg:text-[35px] sm:text-[48px] font-bold tracking-tight text-[#1d1d1f] leading-[1.08] max-w-[620px] mb-5">
                        Bring Apple TV+ to
                        <br />a screen near you.
                    </h2>

                    <a
                        href="#"
                        className="text-[#0066cc] hover:underline text-[18px] sm:text-[20px] font-normal inline-flex items-center gap-1 group"
                    >
                        <span>Learn more</span>
                        <span className="text-[21px] leading-none transition-transform group-hover:translate-x-0.5">
                            &rsaquo;
                        </span>
                    </a>
                <img className='pt-[60px]' src={applescreen} alt="" />
                </div>
            </div>
        </>
    )
}

export default AppleScreen