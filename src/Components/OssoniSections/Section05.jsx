import React from 'react'

import duosiphone from '../../assets/duosiphone.jpg';
import duosiphone2 from '../../assets/duosiphone2.jpg';

const OssoniSection05 = () => {
    return (
        <section  >
                                <div className=' max-w-[100%] w-[90%]    flex justify-center items-center' >
                                    <div className='w-[520px] h-[622px] flex flex-col gap-7 mx-[150px] ' >
                                        <img className='' src={duosiphone} alt="" />
                                        <p className='w-[329px] h-[29px] mx-[75px] text-[#DAB8A4] ' >iPhone 16 Pro Max has our largest iPhone
                                            display ever</p>
                                    </div>
        
        
        
        
                                    <div  >
                                        <img className='w-[520px] h-[520px]' src={duosiphone2} alt="" />
                                        <p className='mx-[px] text-[#DAB8A4]' >The thinnest borders on any Apple product</p>
                                    </div>
                                </div>
        
                            </section>
    )
}

export default OssoniSection05
