import React from 'react'

import miguelrasmlar from '../../assets/miguelrasmlar.jpg';
import miguelshy from '../../assets/miguelshy.jpg';
import miguelnotshy from '../../assets/miguelnotshy.jpg';

const OssoniSection23 = () => {
    return (
        <section>
                                <div className='max-w-[100%] w-[85%] mx-auto' >
                                    <div className='w-[630px] h-[116px]f] flex justify-center mx-auto text-center text-gray-500 ' >
                                        <p>  Our latest generation of Photographic Styles gives you greater
                                            creative flexibility than even before, so you can <span className='text-white' >make every photo even more you</span>
                                            . And thanks to advances in our image pipeline, you can now reverse any style, anytime.
                                        </p>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <div>
                                        <div className='flex justify-between items-center' >
        
                                            <div className='flex flex-col gap-5' >
                                                <div>
                                                    <h1 className='text-[39px]' >Lock in your look.</h1>
                                                </div>
                                                <div className='w-[413px] h-[83px] text-gray-500' >
                                                    <p>We've created new styles that let you <span className='text-white' >dial in your exact desired look with more advanced skin-tone rendering</span>
                                                        and set it across your photos.</p>
                                                </div>
                                                <div className='w-[400px] h-[83px] text-gray-500' >
                                                    <p>With the power of A18 Pro, you can see the
                                                        style applied in a live preview — like
                                                        professional color grading in real time.</p>
                                                </div>
                                            </div>
        
                                            <div>
                                                <img className='w-[416px] h-[860px]' src={miguelrasmlar} alt="" />
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
        
                                        <div className='flex justify-between items-center' >
                                            <div className='flex flex-col gap-10' >
                                                <div className='w-[261px] h-[92px]' >
                                                    <h1 className='text-[38px]'  >Align with your
                                                        aesthetic.</h1>
                                                </div>
        
                                                <div className='w-[392px] h-[112px]' >
                                                    <p className='text-gray-500'>Our improved image pipeline also enables
                                                        more creative styles, which allow you to
                                                        <span className='text-white' >customize the different moods of a photo</span>
                                                        through color.</p>
                                                </div>
                                            </div>
                                            <div>
                                                <img src={miguelshy} alt="" />
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
        
                                        <div className='flex justify-between items-center' >
                                            <div className='flex flex-col gap-30' >
                                                <div className='w-[261px] h-[92px]' >
                                                    <h1 className='text-[38px]'  >Make the most of your
                                                        megapixels.</h1>
                                                </div>
        
                                                <div className='w-[372px] h-[113px]' >
                                                    <p className='text-gray-500'>Personalize every style even more with the
                                                        new control pad, which makes it
                                                        <span className='text-white' >easy to adjust tone and color simultaneously</span>
                                                        . You can also use the slider to adjust the intensity
                                                        of the specific colors, instead of applying a
                                                        one-size-fits-all approach.</p>
                                                </div>
                                            </div>
                                            <div>
                                                <img src={miguelnotshy} alt="" />
                                            </div>
                                        </div>
        
        
        
        
        
                                    </div>
        
        
        
                                </div>
        
                            </section>
    )
}

export default OssoniSection23
