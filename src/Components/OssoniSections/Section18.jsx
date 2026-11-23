import React from 'react'

import ramka from '../../assets/ramka.png';
import krutoymiguel from '../../assets/krutoymiguel.jpg';

const OssoniSection18 = () => {
    return (
        <section>
                                <div className='max-w-[100%] w-[85%] mx-auto flex flex-col gap-20 ' >
                                    <div className="relative">
                                        <img src={ramka} alt="" className="relative z-10 w-full" />
                                        <img
                                            src={krutoymiguel}
                                            alt=""
                                            className="absolute inset-0 w-full h-full object-cover rounded-[130px]"
                                        />
                                    </div>
        
                                    <div className='flex justify-between' >
                                        <div className='w-[414px] h-[170px]'>
                                            <p className='opacity-50' >iPhone 16 Pro adds a second 48MP camera
                                                to the Pro camera system. The new 48MP
                                                Ultra Wide camera has a more advanced
                                                quad-pixel sensor for super-high-resolution
                                                48MP ProRAW and HEIF photos with
                                                autofocus.</p>
                                        </div>
        
                                        <div className='w-[414px] h-[54px]' >
                                            <p className='text-gray-500' >So you can <span className='text-white' >capture a mesmerizing new
                                                level of detail</span> in macro photos and sweeping,
                                                wide-angle shots.</p>
                                        </div>
                                    </div>
        
                                </div>
        
                            </section>
    )
}

export default OssoniSection18
