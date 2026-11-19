import React from 'react'
import { AiFillApple } from "react-icons/ai";

const SectionMusicX = () => {
    return (
        <div>
            <section className="w-full min-h-[540px] md:min-h-[620px] flex items-center justify-center text-white py-16 md:py-24  bg-linear-65 from-purple-300 to-pink-500">
                <div className="container mx-auto w-[95%] md:max-w-3xl text-center flex flex-col items-center">

                    <div className="flex items-center gap-1 text-2xl sm:text-3xl font-semibold mb-4">
                        <AiFillApple className="text-3xl sm:text-4xl -mt-1" />
                        <span>Music</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
                        For the love
                        <br />
                        of music.
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/95 max-w-2xl mb-8">
                        Play over 100 million songs, always ad-free. Hear next-level sound
                        quality with Spatial Audio<sup>1</sup> and lossless audio.
                        <sup>2</sup> Take center stage with Apple Music Sing. Access
                        exclusive interviews and live concerts. And listen across all your
                        devices, online or off. The music app for music lovers is here.
                    </p>
                    <button className="btn bg-white hover:bg-gray-100 text-[#1d1d1f] border-none rounded-full px-7 text-base font-medium">
                        Try it free*
                    </button>
                </div>
            </section>
        </div>
    )
}

export default SectionMusicX