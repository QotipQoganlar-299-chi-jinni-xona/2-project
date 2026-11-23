import React from 'react'

import yablonya from '../../assets/yablonya.mp4';

const OssoniSection16 = () => {
    return (
        <section>
                                <div className='max-w-[100%] w-[85%] mx-auto  ' >
                                    <h1 className='text-[62px] flex justify-center ' >Shot on iPhone 16 Pro.</h1>
                                </div>
                                <div className='w-[838px] h-[170px] flex justify-center items-center mx-auto ' >
                                    <p className='opacity-50' >Go behind the scenes of The Weeknd’s groundbreaking music video to learn how the
                                        powerful camera features on iPhone 16 Pro deliver more creative freedom and flexibility
                                        than ever before. The “Dancing in the Flames” cinematographer Erik Henriksson films the
                                        video in dreamlike slow motion using 4K 120 fps Dolby Vision on iPhone 16 Pro. Thanks to
                                        Camera Control, he could make technical decisions by simply sliding a finger to adjust
                                        camera functions like exposure or focal length — all without missing a beat.</p>
                                </div>
        
                                <div className='flex justify-center items-center' >
                                    <video className='w-[1050px] h-[525px] ' autoPlay muted src={yablonya}></video>
                                </div>
        
                            </section>
    )
}

export default OssoniSection16
