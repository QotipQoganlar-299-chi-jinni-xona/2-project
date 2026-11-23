import React from 'react'

import ayfon from '../../assets/aypon.jpg';

const OssoniSection01 = () => {
    return (
        <section className='bg-black' >
                                <div
                                    className="relative min-h-screen bg-cover bg-center bg-no-repeat"
                                    style={{ backgroundImage: `url(${ayfon})` }}
                                >
        
                                    <div className='flex py-[70px] justify-center items-center'>
                                        <h1 className='text-[25px]  ' >IPhone 16 Pro</h1>
                                    </div>
                                    <div className='flex my-[-75px] justify-center' >
                                        <h1 className='text-[50px] bg-gradient-to-t from-cyan-400 to-white bg-clip-text text-transparent' >Hello , Apple , Intelligence</h1>
                                    </div>
        
                                    <div className='absolute bottom-8 left-0 right-0 flex flex-col justify-center items-center gap-[20px]' >
                                        <button className='btn btn-primary rounded-[20px] ' >
                                            View Pricing
                                        </button>
                                        <div className='flex justify-center flex-col items-center opacity-35' >
                                            <p>
                                                From $999 or $41.62/mo for 24 mo.1
                                            </p>
                                            <p>
                                                Pre-order starting at 5:00 a.m. PDT on 9.13 Available starting 9.20
                                            </p>
                                            <p>
                                                Apple Intelligence coming this fall 2
                                            </p>
                                        </div>
                                    </div>
        
        
        
        
        
                                </div>
                            </section>
    )
}

export default OssoniSection01
