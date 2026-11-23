import React from 'react'
import img1 from "../assets/a28e19699b557ed0979ee5b9f0fb86ae3a2f2f5c.png"
import img2 from "../assets/36881c515d0b78f51dcf756007d4338aebf7361a.png"
import img3 from "../assets/ca0a353a10fb1b14318e2b2d640e88ac99451fa3.png"
import img4 from "../assets/b9365a78280aa407fe40b02b91d49759cd8acfe5.png"
import img5 from "../assets/23df4f9e7047ce3e16fc57a63f470770ccba9016 (1).png"
import img6 from "../assets/ac4f5e30eea302aeeff74c3d40d545c347881478.png"
import img7 from "../assets/d3c966470018efb60c74b26c899ded027c097e2b.png"
import img8 from "../assets/4e3f66c0ca3af20ae0582dce89345562bc3bb534.png"
const MainImg = () => {
    return (
        <div className='pt-[100px]'>
            <div className='max-w-full w-[85%] mx-auto flex gap-[400px]'>
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
                        <div className='flex flex-col pt-[50px] w-[100px] '>
                            <img src={img5} alt="" />
                            <p className='w-[200px]'>Up to 27 hours video playback</p>
                        </div>
                    </div>
                </div>




                <div className=''>
                    <div>
                        <p className='text-[100px]'>-</p>
                    </div>
                    <div className='flex flex-col pt-[50px] w-[100px] '>
                        <img src={img6} alt="" />
                        <p>A16 Bionic chip with 5-core GPU</p>
                    </div>
                    <div>
                        <p className='text-[100px]'>-</p>
                    </div>
                    <div className='flex flex-col pt-[50px] w-[100px] '>
                        <img src={img7} alt="" />
                        <p>Dual-camera system</p>
                        <p>48MP Main camera</p>
                        <p>2x Telephoto</p>
                        <p>12MP Ultra Wide camera</p>
                    </div>
                    <div className='flex flex-col pt-[50px] w-[100px] '>
                        <img src={img5} alt="" />
                        <p>Up to 26 hours video playback</p>
                    </div>
                </div>

                <div>
                    <div className='text-[100px]'>
                        <p>-</p>
                    </div>
                    <div className='flex flex-col pt-[50px] w-[100px] '>
                        <img src={img8} alt="" />
                        <p>A15 Bionic chip with 5-core GPU</p>
                    </div>
                    <div className='text-[100px]'>
                        <p>-</p>
                    </div>
                    <div className='flex flex-col pt-[50px] w-[100px] '>
                        <img src={img7} alt="" />
                        <p>Dual-camera system</p>
                        <p>12MP Main camera</p>
                        <p>12MP Ultra Wide camera</p>
                    </div>
                    <div className='flex flex-col pt-[50px] w-[100px] '>
                        <img src={img5} alt="" />
                        <p>Up to 26 hours video playback</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainImg