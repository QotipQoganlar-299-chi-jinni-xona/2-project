import React from 'react'
import Checkbtn from './Checkbtn'
import TryFree from './TryFree'
import TryApple from './TryApple'

const Free3Months = () => {
    return (
        <>
            <div className='flex items-start flex-col gap-[30px] lg:w-[230px]'>
                <ul className='flex items-start flex-col gap-[6px]'>
                    <li className='text-[17px] font-[600] text-white'>
                        Buy an Apple device
                    </li>
                    <li className='text-[28px] font-[700] text-white'>
                        3 months free.
                    </li>
                    <li className='text-[17px] font-[400] text-white'>
                        Apple TV+ is included for 3 months when you purchase
                        an Apple device and redeem the offer within 90 days.
                    </li>
                </ul>
                <Checkbtn />
            </div>
            <div className='flex items-start flex-col gap-[30px] lg:w-[230px]'>
                <ul className='flex items-start flex-col gap-[6px]'>
                    <li className='text-[17px] font-[600] text-white'>
                        Free 7-day trial
                    </li>
                    <li className='text-[28px] font-[700] text-white'>
                        $9.99/mo.
                    </li>
                    <li className='text-[17px] font-[400] text-white'>
                        A monthly subscription is just $9.99 per month after a
                        free 7-day trial.
                        3
                        Share Apple TV+ with your family.
                        4
                    </li>
                </ul>
                <TryFree />
            </div>
            <div className='flex items-start flex-col gap-[30px] lg:w-[230px]'>
                <ul className='flex items-start flex-col gap-[6px]'>
                    <li className='text-[17px] font-[600] text-white'>
                        Free 1‑month trial
                    </li>
                    <li className='text-[28px] font-[700] text-white'>
                        Apple One
                    </li>
                    <li className='text-[17px] font-[400] text-white'>
                        Bundle Apple TV+ with up to five other great services for
                        one low monthly price. And enjoy more for less.
                    </li>
                </ul>
                <TryApple/>
            </div>
        </>
    )
}

export default Free3Months