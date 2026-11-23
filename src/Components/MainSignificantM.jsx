import React from 'react'
import img from "../assets/81e8c7b365b9e9f3e33579c26fc0173607bb2aa9.jpg"
const MainSignificantM = () => {
    return (
        <div className=' pt-[150px]'>

            <div className='max-w-full  w-[85%] mx-auto'>
                <div className=''>
                    <p className='text-[40px]  font-bold'>Significant others.</p>
                </div>
               <div className='pt-[60px]'>
                 <div className=' flex  bg-[#F5F5F7] p-[40px] rounded-xl ' >

                    <div className='pt-[50px]'>
                        <p className='text-[25px] font-bold'>iPhone and Mac</p>
                        <p className='w-[400px]'>With iPhone Mirroring, you can view your
                            iPhone screen on your Mac and control it
                            without picking up your phone. Continuity
                            features also let you answer calls or
                            messages right from your Mac. You can
                            even copy images, video, or text from
                            your iPhone and paste it all into a different
                            app on your Mac. And with iCloud, you
                            can access your files from either device.</p>


                        <p className='text-[25px] font-bold pt-[30px] w-[200px]'>iPhone and
                            Apple Watch</p>


                        <p className='text-[25px] font-bold pt-[30px] '>iPhone and AirPods</p>
                    </div>

                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>
               </div>
            </div>
        </div>
    )
}

export default MainSignificantM