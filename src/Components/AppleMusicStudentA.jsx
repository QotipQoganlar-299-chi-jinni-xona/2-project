import React from 'react'
import TryAppleOneBtn from './TryAppleOneBtn'
import ikkitatelefon from '../assets/TwoPhones.svg'

const AppleMusicStudentA = () => {
    return (
        <div className='w-full bg-[#F5F5F7] mt-[20px] pt-[40px]'>
            <div className='container mx-auto w-[90%]'>
                <div className='flex items-center gap-[40px] flex-col lg:flex lg:flex-row lg:text-start lg:w-full lg:items-center lg:justify-between'>
                    <ul className='flex items-center text-center flex-col gap-[30px]'>
                        <li className='text-[28px] font-[700] text-[#1D1D1F] leading-[1.2] w-[380px] text-center'>
                            The Apple Music Student
                            Plan comes with
                            Apple TV+ for free.
                        </li>
                        <li>
                            <TryAppleOneBtn />
                        </li>
                    </ul>
                    <img className='relative left-[10px] lg:left-[20px] lg:w-[400px]' src={ikkitatelefon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AppleMusicStudentA