import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const AudioQuality = () => {
  return (
    <section className="w-full py-[32px]">
      <div className="container mx-auto w-[95%] max-w-[100%]">
        <div className="relative w-full min-h-[420px] md:min-h-[520px] rounded-[24px]  bg-linear-65 from-purple-300 to-pink-500 flex flex-col items-center justify-center text-center text-white p-[24px] overflow-hidden">
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
      </div>
    </section>
  );
};

export default AudioQuality;
