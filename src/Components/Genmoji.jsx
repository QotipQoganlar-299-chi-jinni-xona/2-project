import React from 'react'

const Genmoji = () => {
    return (
        <>
            <div className='max-[100%] w-[85%] mx-auto'>
                <div>
                    <section className="bg-white px-6 py-12">
                        <h2 className="mx-auto max-w-4xl text-4xl font-bold sm:text-5xl">
                            <span className="text-indigo-500">Take total Camera Control.</span>
                            <br />
                            <span className="text-[#1d1d1f]">Touch. Zoom. Click. Quick.</span>
                        </h2>
                    </section>
                </div>

                <img src="https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2024/09/iphone-16-featured.jpg?w=1600&h=900&fit=crop" alt="" />



                <section className="bg-[#f0f1fa] py-12">
                    <div className="w-[90%] mx-auto">

                        <p className="text-gray-500 max-w-[600px]">
                            Now you can take the perfect photo or video in record time.
                            Camera Control gives you an easier way to quickly access camera tools.
                        </p>

                        <div className="flex gap-4 mt-10 overflow-x-auto">

                            <div className="min-w-[320px]">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXWcU_aiSExepwPp6JKYI5lN62UbsZ8MNAVeIFFWFKOK7dh7W1kRY9M7wj&s=10"
                                    className="w-full h-[320px] object-cover rounded-3xl border-2 border-blue-500"
                                />
                                <p className="text-gray-500 text-sm mt-4">
                                    Click to launch the Camera app. Click again to instantly take a photo.
                                </p>
                            </div>

                            <div className="min-w-[320px]">
                                <img
                                    src="https://m-cdn.phonearena.com/images/review/6566-wide-two_1200/Apple-iPhone-16-Review-A-Step-Forward-But-Not-a-Giant-Leap.jpg"
                                    className="w-full h-[320px] object-cover rounded-3xl"
                                />
                                <p className="text-gray-500 text-sm mt-4">
                                    In video mode, click to start recording.
                                </p>
                            </div>

                            <div className="min-w-[320px]">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLd40aRwAwCqXTZmp_Hi3wkCeHr6pzVTPXc0gsPMiHp9SuhVE800OldeQ&s=10"
                                    className="w-full h-[320px] object-cover rounded-3xl"
                                />
                                <p className="text-gray-500 text-sm mt-4">
                                    A light press opens controls.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
            </div>








        </>
    )
}

export default Genmoji