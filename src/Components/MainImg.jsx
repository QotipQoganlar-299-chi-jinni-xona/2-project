import React from 'react'
import img1 from "../assets/a28e19699b557ed0979ee5b9f0fb86ae3a2f2f5c.png"
import img2 from "../assets/36881c515d0b78f51dcf756007d4338aebf7361a.png"
import img3 from "../assets/ca0a353a10fb1b14318e2b2d640e88ac99451fa3.png"
import img4 from "../assets/b9365a78280aa407fe40b02b91d49759cd8acfe5.png"
const MainImg = () => {
    return (
        <div className='pt-[100px]'>
            <div className='max-w-full w-[85%] mx-auto'>
                <div className=''>
                    <div className='flex flex-col w-[100px] '>
                        <img src={img1} alt="" />
                        <p>Apple Intelligence</p>
                    </div>
                    <div className='flex flex-col pt-[50px] w-[100px] '>
                        <img src={img2} alt="" />
                        <p>A18 chip with 5-core GPU</p>
                    </div>
                    <div className='flex flex-col pt-[50px] w-[100px] '>
                        <img src={img3} alt="" />
                        <p>Camera Control</p>
                    </div>
                    <div className='flex flex-col pt-[50px] w-[100px] '>
                        <img src={img4} alt="" />
                        <div className='w-[400px] flex flex-col '>
                            <p>Advanced dual-camera system</p>
                            <p>48MP Fusion camera</p>
                            <p>2x Telephoto</p>
                            <p>12MP Ultra Wide camera</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainImg