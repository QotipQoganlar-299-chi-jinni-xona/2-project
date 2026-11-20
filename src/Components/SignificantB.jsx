import React from 'react'
import img3 from '../assets/1a7f5bb7cc1d8ff327c34f4255a4665f848ab80c.jpg'
const SignificantB = () => {
    return (
        <div className='max-[100%] w-[85%] mx-auto'>
            <div>
                <div className='w-[85%] mx-auto py-12'>
                    <section className="bg-white px-6 py-12">
                        <div className="mx-auto max-w-5xl">
                            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-10">
                                Significant others.
                            </h2>

                            <div className="bg-[#f5f5f7] rounded-3xl p-8 md:p-12 grid gap-8 md:grid-cols-2 items-center">

                                <div>
                                    <div className="pb-6 border-b border-gray-300">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-xl font-bold text-[#1d1d1f]">
                                                iPhone and Mac
                                            </h3>
                                            <span>⌃</span>
                                        </div>
                                        <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                                            With iPhone Mirroring, you can view your iPhone screen on your Mac and control it without picking up your phone. Continuity features also let you answer calls or messages right from your Mac. You can even copy images, video, or text from your iPhone and paste it all into a different app on your Mac. And with iCloud, you can access your files from either device.
                                        </p>
                                    </div>

                                    <div className="py-6 border-b border-gray-300 flex justify-between items-center">
                                        <h3 className="text-xl font-bold text-[#1d1d1f]">
                                            iPhone and Apple Watch
                                        </h3>
                                        <span>⌄</span>
                                    </div>

                                    <div className="pt-6 flex justify-between items-center">
                                        <h3 className="text-xl font-bold text-[#1d1d1f]">
                                            iPhone and AirPods
                                        </h3>
                                        <span>⌄</span>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <img
                                        src={img3}
                                        alt="iPhone and Mac"
                                        className="w-full max-w-md object-contain"
                                    />
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default SignificantB
