import React from 'react'

import miguel from '../../assets/miguel.jpg';

const OssoniSection15 = () => {
    return (
        <section  >
                                <div className='max-w-[100%] w-[85%] mx-auto flex flex-col gap-[80px] ' >
                                    <div className='w-[632px] h-[144px] flex justify-center items-center mx-auto' >
                                        <h1 className='text-[62px]' >Audio Mix.
                                            Make your ㅤㅤvoice heard.</h1>
                                    </div>
                                    <div className='w-[815px] h-[54px] flex justify-center items-center mx-auto ' >
                                        <p className='text-gray-500' >Powered by advanced intelligence and Spatial Audio capture, Audio Mix lets you <span className='text-white' >adjust
                                            the way voices sound in your videos </span> using three different voice options.Want to decrease
                                            background sound? Or just focus on the voices that are in frame? Simply select the mix
                                            and adjust intensity to get the sound you want after video capture</p>
                                    </div>
        
                                    <div className='flex justify-center items-center mx-auto' >
                                        <img src={miguel} alt="" />
                                    </div>
        
                                    <div className='flex justify-between' >
                                        <div className='w-[307px] h-70px flex flex-col gap-2 ' >
                                            <p>In-frame</p>
                                            <hr />
                                            <p className='opacity-50' > Only captures the voices of the people on camera, even if people off-camera are talking during the recording </p>
                                        </div>
                                        <div className='w-[315px] h-[170px] flex flex-col gap-2  ' >
                                            <p>Studio</p>
                                            <hr />
                                            <p className='opacity-50' >Makes voices sound like you're
                                                recording in a professional studio
                                                equipped with sound-dampening walls.
                                                Great for vloggers or podcasters
                                                because the recording will sound like
                                                the mic is close to the subject's mouth,
                                                even if it's a few feet away
                                            </p>
                                        </div>
                                        <div className='w-[315px] h-[95px] flex flex-col gap-2' >
                                            <p>Cinematic</p>
                                            <hr />
                                            <p className='opacity-50' >Captures all of the voices around you
                                                and consolidates them toward the front
                                                of the screen - just like sound is
                                                formatted for the movies
                                            </p>
                                        </div>
                                    </div>
        
                                </div>
        
        
        
                            </section>
    )
}

export default OssoniSection15
