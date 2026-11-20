import React from 'react'
import img1 from '../assets/bfddc3348504ed090772d3cf47c373a750411b24.png'

const MesmerizeB = () => {
    return (
        <div className='max-[100%] w-[85%] mx-auto'>
            <div className=' flex justify-center text-teal-500 text-4xl py-[30px]'>
                <h1>iOS 18.</h1>
            </div>
            <div className=' flex justify-center  text-taupe-950 text-4xl'>
                <h2>Customize. Stylize.
                    Mesmerize.</h2>
            </div>
            <div className='bg-blue-100 '>
                
                <div className='py-[50px] flex justify-center'>
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MesmerizeB