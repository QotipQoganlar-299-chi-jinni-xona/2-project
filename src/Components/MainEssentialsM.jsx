import React from 'react'
import img from "../assets/fac69da861e00b09612928f59a4d9e32d1701e91.jpg"
import img2 from "../assets/a0b51802b4350394e2a4f2ed3d0124f4fd65c8d9.jpg"
const MainEssentialsM = () => {
    return (
        <div className='pt-[200px]'>
            <div className='max-wfull w-[85%] mx-auto'>
                <div>
                    <p className='text-[50px] font-bold'>iPhone essentials.</p>
                </div>

                <div className='pt-[70px] flex gap-[50px] justify-center'>
                    <div className='bg-[#F5F5F7] w-[45%] rounded-xl p-[100px]'>
                        <div className='flex flex-col items-center'>
                            <p className='text-[30px] font-bold'>MagSafe</p>
                            <p>Snap on a magnetic case, wallet, or both.</p>
                            <p>And get faster, efficient wireless charging.</p>

                            <p className='text-blue-600 pt-[20px]'>Shop MagSafe accessories</p>

                            <div className='pt-[70px]'>
                                <img src={img} alt="" />

                            </div>
                        </div>
                    </div>

                    <div className='bg-[#F5F5F7] w-[45%] rounded-xl p-[100px]'>
                        <div className='flex flex-col items-center'>
                            <p className='text-[30px] font-bold'>AirTag</p>
                            <p>Attach one to your keys.</p>
                            <p>Put another in your backpack.</p>
                            <p>If they’re misplaced, just use the Find My app.</p>

                            <div className='w-[500px] '>
                                <img  className='h-full' src={img2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default MainEssentialsM