import React from 'react'
import airpods from '../assets/AirPodsA.svg'

const AppleExperience = () => {
    return (
        <div className='w-full bg-[#F5F5F7] mt-[20px]'>
        <div className='container mx-auto w-[90%]'>
            <div className="flex flex-col items-center justify-center text-center py-12 px-4">
                <div className="flex items-center gap-1 mb-3 select-none">
                    <svg
                        className="w-6 h-6 fill-current text-[#1d1d1f] -mt-1"
                        viewBox="0 0 170 170"
                    >
                        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.13-1.9-14.34-6.08-3.69-3.03-7.61-7.82-11.77-14.37-5.93-9.26-10.78-19.99-14.54-32.19-3.76-12.2-5.64-23.86-5.64-34.98 0-12.91 3.23-23.62 9.69-32.13 6.46-8.51 14.66-12.88 24.61-13.11 4.92 0 10.61 1.44 17.07 4.32 6.46 2.88 10.63 4.36 12.51 4.44 1.46 0 6.08-1.71 13.86-5.13 7.78-3.42 14.34-4.89 19.68-4.41 14.57 1.18 25.53 6.91 32.88 17.19-13.02 7.89-19.44 18.89-19.26 33 .17 11.01 4.24 20.17 12.21 27.48 5.5 5.14 12.01 8.43 19.53 9.87-1.57 4.74-3.36 9.31-5.37 13.71zM119.22 31.9c0 8.59-3.14 16.63-9.42 24.11-7.57 8.85-16.74 13.97-26.69 13.18-.14-.99-.22-2.06-.22-3.22 0-8.24 3.58-17.06 10.02-24.37 3.19-3.66 7.25-6.7 12.18-9.12 4.92-2.42 9.57-3.75 13.95-3.99.12 1.16.18 2.3.18 3.41z" />
                    </svg>
                    <span className="text-[28px] font-bold tracking-tight text-[#1d1d1f] leading-none">
                        tv
                    </span>
                    <span className="text-[22px] font-extrabold tracking-tight leading-none bg-gradient-to-r from-[#ff2a5f] via-[#ff7b39] to-[#4cd964] bg-clip-text text-transparent ml-0.5">
                        4K
                    </span>
                </div>

                <h1 className="text-[36px] lg:text-[36px] sm:text-[48px] font-bold tracking-tight text-[#1d1d1f] leading-[1.08] max-w-[600px] mb-6">
                    The Apple experience.
                    <br />
                    Cinematic in every sense.
                </h1>

                <div className="flex items-center gap-6">
                    <button className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-[17px] font-normal px-5 py-2.5 rounded-full transition-colors cursor-pointer">
                        Buy
                    </button>

                    <a
                        href="#"
                        className="text-[#0066cc] hover:underline text-[17px] font-normal flex items-center gap-1 group"
                    >
                        <span>Learn more</span>
                        <span className="text-[19px] leading-none transition-transform group-hover:translate-x-0.5">
                            &rsaquo;
                        </span>
                    </a>
                </div>
            <img className='pt-[10px]' src={airpods} alt="" />
            </div>
        </div>
        </div>
    )
}

export default AppleExperience