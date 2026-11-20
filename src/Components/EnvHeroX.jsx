import React from "react";
import { IoChevronDown } from "react-icons/io5";

const EnvHero = () => {
  return (
    <section className="w-full bg-white text-black">
      <div className="border-b border-gray-200 bg-white/80 sticky top-0 z-20">
        <div className="container mx-auto w-[95%] max-w-[980px] flex items-center justify-between h-[52px]">
          <span className="text-[18px] sm:text-[20px] font-semibold">
            Environment
          </span>

          <div className="flex items-center gap-[16px]">
            <a
              href="#"
              className="hidden sm:inline-flex items-center gap-[4px] text-[12px] text-gray-600 hover:text-black"
            >
              Product Reports
              <IoChevronDown className="text-[12px]" />
            </a>

            <button className="btn btn-xs bg-emerald-500 hover:bg-emerald-600 text-black border-none rounded-full px-[12px] text-[11px] font-medium">
              2024 Report (PDF)
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 min-h-[420px] md:min-h-[520px] flex items-center justify-center text-center py-[64px]">
        <div className="container mx-auto w-[95%] max-w-[780px] flex flex-col items-center">
          <p className="text-[18px] sm:text-[22px] font-semibold mb-[12px]">
            Apple 2030
          </p>

          <h1 className="text-[36px] sm:text-[52px] md:text-[64px] font-bold leading-[1.1] text-gray-900">
            A plan as innovative
            <br />
            as our products.
          </h1>
        </div>
      </div>

      <div className="py-[64px] md:py-[96px]">
        <div className="container mx-auto w-[95%] max-w-[680px] flex flex-col gap-[28px] text-center text-[18px] sm:text-[22px] font-semibold leading-relaxed text-gray-800">
          <p>
            We are committed to protecting the planet. And designing products
            you love.
            <span className="underline decoration-emerald-500 decoration-[3px] underline-offset-[4px]">
              Apple 2030
            </span>
            is our plan to do both.
          </p>

          <p>
            By focusing on recycled and renewable materials, clean electricity,
            and low-carbon shipping, we’re working to bring our
            <span className="underline decoration-emerald-500 decoration-[3px] underline-offset-[4px]">
              net emissions to zero
            </span>
            across our entire carbon footprint.
          </p>

          <p>
            We’re sharing our progress — and the work that remains — so you can
            <span className="underline decoration-emerald-500 decoration-[3px] underline-offset-[4px]">
              join us
            </span>
            on this journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnvHero;
