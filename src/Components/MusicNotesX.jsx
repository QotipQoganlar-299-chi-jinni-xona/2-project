import React from "react";
import { IoMusicalNotes, IoChevronForward } from "react-icons/io5";

const MusicNotes = () => {
  return (
    <div className="bg-gray-100 text-gray-500 text-[12px]">
      <div className="py-[50px] border-b border-gray-300">
        <div className="container mx-auto w-[95%] max-w-[700px] flex flex-col items-center text-center">
          <div className="bg-rose-600 text-white p-[12px] rounded-[14px] mb-[16px]">
            <IoMusicalNotes className="text-[28px]" />
          </div>

          <h2 className="text-[28px] md:text-[36px] font-bold text-black mb-[14px]">
            Working with Apple Music.
          </h2>

          <p className="text-[14px] text-gray-600 leading-relaxed mb-[18px]">
            Apple Music supports artists with tools to create, release, promote,
            and measure music across a global stage. Get fans excited for your
            latest release with beautiful, customizable social assets.
          </p>

          <div className="flex flex-wrap justify-center gap-[20px] text-[14px] text-blue-600">
            <a href="#" className="hover:underline inline-flex items-center">
              Apple Music for Artists <IoChevronForward className="text-[12px]" />
            </a>
            <a href="#" className="hover:underline inline-flex items-center">
              Apple Performance Partners Program <IoChevronForward className="text-[12px]" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto w-[95%] max-w-[980px] py-[24px] border-b border-gray-300 flex flex-col gap-[8px]">
        <p>* New subscribers only. $10.99/month after free trial. Plan automatically renews until cancelled.</p>
        <p>◊ New subscribers only. Offer is available for new Apple Music subscribers with a new eligible device.</p>
        <p>1. Compatible hardware and software required. Not all content available in Spatial Audio.</p>
        <p>2. Lossless audio available up to 24-bit/192 kHz.</p>
        <p>3. The Apple One free trial includes only services that you are not currently using.</p>
        <p>4. Limited-time offer; offer may end at any time. Free Apple TV+ access for students ends when you no longer qualify.</p>
        <p>8. College students only. Verification required.</p>
        <p>9. Requires Family Sharing. See ://apple.com for more information.</p>
      </div>
    </div>
  );
};

export default MusicNotes;
