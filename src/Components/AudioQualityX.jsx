import React from "react";
import { AiOutlinePlus,AiFillApple } from "react-icons/ai";
import { FaHeadphones, FaHeart, FaCompactDisc, FaFire,FaMicrophoneAlt } from "react-icons/fa";
import { IoMusicalNotes,IoRadio  } from "react-icons/io5";

const AudioQuality = () => {
    return (
        <section className="w-full py-[32px]">
            <div className="container mx-auto w-[95%] max-w-[100%] flex flex-col gap-[24px]">
                <div className="relative w-full min-h-[420px] md:min-h-[520px] rounded-[24px] bg-linear-65 from-purple-300 to-pink-500 flex flex-col items-center justify-center text-center text-white p-[24px] overflow-hidden">
                    <p className="text-[14px] md:text-[16px] font-semibold mb-[8px] text-white/90">
                        Audio Quality
                    </p>

                    <h2 className="text-[32px] sm:text-[44px] md:text-[56px] font-bold leading-[1.1] max-w-[600px]">
                        Enter a new
                        <br />
                        dimension of sound.
                    </h2>

                    <button className="btn btn-circle btn-sm md:btn-md bg-white/80 hover:bg-white text-black border-none absolute bottom-[20px] right-[20px]">
                        <AiOutlinePlus className="text-[18px]" />
                    </button>
                </div>

                <div className="relative w-full h-[450px] md:h-[520px] rounded-[24px] bg-gray-100 flex flex-col items-center justify-center text-center p-[20px]">
                    <div className="absolute top-[25px] left-[25px] md:left-[80px] p-[16px] rounded-[16px] bg-orange-500 text-white">
                        <FaFire className="text-[28px] md:text-[36px]" />
                    </div>

                    <div className="absolute top-[25px] right-[25px] md:right-[80px] p-[16px] rounded-[16px] bg-pink-600 text-white">
                        <FaHeadphones className="text-[28px] md:text-[36px]" />
                    </div>

                    <div className="hidden sm:block absolute top-[25px] p-[16px] rounded-[16px] bg-blue-500 text-white">
                        <IoMusicalNotes className="text-[30px]" />
                    </div>

                    <div className="absolute bottom-[25px] left-[25px] md:left-[100px] p-[16px] rounded-[16px] bg-purple-600 text-white">
                        <FaCompactDisc className="text-[28px] md:text-[36px]" />
                    </div>

                    <div className="absolute bottom-[25px] right-[70px] md:right-[120px] p-[16px] rounded-[16px] bg-rose-500 text-white">
                        <FaHeart className="text-[28px] md:text-[36px]" />
                    </div>

                    <p className="text-[15px] font-semibold text-gray-500 mb-[8px]">
                        Music Discovery
                    </p>

                    <h2 className="text-[32px] sm:text-[44px] md:text-[56px] font-bold leading-tight text-rose-600">
                        Where your new
                        <br />
                        favorites find you.
                    </h2>

                    <button className="btn btn-circle btn-sm bg-gray-300 text-black border-none absolute bottom-[20px] right-[20px]">
                        <AiOutlinePlus className="text-[18px]" />
                    </button>
                </div>
                <div className="relative w-full min-h-[420px] md:min-h-[520px] rounded-[24px] bg-gradient-to-r from-purple-300 to-pink-500 flex flex-col items-center justify-end text-center text-white pb-[48px] md:pb-[64px] px-[24px] overflow-hidden">
                   
                    <FaHeadphones className="absolute top-[40px] left-[30px] md:left-[80px] text-[80px] md:text-[120px] text-white/10 -rotate-12" />
                    <IoMusicalNotes className="absolute top-[70px] right-[40px] md:right-[120px] text-[70px] md:text-[110px] text-white/10 rotate-12 " />
                    <FaMicrophoneAlt className="hidden sm:block absolute bottom-[120px] left-[60px] md:left-[140px] text-[75px] md:text-[100px] text-white/10 rotate-6 " />
                    <FaCompactDisc className="hidden sm:block absolute bottom-[110px] right-[60px] md:right-[140px] text-[85px] md:text-[115px] text-white/10 " />
                    <IoRadio className="absolute top-[140px] left-1/2 -translate-x-1/2 text-[110px] md:text-[160px] text-white/5 " />

                

                    <p className="relative z-10 text-[14px] md:text-[16px] font-semibold mb-[8px] text-white/90">
                        Exclusive Content
                    </p>

                    <h2 className="relative z-10 text-[32px] sm:text-[44px] md:text-[56px] font-bold leading-[1.1] max-w-[600px]">
                        Unreal access.
                        <br />
                        Really only here.
                    </h2>

                    <button className="btn btn-circle btn-sm md:btn-md bg-white/80 hover:bg-white text-black border-none absolute bottom-[20px] right-[20px] z-10">
                        <AiOutlinePlus className="text-[18px]" />
                    </button>
                </div>
            </div>

        </section >
    );
};

export default AudioQuality;
