import React from "react";
import {
    IoPhonePortraitOutline,
    IoTabletPortraitOutline,
    IoWatchOutline,
    IoLaptopOutline,
    IoDesktopOutline,
    IoTvOutline,
    IoGlassesOutline,
    IoChevronForward,
} from "react-icons/io5";

const EnvReportsX = () => {
    return (
        <section className="w-full py-[64px] md:py-[96px] bg-white text-black">
            <div className="container mx-auto w-[95%] max-w-[980px]">
                <div className="pb-[56px] border-b border-gray-200">
                    <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold mb-[10px]">
                        Designed with the earth in mind.
                    </h2>
                    <p className="text-[14px] sm:text-[16px] text-gray-600 mb-[28px]">
                        Learn more about the progress of your Apple devices with our product
                        environmental reports.
                    </p>

                    <div className="flex items-center gap-[10px] overflow-x-auto pb-[16px] mb-[32px]">
                        <button className="btn btn-sm bg-emerald-500 hover:bg-emerald-600 text-black border-none rounded-full px-[16px] shrink-0">
                            <IoPhonePortraitOutline className="text-[16px]" />
                            <span>iPhone</span>
                        </button>

                        <button className="btn btn-sm bg-gray-100 hover:bg-gray-200 text-gray-800 border-none rounded-full px-[16px] shrink-0 font-normal">
                            <IoTabletPortraitOutline className="text-[16px]" />
                            <span>iPad</span>
                        </button>

                        <button className="btn btn-sm bg-gray-100 hover:bg-gray-200 text-gray-800 border-none rounded-full px-[16px] shrink-0 font-normal">
                            <IoWatchOutline className="text-[16px]" />
                            <span>Apple Watch</span>
                        </button>

                        <button className="btn btn-sm bg-gray-100 hover:bg-gray-200 text-gray-800 border-none rounded-full px-[16px] shrink-0 font-normal">
                            <IoLaptopOutline className="text-[16px]" />
                            <span>Laptops</span>
                        </button>

                        <button className="btn btn-sm bg-gray-100 hover:bg-gray-200 text-gray-800 border-none rounded-full px-[16px] shrink-0 font-normal">
                            <IoDesktopOutline className="text-[16px]" />
                            <span>Desktops</span>
                        </button>

                        <button className="btn btn-sm bg-gray-100 hover:bg-gray-200 text-gray-800 border-none rounded-full px-[16px] shrink-0 font-normal">
                            <IoTvOutline className="text-[16px]" />
                            <span>Displays</span>
                        </button>

                        <button className="btn btn-sm bg-gray-100 hover:bg-gray-200 text-gray-800 border-none rounded-full px-[16px] shrink-0 font-normal">
                            <IoGlassesOutline className="text-[16px]" />
                            <span>Apple Vision Pro</span>
                        </button>
                    </div>

                    <div className="flex flex-wrap justify-between gap-[24px] mb-[40px] text-[13px]">
                        <div className="w-[45%] sm:w-[17%]">
                            <p className="font-semibold text-gray-900 mb-[4px]">
                                iPhone 16 Pro and iPhone 16 Pro Max
                            </p>
                            <a href="#" className="text-blue-600 hover:underline">
                                View (PDF)
                            </a>
                        </div>

                        <div className="w-[45%] sm:w-[17%]">
                            <p className="font-semibold text-gray-900 mb-[4px]">
                                iPhone 16 and iPhone 16 Plus
                            </p>
                            <a href="#" className="text-blue-600 hover:underline">
                                View (PDF)
                            </a>
                        </div>

                        <div className="w-[45%] sm:w-[17%]">
                            <p className="font-semibold text-gray-900 mb-[4px]">
                                iPhone 15 and iPhone 15 Plus
                            </p>
                            <a href="#" className="text-blue-600 hover:underline">
                                View (PDF)
                            </a>
                        </div>

                        <div className="w-[45%] sm:w-[17%]">
                            <p className="font-semibold text-gray-900 mb-[4px]">
                                iPhone 14 and iPhone 14 Plus
                            </p>
                            <a href="#" className="text-blue-600 hover:underline">
                                View (PDF)
                            </a>
                        </div>

                        <div className="w-[45%] sm:w-[17%]">
                            <p className="font-semibold text-gray-900 mb-[4px]">
                                iPhone SE (3rd generation)
                            </p>
                            <a href="#" className="text-blue-600 hover:underline">
                                View (PDF)
                            </a>
                        </div>
                    </div>

                    <div className="text-center">
                        <a href="#" className="text-[13px] text-blue-600 hover:underline">
                            View previous reports +
                        </a>
                    </div>
                </div>

                <div className="py-[56px] border-b border-gray-200">
                    <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold mb-[10px]">
                        An even closer look at our progress.
                    </h2>
                    <p className="text-[14px] sm:text-[16px] text-gray-600 mb-[16px]">
                        Learn more about our latest efforts to fight climate change and
                        support equity.
                    </p>
                    <a href="#" className="text-[13px] text-blue-600 hover:underline block mb-[32px]">
                        View the 2024 Environmental Progress Report (PDF)
                    </a>

                    <div className="text-center">
                        <a href="#" className="text-[13px] text-blue-600 hover:underline">
                            View previous reports +
                        </a>
                    </div>
                </div>

                <div className="pt-[56px]">
                    <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold mb-[40px]">
                        Additional Reports and Resources
                    </h2>

                    <div className="flex flex-col md:flex-row justify-between gap-[40px] text-[13px]">
                        <div className="flex-1 flex flex-col gap-[36px]">
                            <div className="flex flex-col gap-[8px]">
                                <h3 className="text-[16px] font-bold text-gray-900">
                                    Circular Economy
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-[4px]">
                                    Our aim is to make products using only recycled or renewable
                                    materials — so we prioritize, responsibly source, and recover
                                    materials.
                                </p>
                                <a href="#" className="text-blue-600 hover:underline">
                                    Learn how we prioritize materials with our Material Impact Profiles (PDF)
                                </a>
                                <a href="#" className="text-blue-600 hover:underline">
                                    Read our white paper on Apple’s Paper and Packaging Strategy (PDF)
                                </a>
                                <a href="#" className="text-blue-600 hover:underline">
                                    Read our Responsible Fiber Specification (PDF)
                                </a>
                                <a href="#" className="text-blue-600 hover:underline">
                                    Read our white paper on expanding access to service and repairs (PDF)
                                </a>
                                <a href="#" className="text-blue-600 hover:underline inline-flex items-center">
                                    Learn how to trade in or recycle your device <IoChevronForward className="text-[11px]" />
                                </a>
                                <a href="#" className="text-blue-600 hover:underline inline-flex items-center">
                                    Learn more about disassembly for professional recyclers <IoChevronForward className="text-[11px]" />
                                </a>
                            </div>

                            <div className="flex flex-col gap-[8px]">
                                <h3 className="text-[16px] font-bold text-gray-900">
                                    Climate Change
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-[4px]">
                                    Climate change is a defining issue of our time. View detailed
                                    updates on our progress.
                                </p>
                                <a href="#" className="text-blue-600 hover:underline">
                                    Read Apple’s 2023 CDP Climate Change response (PDF)
                                </a>
                                <a href="#" className="text-blue-600 hover:underline">
                                    Read our white paper on Apple’s Carbon Removal Strategy (PDF)
                                </a>
                                <a href="#" className="text-blue-600 hover:underline">
                                    Read our white paper on Apple’s Product Use Electricity Strategy (PDF)
                                </a>
                            </div>

                            <div className="flex flex-col gap-[8px]">
                                <h3 className="text-[16px] font-bold text-gray-900">
                                    Frequently Asked Questions
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-[4px]">
                                    Find answers to common questions about Apple and the environment.
                                </p>
                                <a href="#" className="text-blue-600 hover:underline inline-flex items-center">
                                    Read the FAQs <IoChevronForward className="text-[11px]" />
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-[36px]">
                            <div className="flex flex-col gap-[8px]">
                                <h3 className="text-[16px] font-bold text-gray-900">
                                    Smarter Chemistry
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-[4px]">
                                    Apple has a rigorous program to ensure the safety of chemicals
                                    used in our products. Learn about Apple’s strict standards,
                                    detailed toxicological assessments, and methodology for
                                    assessing chemicals of concern.
                                </p>
                                <a href="#" className="text-blue-600 hover:underline">
                                    Read the Regulated Substances Specification (PDF)
                                </a>
                                <a href="#" className="text-blue-600 hover:underline">
                                    Read our white paper on Integrating Toxicological Assessments in Material Selection for Apple Products (PDF)
                                </a>
                                <a href="#" className="text-blue-600 hover:underline">
                                    Read our Protocol for Prioritizing Chemicals of Concern in the Electronics Industry (PDF)
                                </a>
                                <a href="#" className="text-blue-600 hover:underline">
                                    Read about Apple’s commitment to phasing out per- and polyfluoroalkyl substances (PFAS) (PDF)
                                </a>
                            </div>

                            <div className="flex flex-col gap-[8px]">
                                <h3 className="text-[16px] font-bold text-gray-900">
                                    People and Environment in Our Supply Chain
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-[4px]">
                                    We hold ourselves and our suppliers to the highest standards of
                                    labor and human rights, health and safety in the workplace,
                                    environmental practices, and the responsible sourcing of materials.
                                </p>
                                <a href="#" className="text-blue-600 hover:underline inline-flex items-center">
                                    Visit the Supply Chain Innovation site <IoChevronForward className="text-[11px]" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnvReportsX;
