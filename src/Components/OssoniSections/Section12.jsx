import React from 'react'

import otlar from '../../assets/otlar.jpg';

const OssoniSection12 = () => {
    return (
        <section>
                                <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
                                    style={{ backgroundImage: `url(${otlar})` }} >
                                    <div className='flex justify-center items-center h-[179px] w-[826px] '   >
                                        <h1 className='relative h-[179px] w-[826px] text-center text-white text-[77px]'>
                                            4K 120 fps Dolby Vision.
                                            <span className='absolute bottom-[0px] left-[0px] w-[826px]'>Cinemasterful.</span>
                                        </h1>
                                    </div>
                                </div>
        
                            </section>
    )
}

export default OssoniSection12
