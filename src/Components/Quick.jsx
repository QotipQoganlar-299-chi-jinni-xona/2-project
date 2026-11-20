import React from 'react'

const Quick = () => {
    return (
        <>
            <div className='max-[100%] w-[85%] mx-auto'>
                <div>
                    <section className="bg-[#f0f1fa] px-6 py-16 text-center">
                        <p className="mx-auto max-w-xl text-xl font-semibold text-gray-500">
                            iPhone 16 is built for Apple Intelligence, the personal intelligence
                            system that helps you
                            <span className="text-black">
                                write, express yourself, and get things done effortlessly
                            </span>
                            . With groundbreaking privacy protections, it gives you peace of mind
                            that no one else can access your data — not even Apple.
                        </p>

                        <div className="mx-auto mt-20 flex max-w-3xl gap-6">
                            <p className="flex-1 border-b-2 border-gray-500 pb-3 text-black">
                                Boost your productivity
                            </p>
                            <p className="flex-1 border-b-2 border-gray-300 pb-3 text-gray-500">
                                Express yourself visually
                            </p>
                            <p className="flex-1 border-b-2 border-gray-300 pb-3 text-gray-500">
                                A new era for Siri
                            </p>
                        </div>

                        <p className="mt-10 text-lg font-semibold text-black">
                            Explore new tools that help you write, focus, and communicate.
                        </p>
                    </section>
                </div>

                <section className="bg-[#f0f1fa] px-6 py-10">
                    <div className="mx-auto grid max-w-[960px] gap-6 md:grid-cols-2">
                        <div className="flex flex-col items-center rounded-3xl bg-white p-8 text-center md:row-span-2">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaDLmVIEqERIBdBe3cQ59Nujur3e-d7g1r3DjmXAR0vxCp6xgDdxD_XdE&s=10"
                                alt="Writing tools"
                                className="w-56"
                            />
                            <p className="mt-6 text-gray-500">
                                <b className="text-black">Writing Tools</b> can proofread your
                                text and rewrite different versions until the tone and wording are
                                just right, and summarize selected text with a tap. They're
                                available nearly everywhere you write, including third-party apps.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white p-8 text-center">
                            <p className="mx-auto max-w-sm text-gray-500">
                                Just hit record in the Notes or Phone app to capture audio
                                recordings and transcripts. Apple Intelligence generates{" "}
                                <b className="text-black">summaries</b> of your transcripts, so you
                                can get the most important info at a glance.
                            </p>

                            <div className="mt-10 flex items-center justify-between rounded-full bg-gray-300 px-6 py-3">
                                <span className="text-gray-500">|||| ||| ||||</span>
                                <span className="text-gray-500">06:54</span>
                                <span className="h-9 w-9 rounded-full bg-red-500 ring-4 ring-white" />
                            </div>
                        </div>

                        <div className="flex flex-col items-center overflow-hidden rounded-3xl bg-white px-8 pt-8 text-center">
                            <p className="mx-auto max-w-sm text-gray-500">
                                <b className="text-black">Priority messages in Mail</b> elevate
                                time-sensitive messages to the top of your inbox — like an
                                invitation that has a deadline today or a check-in reminder for
                                your flight this afternoon.
                            </p>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaDLmVIEqERIBdBe3cQ59Nujur3e-d7g1r3DjmXAR0vxCp6xgDdxD_XdE&s=10"
                                alt="Mail"
                                className="mt-8 w-44"
                            />
                        </div>
                    </div>
                </section>

            </div>



        </>
    )
}

export default Quick