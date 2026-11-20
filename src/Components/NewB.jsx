import React from 'react'

const NewB = () => {
    return (
        <div>
            <div className="bg-white">

                <section className="pt-16 px-8">
                    <div className="max-w-[640px] mx-auto">

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            <span className="text-pink-500">
                                New camera system.
                            </span>
                            <br />
                            Go to great lengths to get the perfect shot.
                        </h1>

                        <p className="text-gray-500 text-sm mt-6">
                            The versatile new iPhone 16 camera system captures beautiful
                            photos — from up close or far away. The two-in-one 48MP
                            Fusion camera lets you take stunning pictures.
                        </p>

                    </div>

                    <img
                        src="https://images.unian.net/photos/2023_11/thumb_files/800_0_1699015616-7542.png?r=891575"
                        className="w-full mt-12 object-cover"
                        alt="Camera"
                    />
                </section>

                <section className="py-16 px-8">
                    <div className="max-w-[515px] mx-auto">

                        <h2 className="text-3xl font-bold text-gray-900">
                            Ultra Wide camera.
                            <br />
                            Focus on the little things.
                            <br />
                            And the bigger picture.
                        </h2>

                        <p className="text-gray-500 text-sm mt-6">
                            The new Ultra Wide camera with autofocus takes incredibly
                            sharp, detailed macro photos and videos. You can also
                            frame more expansive scenes without taking a step back.
                        </p>

                    </div>
                </section>

            </div>

            <div className="bg-white py-7 px-10">

                <div className="flex gap-3 overflow-x-auto">

                    <div className="min-w-[70%]">
                        <img
                            src="https://images.unsplash.com/photo-1535591273668-578e31182c4f"
                            className="w-full h-[380px] object-cover"
                        />
                    </div>

                    <div className="min-w-[70%] opacity-40">
                        <img
                            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2"
                            className="w-full h-[380px] object-cover"
                        />
                    </div>

                </div>

            </div>


            <div className="bg-[#f5f5f7] py-16 px-5">

                <section className="max-w-[480px] mx-auto">

                    <h1 className="text-3xl font-bold">
                        <span className="text-gray-400">Spatial Capture.</span>
                        <br />
                        Bring a whole new dimension to your photos and videos.
                    </h1>

                    <img
                        src="https://s3.t2.ru/ds-site/images/journal/iphone-16-review/3.png"
                        className="w-full mt-8 object-contain"
                    />

                    <p className="text-gray-500 text-sm mt-6">
                        With its realigned cameras, iPhone 16 lets you take magical
                        photos and videos in a whole new way using spatial capture.
                    </p>

                    <p className="text-blue-500 text-sm mt-6">
                        How to take spatial photos and videos ›
                    </p>

                </section>

                <section className="max-w-[630px] mx-auto bg-white rounded-2xl p-8 mt-20">

                    <h2 className="text-2xl font-bold">
                        <span className="text-gray-400">Audio Mix.</span>
                        <br />
                        Make your voice heard.
                    </h2>

                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSznr0lxg_L6T_pIXioulgCbg6isSCipyhLpUzXmc4COhWzA1iPsb7Qe8s&s=10"
                        className="w-full mt-8 object-contain"
                    />

                    <p className="text-gray-500 text-xs mt-6">
                        Powered by advanced intelligence and Spatial Audio capture,
                        Audio Mix lets you adjust the way voices sound in your videos.
                    </p>

                    <div className="grid grid-cols-3 gap-5 mt-10">

                        <div>
                            <h3 className="font-bold text-sm">In-frame</h3>
                            <hr className="my-2" />
                            <p className="text-gray-500 text-xs">
                                Only captures the voices of the people on camera.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-sm">Studio</h3>
                            <hr className="my-2" />
                            <p className="text-gray-500 text-xs">
                                Makes voices sound like you're recording in a studio.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-sm">Cinematic</h3>
                            <hr className="my-2" />
                            <p className="text-gray-500 text-xs">
                                Captures all voices around you.
                            </p>
                        </div>

                    </div>

                </section>

            </div>

        </div>
    )
}

export default NewB