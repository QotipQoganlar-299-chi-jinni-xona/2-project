import React from "react";
import { IoPlayOutline, IoChevronBack, IoChevronForward } from "react-icons/io5";
import ipadImg from "../assets/ipad.png";
import iphoneImg from "../assets/iphone.png";
import watchImg from "../assets/watch.png";
import macbookImg from "../assets/macbook.png";
import section from '../assets/Section.png'

const EnvApproachX = () => {
    return (
        <section className="relative w-full py-[80px] md:py-[120px] bg-white text-black overflow-hidden">
            <img
                src={ipadImg}
                alt="iPad"
                className="hidden lg:block absolute top-[40px] left-0 w-[180px]"
            />
            <img
                src={iphoneImg}
                alt="iPhone"
                className="hidden lg:block absolute top-[340px] left-[40px] w-[140px]"
            />
            <img
                src={watchImg}
                alt="Apple Watch"
                className="hidden lg:block absolute top-[60px] right-[60px] w-[210px]"
            />

            <img
                src={macbookImg}
                alt="MacBook"
                className="hidden lg:block absolute bottom-[780px] right-0 w-[160px]"
            />

            <div className="container mx-auto w-[95%] max-w-[780px] flex flex-col items-center">
                <h2 className="text-[32px] sm:text-[44px] md:text-[52px] font-bold leading-[1.1] text-center mb-[48px]">
                    A
                    <span className="underline decoration-emerald-500 decoration-[3px] underline-offset-[6px]">
                        detailed
                    </span>
                    approach.
                    <br />
                    From design to disassembly.
                </h2>
                <div className="w-full max-w-[600px] flex flex-col sm:flex-row justify-between gap-[32px] mb-[40px]">
                    <div className="flex-1">
                        <p className="text-[11px] font-bold tracking-wider uppercase text-gray-800 mb-[8px]">
                            → OUR APPROACH
                        </p>
                        <p className="text-[14px] text-gray-600 leading-relaxed">
                            Recycled and renewable materials often carry a lighter footprint
                            than mined materials. By sourcing more recycled and renewable
                            content, we can help to one day end our reliance on mining.
                        </p>
                    </div>

                    <div className="flex-1">
                        <p className="text-[11px] font-bold tracking-wider uppercase text-gray-800 mb-[8px]">
                            → OUR PROGRESS
                        </p>
                        <p className="text-[14px] text-gray-600 leading-relaxed">
                            22% of the materials we shipped in Apple products came from
                            recycled and renewable sources.<sup>2</sup>
                        </p>
                    </div>
                </div>

                <div className="w-full max-w-[600px] flex items-center justify-between">
                    <button className="btn btn-circle btn-sm btn-outline border-gray-400 text-gray-700">
                        <IoPlayOutline className="text-[16px]" />
                    </button>

                    <div className="flex items-center gap-[10px]">
                        <button className="btn btn-circle btn-sm bg-gray-200 hover:bg-gray-300 text-gray-700 border-none">
                            <IoChevronBack className="text-[16px]" />
                        </button>
                        <button className="btn btn-circle btn-sm bg-gray-200 hover:bg-gray-300 text-gray-700 border-none">
                            <IoChevronForward className="text-[16px]" />
                        </button>
                    </div>


                </div>

            </div>
            <div className='mx-auto max-w-[100%] w-[95%] flex justify-center'>
                <img className='w-[1000px]' src={section} alt="section" />

            </div>

        </section>
    );
};

export default EnvApproachX;
