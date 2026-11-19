import React from "react";
import { IoChevronForward } from "react-icons/io5";

const MusicOffers = () => {
  return (
    <section className="w-full">
      <div className="text-gray-300 py-[64px] md:py-[96px]">
        <div className="container mx-auto w-[95%] max-w-[1024px] flex flex-col md:flex-row justify-between items-center md:items-stretch gap-[40px] text-center">
          <div className="flex-1 flex flex-col items-center justify-between gap-[24px]">
            <p className="text-[14px] sm:text-[20px] font-semibold max-w-[320px]">
              New subscribers get 3 months of Apple Music free, then pay $10.99 per month.
            </p>
            <button className="btn bg-white text-black border-none rounded-full px-[24px] text-[14px]">
              Try it free*
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-between gap-[24px]">
            <p className="text-[14px] sm:text-[20px] font-semibold max-w-[320px]">
              Bundle Apple Music with up to 5 other great services for 1 low monthly price.
            </p>
            <button className="btn bg-white text-black border-none rounded-full px-[24px] text-[14px]">
              Try Apple One free*
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-between gap-[24px]">
            <p className="text-[14px] sm:text-[20px] font-semibold max-w-[320px]">
              Students get 1 month of Apple Music free, plus access to Apple TV+.
            </p>
            <button className="btn bg-white text-black border-none rounded-full px-[24px] text-[14px]">
              Try it free*
            </button>
          </div>
        </div>
      </div>

      <div className="bg-zinc-500 text-white p-8 text-center text-[14px] font-bold sm:text-[14px]">
        <div className="container mx-auto w-[95%] flex flex-wrap items-center justify-center gap-[4px]">
          <span>
            Get 3 months of Apple Music free with purchase of eligible devices.*
          </span>
          <a href="#" className="font-medium hover:underline inline-flex items-center ml-[4px]">
            Check eligibility
            <IoChevronForward className="text-[12px] ml-[2px]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MusicOffers;
