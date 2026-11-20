import React from 'react'
import img from '../assets/620fd531627b6f3b800be83544b6c24e138734ab.jpg'
const Even = () => {
    return (
        <>
            <div className='max-[100%] w-[85%] mx-auto'>
                <div className='py-[10px] flex justify-center text-4xl'>
                    <h1 className=' text-teal-800'>Even longer battery life.</h1>
                </div>
                <div className=' flex justify-center text-4xl'>
                    <h2>You’ll need to recharge before
                        it will.</h2>
                </div>

                <div className=" ml-[22%] text-left text-black flex  gap-[150px]">
                    <p className='text-xs w-[300px] py-[20px]'>iPhone 16 has been designed to make room for a larger battery, which works together with A18 to deliver a big boost in battery life, even with so many new features. So you can game, binge, and rock on — and on.

                        Snap on a new MagSafe charger for even faster wireless charging⁴ — up to 25W with a 30W power adapter or higher, enabling up to 50% charge in around 30 minutes.⁵ </p>


                    <div className='flex flex-col'>
                        <div className="mb-5">
                            <p className="text-sm">Up to</p>

                            <h1 className="text-[27px] font-bold text-[#5599a5]">
                                27 hours
                            </h1>

                            <p className="text-[13px] leading-4">
                                video playback <br />
                                on iPhone 16 Plus⁶
                            </p>
                        </div>

                        <div>
                            <p className="text-sm">Up to</p>

                            <h1 className="text-[27px] font-bold text-[#5599a5]">
                                22 hours
                            </h1>

                            <p className="text-[13px] leading-4">
                                video playback <br />
                                on iPhone 16⁶
                            </p>
                        </div>
                    </div>


                </div>
                <div className='flex justify-center py-[10px] rounded-full px-[40px]'>
                    <img src={img} alt="" />
                </div>
                <div className="w-[90%] mx-auto py-10">

                    <div className="flex items-center gap-4 mb-10">
                        <p className="font-bold">Compare with</p>

                        <select className="border rounded-full px-5 py-2 w-[180px]">
                            <option>iPhone 12</option>
                        </select>
                    </div>

                    <div className="flex justify-between">

                        <div>
                            <p className="text-sm">Up to</p>
                            <h1 className="text-2xl font-bold">5 more hours</h1>
                            <p className="text-sm">
                                video playback on <br />
                                iPhone 16
                            </p>
                        </div>

                        <div>
                            <p className="text-sm">Up to</p>
                            <h1 className="text-2xl font-bold">10 more hours</h1>
                            <p className="text-sm">
                                video playback on <br />
                                iPhone 16 Plus
                            </p>
                        </div>
                    </div>
                </div>





            </div>






        </>
    )
}

export default Even