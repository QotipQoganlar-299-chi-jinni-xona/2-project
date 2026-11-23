import React from 'react'

import iphonechik from '../../assets/iphonechik.jpg';
import iphoneshizik from '../../assets/iphoneshizik.jpg';

const OssoniSection11 = () => {
    return (
        <section>
                                <div className=' max-w-[100%] w-[90%]    flex justify-center items-center' >
                                    <div className='w-[520px] h-[622px] flex flex-col gap-7 mx-[150px] ' >
                                        <img className='w-[520px] h-[520px]' src={iphonechik} alt="" />
                                        <p className='w-[329px] h-[29px] mx-[75px] opacity-35  ' >Click to launch the Camera app. Click again to
                                            <span className='text-white' >instantly take a photo</span></p>
                                    </div>
        
        
        
        
                                    <div>
                                        <img className='w-[520px] h-[520px]' src={iphoneshizik} alt="" />
                                        <p className='mx-[75px] opacity-35' >in video mode, <span className='text-white' >click to start recording</span></p>
                                    </div>
                                </div>
                            </section>
    )
}

export default OssoniSection11
