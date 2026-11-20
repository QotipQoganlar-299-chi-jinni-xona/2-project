import React from 'react'

const A18B = () => {
    return (
        <div className='max-[100%] w-[65%] mx-auto'>
            <section className="bg-black text-white">
                <img
                    src="https://placehold.co/800x260/111111/ffffff?text=A18"
                    alt="A18 chip"
                    className="mx-auto w-full max-w-[800px]"
                />

                <div className="mx-auto max-w-[800px] px-6 pb-10 pt-6">
                    <h2 className="text-3xl font-bold leading-tight">
                        <span className="text-fuchsia-400">A18 chip.</span>
                        <br />
                        <span className="text-fuchsia-300">Hi</span>. IQ.
                    </h2>

                    <p className="mt-3 max-w-sm text-xs text-gray-400">
                        Meet A18, <b className="text-white">custom-built for Apple Intelligence</b>{" "}
                        — and so much more. It jumps two generations ahead of the A16 Bionic
                        chip in iPhone 15. And it powers next-level camera features like
                        Photographic Styles and Camera Control.
                    </p>

                    <div className="mt-6 flex items-center gap-3 text-sm">
                        <span className="font-semibold">Compare with</span>
                        <select className="rounded-full border border-gray-600 bg-black px-3 py-1 text-xs">
                            <option>iPhone 12</option>
                        </select>
                    </div>

                    <div className="mt-4 flex gap-10">
                        <div>
                            <p className="text-[10px]">Up to</p>
                            <p className="text-lg font-bold text-fuchsia-400">60% faster</p>
                            <p className="text-[10px] text-gray-500">6-core CPU</p>
                        </div>
                        <div>
                            <p className="text-[10px]">Up to</p>
                            <p className="text-lg font-bold text-fuchsia-400">2x faster</p>
                            <p className="text-[10px] text-gray-500">5-core GPU</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default A18B