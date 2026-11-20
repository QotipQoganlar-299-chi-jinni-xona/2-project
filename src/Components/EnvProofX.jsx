import React from "react";
import { IoChevronBack, IoChevronForward, IoPlayOutline } from "react-icons/io5";
import card1 from "../assets/Container.png";
import partnerImg from "../assets/Partners.png";

const EnvProofX = () => {
  return (
    <section className="w-full py-[64px] md:py-[96px] bg-white text-black">
      <div className="container mx-auto w-[95%] max-w-[1140px]">
        <div className="max-w-[580px] mb-[40px]">
          <h2 className="text-[32px] sm:text-[44px] md:text-[52px] font-bold leading-[1.1] mb-[16px]">
            The
            <span className="underline decoration-emerald-500 decoration-[3px] underline-offset-[6px] ml-3">
              proof
            </span>
            is in our products.
          </h2>

          <p className="text-[15px] sm:text-[17px] text-gray-600 leading-relaxed">
            The same innovative thinking that goes into creating the products
            you love goes into our environmental initiatives. And as we design
            our products, we’re also using smarter chemistry to make sure
            they’re safer for everyone who assembles, uses, and recycles them.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-[16px] mb-[32px]">
          <div className="flex items-center gap-[8px]">
            <button className="btn btn-sm bg-black text-white hover:bg-black border-none rounded-full px-[18px]">
              Mac
            </button>
            <button className="btn btn-sm bg-gray-100 text-black hover:bg-gray-200 border-none rounded-full px-[18px]">
              Watch
            </button>
            <button className="btn btn-sm bg-gray-100 text-black hover:bg-gray-200 border-none rounded-full px-[18px]">
              iPhone
            </button>
          </div>

          <a href="#" className="text-[13px] text-blue-600 hover:underline">
            View all product innovations
          </a>
        </div>

        <div className="flex gap-[20px] overflow-x-auto pb-[16px]">
          <img src={card1} alt="MacBook Air" className="" />
        </div>

        <div className="flex justify-end gap-[10px] mt-[24px] mb-[96px]">
          <button className="btn btn-circle btn-sm bg-gray-200 hover:bg-gray-300 text-gray-700 border-none">
            <IoChevronBack className="text-[16px]" />
          </button>
          <button className="btn btn-circle btn-sm bg-gray-200 hover:bg-gray-300 text-gray-700 border-none">
            <IoChevronForward className="text-[16px]" />
          </button>
        </div>

        <div className="max-w-[580px] mb-[40px]">
          <h2 className="text-[32px] sm:text-[44px] md:text-[52px] font-bold leading-[1.1] mb-[16px] ">
            <span className="underline decoration-emerald-500 decoration-[3px] underline-offset-[6px]">
              Partnerships  that do
            </span>
           
            <br/>a world of good.
          </h2>

          <p className="text-[15px] sm:text-[17px] text-gray-600 leading-relaxed">
            Doing right by the planet means doing right by the people who live on
            it — especially those most impacted by environmental risks. So we’re
            supporting partners and communities worldwide. Because we can
            achieve more together than we can alone.
          </p>
        </div>

        <div className="w-full overflow-x-auto pb-[16px]">
          <img src={partnerImg} alt="Partnerships" className="w-full rounded-[24px]" />
        </div>

        <div className="flex items-center justify-between mt-[24px]">
          <button className="btn btn-circle btn-sm btn-outline border-gray-400 text-gray-700">
            <IoPlayOutline className="text-[16px]" />
          </button>

          <div className="flex gap-[10px]">
            <button className="btn btn-circle btn-sm bg-gray-200 hover:bg-gray-300 text-gray-700 border-none">
              <IoChevronBack className="text-[16px]" />
            </button>
            <button className="btn btn-circle btn-sm bg-gray-200 hover:bg-gray-300 text-gray-700 border-none">
              <IoChevronForward className="text-[16px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvProofX;
