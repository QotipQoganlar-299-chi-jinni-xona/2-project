import React from "react";
import { IoMusicalNotes, IoChevronForward } from "react-icons/io5";


const Question = () => {
    return (
        <div className="bg-white text-black py-[60px]">
            <div className="container mx-auto w-[95%] max-w-[850px]">
                <h2 className="text-[32px] md:text-[50px] font-bold text-center mb-[40px]">
                    Questions? Answers.
                </h2>

                <div className="flex flex-col">
                    <div className="collapse collapse-arrow border-b border-gray-200 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title text-[16px] md:text-[18px] font-semibold px-0">
                            What is Apple Music? Is it the same as iTunes?
                        </div>
                        <div className="collapse-content text-[14px] text-gray-600 px-0">
                            <p>
                                Apple Music is a streaming service that allows you to listen to
                                over 100 million songs. Your iTunes library is still yours and
                                you can access your entire collection from Apple Music.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow border-b border-gray-200 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title text-[16px] md:text-[18px] font-semibold px-0">
                            How can I listen to Apple Music?
                        </div>
                        <div className="collapse-content text-[14px] text-gray-600 px-0">
                            <p>
                                You can listen on the Apple Music app across iPhone, iPad, Mac,
                                Apple Watch, Apple TV, Windows PC, and Android devices.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow border-b border-gray-200 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title text-[16px] md:text-[18px] font-semibold px-0">
                            What does Apple Music cost?
                        </div>
                        <div className="collapse-content text-[14px] text-gray-600 px-0">
                            <p>
                                Student plan is $5.99/mo., Individual plan is $10.99/mo., and
                                Family plan is $16.99/mo.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow border-b border-gray-200 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title text-[16px] md:text-[18px] font-semibold px-0">
                            Is there an Apple Music student subscription?
                        </div>
                        <div className="collapse-content text-[14px] text-gray-600 px-0">
                            <p>
                                Yes, students enrolled in degree-granting universities and
                                colleges can join for $5.99/mo.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow border-b border-gray-200 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title text-[16px] md:text-[18px] font-semibold px-0">
                            Does Siri work with all plans?
                        </div>
                        <div className="collapse-content text-[14px] text-gray-600 px-0">
                            <p>
                                Yes, Siri works with all Apple Music plans on supported Apple
                                devices.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow border-b border-gray-200 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title text-[16px] md:text-[18px] font-semibold px-0">
                            What is Dolby Atmos music and how can I listen to it?
                        </div>
                        <div className="collapse-content text-[14px] text-gray-600 px-0">
                            <p>
                                Dolby Atmos is an immersive audio experience that lets you hear
                                sound all around you on supported headphones and speakers.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow border-b border-gray-200 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title text-[16px] md:text-[18px] font-semibold px-0">
                            What is lossless audio and how can I listen to it?
                        </div>
                        <div className="collapse-content text-[14px] text-gray-600 px-0">
                            <p>
                                Lossless audio preserves every detail of the original studio
                                recording. You can turn it on in your Apple Music settings.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow border-b border-gray-200 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title text-[16px] md:text-[18px] font-semibold px-0">
                            Can I share with my family?
                        </div>
                        <div className="collapse-content text-[14px] text-gray-600 px-0">
                            <p>
                                Yes, with an Apple Music Family subscription, up to six people
                                can enjoy unlimited access.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow border-b border-gray-200 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title text-[16px] md:text-[18px] font-semibold px-0">
                            Are there commercials?
                        </div>
                        <div className="collapse-content text-[14px] text-gray-600 px-0">
                            <p>No, Apple Music is completely ad-free.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow border-b border-gray-200 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title text-[16px] md:text-[18px] font-semibold px-0">
                            Am I eligible for a three-month Apple Music free offer? How do I redeem it?
                        </div>
                        <div className="collapse-content text-[14px] text-gray-600 px-0">
                            <p>
                                New subscribers who purchase an eligible Apple device can redeem
                                3 months free in the Apple Music app.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow border-b border-gray-200 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title text-[16px] md:text-[18px] font-semibold px-0">
                            What is Apple Music Classical?
                        </div>
                        <div className="collapse-content text-[14px] text-gray-600 px-0">
                            <p>
                                Apple Music Classical is a dedicated app designed specifically
                                for classical music, included with your Apple Music subscription.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow border-b border-gray-200 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title text-[16px] md:text-[18px] font-semibold px-0">
                            Why a separate app for classical music?
                        </div>
                        <div className="collapse-content text-[14px] text-gray-600 px-0">
                            <p>
                                Classical music involves multiple movements and recordings, so a
                                separate app makes searching by composer, work, or conductor easy.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow border-b border-gray-200 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title text-[16px] md:text-[18px] font-semibold px-0">
                            How do I get Apple Music Classical and where can I listen to it?
                        </div>
                        <div className="collapse-content text-[14px] text-gray-600 px-0">
                            <p>
                                You can download Apple Music Classical from the App Store on
                                iPhone and iPad, or Google Play on Android.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow border-b border-gray-200 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title text-[16px] md:text-[18px] font-semibold px-0">
                            Is classical music still available in Apple Music?
                        </div>
                        <div className="collapse-content text-[14px] text-gray-600 px-0">
                            <p>
                                Yes, all classical tracks remain available in the standard Apple
                                Music app as well.
                            </p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow border-b border-gray-200 rounded-none">
                        <input type="checkbox" />
                        <div className="collapse-title text-[16px] md:text-[18px] font-semibold px-0">
                            Does Apple Music Classical also offer other genres?
                        </div>
                        <div className="collapse-content text-[14px] text-gray-600 px-0">
                            <p>
                                No, Apple Music Classical is focused exclusively on classical
                                music.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 text-black py-[64px] mt-[60px]">
                <div className="container mx-auto w-[95%] max-w-[720px] flex flex-col items-center text-center">
                    <div className="bg-rose-600 text-white p-[12px] rounded-[14px] mb-[16px]">
                        <IoMusicalNotes className="text-[28px]" />
                    </div>

                    <h2 className="text-[28px] md:text-[36px] font-bold mb-[16px]">
                        Working with Apple Music.
                    </h2>

                    <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed mb-[20px]">
                        Apple Music supports artists with tools to create, release, promote,
                        and measure music across a global stage. Get fans excited for your
                        latest release with beautiful, customizable social assets. Celebrate
                        big moments for plays, Shazams, and playlist adds with Milestones.
                        Discover all the ways to showcase content on Apple Music — including
                        MusicKit, RSS feeds, widgets, brand guidelines, badge art, and more.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-[24px] text-[14px] text-blue-600">
                        <a href="#" className="hover:underline inline-flex items-center">
                            Apple Music for Artists
                            <IoChevronForward className="text-[12px] ml-[2px]" />
                        </a>

                        <a href="#" className="hover:underline inline-flex items-center">
                            Apple Performance Partners Program
                            <IoChevronForward className="text-[12px] ml-[2px]" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Question;
