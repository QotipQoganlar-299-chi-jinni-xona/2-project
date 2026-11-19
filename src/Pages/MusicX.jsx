import React from "react";
import SectionMusicX from "../Components/SectionMusicX";

const MusicX = () => {
  return (
    <div>
      <div className="text-center mt-2 bg-gradient-to-r from-purple-300 to-pink-500 p-5">
        <p className="text-[14px] text-black leading-[20px]">
          For a limited time, get 3 months of Apple Music free.
          <span className="cursor-pointer text-[14px] leading-[20px] text-[#0066CC] ml-2">
            <a href="#" >*Start your trial</a>
          </span>
        </p>
      </div>

      <SectionMusicX />
    </div>
  );
};

export default MusicX;
