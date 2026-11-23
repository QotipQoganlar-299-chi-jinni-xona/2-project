import React from 'react'

import Screen1 from '../../assets/Screen1.jpg';
import Screen2 from '../../assets/Screen2.jpg';

const OssoniSection30 = () => {
    return (
        <section>
        
                                <div className='flex justify-between' >
                                    <div className='flex flex-col gap-5 ' >
                                        <div>
                                            <img src={Screen1} alt="" />
                                        </div>
                                        <div className='w-[410px] h-[95px]' >
                                            <p className='text-gray-500' ><span className='text-white' >Personalize your Home Screen</span> Tint your icons with
                                                any color. Rearrange and resize apps and widgets.
                                                You can even lock or hide apps to protect sensitive
                                                information — it’s your call</p>
                                        </div>
                                    </div>
        
                                    <div className='flex flex-col gap-5 ' >
                                        <div>
                                            <img src={Screen2} alt="" />
                                        </div>
                                        <div className='w-[412px] h-[70px]' >
                                            <p className='text-gray-500' ><span className='text-white' >Choose your controls</span> Swap out your Lock Screen
                                                controls for ones you love to use more often. Or you
                                                can assign a control to the Action button.</p>
                                        </div>
                                    </div>
                                </div>
        
        
                            </section>
    )
}

export default OssoniSection30
