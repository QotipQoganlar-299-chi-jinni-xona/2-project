import React from "react";
import { AiFillApple } from "react-icons/ai";
import { IoChevronForward } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-500 text-[12px] py-[24px]">
      <div className="container mx-auto w-[95%] max-w-[980px]">
        <div className="flex items-center gap-[8px] pb-[16px] text-gray-700">
          <AiFillApple className="text-[16px]" />
          <IoChevronForward className="text-[12px]" />
          <span>Entertainment</span>
          <IoChevronForward className="text-[12px]" />
          <span>Apple Music</span>
        </div>

        <div className="flex flex-wrap justify-between gap-[20px] py-[16px] text-gray-600">
          <div className="w-[45%] sm:w-[18%] flex flex-col gap-[8px]">
            <h4 className="font-semibold text-gray-900">Shop and Learn</h4>
            <a href="#" className="hover:underline">Store</a>
            <a href="#" className="hover:underline">Mac</a>
            <a href="#" className="hover:underline">iPad</a>
            <a href="#" className="hover:underline">iPhone</a>
            <a href="#" className="hover:underline">Watch</a>
            <a href="#" className="hover:underline">Vision</a>
            <a href="#" className="hover:underline">AirPods</a>
          </div>

          <div className="w-[45%] sm:w-[18%] flex flex-col gap-[8px]">
            <h4 className="font-semibold text-gray-900">Account</h4>
            <a href="#" className="hover:underline">Manage Your Apple ID</a>
            <a href="#" className="hover:underline">Apple Store Account</a>
            <a href="#" className="hover:underline">iCloud.com</a>

            <h4 className="font-semibold text-gray-900 mt-[10px]">Entertainment</h4>
            <a href="#" className="hover:underline">Apple One</a>
            <a href="#" className="hover:underline">Apple TV+</a>
            <a href="#" className="hover:underline">Apple Music</a>
            <a href="#" className="hover:underline">Apple Arcade</a>
          </div>

          <div className="w-[45%] sm:w-[18%] flex flex-col gap-[8px]">
            <h4 className="font-semibold text-gray-900">Apple Store</h4>
            <a href="#" className="hover:underline">Find a Store</a>
            <a href="#" className="hover:underline">Genius Bar</a>
            <a href="#" className="hover:underline">Today at Apple</a>
            <a href="#" className="hover:underline">Apple Trade In</a>
            <a href="#" className="hover:underline">Order Status</a>
          </div>

          <div className="w-[45%] sm:w-[18%] flex flex-col gap-[8px]">
            <h4 className="font-semibold text-gray-900">For Business</h4>
            <a href="#" className="hover:underline">Apple and Business</a>
            <a href="#" className="hover:underline">Shop for Business</a>

            <h4 className="font-semibold text-gray-900 mt-[10px]">For Education</h4>
            <a href="#" className="hover:underline">Apple and Education</a>
            <a href="#" className="hover:underline">Shop for College</a>
          </div>

          <div className="w-[45%] sm:w-[18%] flex flex-col gap-[8px]">
            <h4 className="font-semibold text-gray-900">About Apple</h4>
            <a href="#" className="hover:underline">Newsroom</a>
            <a href="#" className="hover:underline">Apple Leadership</a>
            <a href="#" className="hover:underline">Career Opportunities</a>
            <a href="#" className="hover:underline">Investors</a>
            <a href="#" className="hover:underline">Contact Apple</a>
          </div>
        </div>

        <p className="py-[12px] border-b border-gray-300">
          More ways to shop: <a href="#" className="text-blue-600 underline">Find an Apple Store</a> or{" "}
          <a href="#" className="text-blue-600 underline">other retailer</a> near you.
        </p>

        <div className="flex flex-col sm:flex-row justify-between gap-[10px] pt-[16px]">
          <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
          <div className="flex flex-wrap gap-[10px] text-gray-700">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:underline">Sales and Refunds</a>
          </div>
          <p className="text-gray-700">United States</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
