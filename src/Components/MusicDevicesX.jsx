import React from "react";
import {
  IoPhonePortraitOutline,
  IoTabletPortraitOutline,
  IoWatchOutline,
  IoLaptopOutline,
  IoGlassesOutline,
  IoTvOutline,
  IoCarSportOutline,
  IoVolumeHighOutline,
  IoDesktopOutline,
  IoChevronForward,
} from "react-icons/io5";
import { FaPlaystation, FaXbox, FaMicrosoft, FaAmazon, FaGoogle } from "react-icons/fa";
import { SiRoku, SiSamsung, SiLg } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";

const MusicDevices = () => {
  return (
    <section className="w-full py-[64px] md:py-[96px] bg-white text-black">
      <div className="container mx-auto w-[95%] max-w-[980px] flex flex-col items-center text-center">
        <h2 className="text-[36px] sm:text-[48px] md:text-[56px] font-bold leading-[1.1] mb-[48px] md:mb-[64px]">
          Listen to Apple Music
          <br />
          <span className="text-rose-600">on all your devices.</span>
        </h2>

        <div className="w-full flex flex-wrap justify-center gap-y-[40px] gap-x-[24px] sm:gap-x-[48px] mb-[64px]">
          <div className="w-[120px] sm:w-[140px] flex flex-col items-center">
            <IoPhonePortraitOutline className="text-[44px] mb-[12px]" />
            <p className="text-[15px] font-semibold">iPhone</p>
          </div>

          <div className="w-[120px] sm:w-[140px] flex flex-col items-center">
            <IoTabletPortraitOutline className="text-[44px] mb-[12px]" />
            <p className="text-[15px] font-semibold">iPad</p>
          </div>

          <div className="w-[120px] sm:w-[140px] flex flex-col items-center">
            <IoWatchOutline className="text-[44px] mb-[12px]" />
            <p className="text-[15px] font-semibold">Apple Watch</p>
          </div>

          <div className="w-[120px] sm:w-[140px] flex flex-col items-center">
            <IoLaptopOutline className="text-[44px] mb-[12px]" />
            <p className="text-[15px] font-semibold">Mac</p>
          </div>

          <div className="w-[120px] sm:w-[140px] flex flex-col items-center">
            <IoGlassesOutline className="text-[44px] mb-[12px]" />
            <p className="text-[15px] font-semibold">Apple Vision Pro</p>
          </div>

          <div className="w-[120px] sm:w-[140px] flex flex-col items-center">
            <IoVolumeHighOutline className="text-[44px] mb-[12px]" />
            <p className="text-[15px] font-semibold">HomePod</p>
          </div>

          <div className="w-[120px] sm:w-[140px] flex flex-col items-center">
            <IoTvOutline className="text-[44px] mb-[12px]" />
            <p className="text-[15px] font-semibold">Apple TV</p>
          </div>

          <div className="w-[120px] sm:w-[140px] flex flex-col items-center">
            <IoCarSportOutline className="text-[44px] mb-[12px]" />
            <p className="text-[15px] font-semibold mb-[4px]">CarPlay</p>
            <a href="#" className="text-[12px] text-blue-600 hover:underline inline-flex items-center">
              Find compatible vehicles <IoChevronForward className="text-[11px]" />
            </a>
          </div>

          <div className="w-[120px] sm:w-[140px] flex flex-col items-center">
            <IoPhonePortraitOutline className="text-[44px] mb-[12px]" />
            <p className="text-[15px] font-semibold mb-[4px]">Android</p>
            <a href="#" className="text-[12px] text-blue-600 hover:underline inline-flex items-center">
              Download on Google Play <FiArrowUpRight className="text-[11px]" />
            </a>
          </div>

          <div className="w-[120px] sm:w-[140px] flex flex-col items-center">
            <IoDesktopOutline className="text-[44px] mb-[12px]" />
            <p className="text-[15px] font-semibold mb-[4px]">PC</p>
            <a href="#" className="text-[12px] text-blue-600 hover:underline inline-flex items-center">
              Download on Microsoft Store <FiArrowUpRight className="text-[11px]" />
            </a>
          </div>
        </div>

        <h3 className="text-[20px] sm:text-[24px] font-bold mb-[8px]">
          Even more places to get Apple Music.
        </h3>
        <a href="#" className="text-[14px] text-blue-600 hover:underline inline-flex items-center mb-[40px]">
          Set up your device <IoChevronForward className="text-[12px] ml-[2px]" />
        </a>

        <div className="w-full max-w-[760px] flex flex-wrap items-center justify-center gap-x-[32px] sm:gap-x-[48px] gap-y-[24px] text-gray-800">
          <div className="flex items-center gap-[6px] text-[18px] font-bold">
            <FaPlaystation className="text-[24px]" />
            <span>PlayStation</span>
          </div>

          <div className="flex items-center gap-[6px] text-[18px] font-semibold">
            <FaXbox className="text-[22px]" />
            <span>XBOX</span>
          </div>

          <SiRoku className="text-[52px]" />
          <SiSamsung className="text-[64px]" />

          <div className="flex items-center gap-[6px] text-[16px] font-bold">
            <SiLg className="text-[24px]" />
            <span>SMART TV</span>
          </div>

          <div className="flex items-center gap-[4px] text-[18px] font-semibold">
            <FaAmazon className="text-[22px]" />
            <span>alexa</span>
          </div>

          <span className="text-[20px] font-bold tracking-[4px]">SONOS</span>

          <div className="flex items-center gap-[6px] text-[16px] font-medium">
            <FaGoogle className="text-[18px]" />
            <span>Google Nest</span>
          </div>

          <div className="flex items-center gap-[6px] text-[17px] font-semibold">
            <FaMicrosoft className="text-[20px]" />
            <span>Microsoft</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicDevices;
