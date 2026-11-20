import React from 'react'

const From = () => {
    return (

        <>
            <div>
                <div className=' max-[100%] w-[85%] mx-auto'>
                    <div className=' flex gap-[10%] justify-center'>
                        <h1 className='text-black py-[13px]'>IPhone 16</h1>
                        <p className='text-black py-[13px]'>Overview</p>
                        <p className='text-black py-[13px] '>Switch from Android to iPhone</p>
                        <p className='text-black py-[13px]'>Tech Specs</p>
                        <button className="rounded-full bg-amber-400 px-8 py-[13px] text-lg font-semibold text-black shadow-lg shadow-amber-400/40 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-xl hover:shadow-amber-400/60 active:translate-y-0 active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-300/60">
                            View pricing
                        </button>
                    </div>
                </div>
            </div>
            <section className="bg-gradient-to-b from-[#16134a] via-[#898ce0] via-60% to-white py-[15px]">
                <div className="mx-auto max-w-[1152px] px-6 pt-10 text-center">
                    <p className="text-2xl font-semibold text-white">iPhone 16</p>

                    <h2
                        className="mt-4 bg-gradient-to-r from-sky-300 via-fuchsia-400 to-amber-300 bg-clip-text text-4xl font-semibold text-transparent sm:text-6xl"
                        style={{ filter: "drop-shadow(0 0 14px rgba(160,140,255,0.7))" }}
                    >
                        Hello, Apple Intelligence.
                    </h2>

                    <img
                        src="https://cdn.iphones.ru/wp-content/uploads/2026/01/iphone-16-design.jpg"
                        alt="iPhone 16"
                        className="mx-auto mt-10 w-full "
                    />
                </div>

                <div className="px-6 pb-16 pt-10 text-center">
                    <button className="rounded-full bg-[#0a5bdc] px-7 py-3 text-lg text-white transition hover:bg-[#0848b0]">
                        View pricing
                    </button>

                    <div className="mt-6 space-y-1.5 text-[17px] text-[#6e6e73]">
                        <p className="font-semibold text-black">
                            From $799 or $33.29/mo. for 24 mo.
                            <sup className="underline">1</sup>
                        </p>
                        <p className="font-medium">Pre-order starting at 5:00 a.m. PDT on 9.13</p>
                        <p>Available starting 9.20</p>
                        <p>
                            Apple Intelligence coming this fall
                            <sup className="underline">2</sup>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default From