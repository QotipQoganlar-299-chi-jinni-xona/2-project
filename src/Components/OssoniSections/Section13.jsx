import React from 'react'

import otlar from '../../assets/otlar.jpg';
import ramka from '../../assets/ramka.png';

const OssoniSection13 = () => {
    return (
        <section>
        
                                <div className='relative mx-auto w-full max-w-[1010px] h-[492px]'>
                                    <img className='w-full h-full object-cover rounded-[125px] ' src={otlar} alt="" />
                                    <img className='absolute inset-0 w-full h-full object-contain' src={ramka} alt="" />
                                </div>
        
                            </section>
    )
}

export default OssoniSection13
