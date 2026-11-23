import React from 'react'

import kameraiphone from '../../assets/kameraiphone.jpg';

const OssoniSection20 = () => {
    return (
        <section>
                                <div className='max-w-[100%] w-[85%] mx-auto' >
                                    <div className='flex justify-between items-center' >
                                        <div className='w-[394px] h-[54px] ' >
                                            <p className='text-gray-500' >More zoom? Boom. Now you can shoot in
                                                120 mm with the 5x Telephoto camera on
                                                both Pro models and get <span className='text-white' >sharper close-ups
                                                    from farther away</span>.. With multiple framing
                                                options, it’s like having seven pro lenses in
                                                your pocket, everywhere you go.</p>
                                        </div>
                                        <div>
                                            <img src={kameraiphone} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </section>
    )
}

export default OssoniSection20
