import React from 'react'

import iphones from '../../assets/iphones.jpg';

const OssoniSection02 = () => {
    return (
        <section className="min-h-screen bg-black text-white px-[30px] py-[25px]">
        
                                <div className="max-w-[100%] w-[85%] mx-auto">
        
        
                                    <h1 className="text-[45px] ">
                                        Take a closer look.
                                    </h1>
        
        
                                    <div className="flex justify-center items-center mt-[50px]">
                                        <img
                                            src={iphones}
                                            alt="iPhone collection"
                                            className=""
                                        />
                                    </div>
        
                                </div>
        
                            </section>
    )
}

export default OssoniSection02
