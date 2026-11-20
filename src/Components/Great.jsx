import React from 'react'

const Great = () => {
    return (
        <>
            <div className='max-[100%] w-[85%] mx-auto'>
                <div>
                    <section className="bg-gradient-to-b from-[#f0f1fa] to-white px-6 py-16 text-center">
                        <div className="text-6xl">🔒</div>

                        <h2 className="mx-auto mt-8 max-w-xl text-4xl font-bold text-[#1d1d1f] sm:text-5xl">
                            Great powers come with great privacy.
                        </h2>

                        <div className="mx-auto mt-12 grid max-w-3xl gap-10 text-left text-lg text-gray-500 md:grid-cols-2">
                            <p>
                                Apple Intelligence is designed to
                                <b className="text-black">protect your privacy at every step</b>.
                                It's integrated into the core of iPhone through on-device processing.
                                So it's aware of your personal information without collecting your
                                personal information.
                            </p>
                            <p>
                                And with
                                <b className="text-black">groundbreaking Private Cloud Compute</b>,
                                Apple Intelligence can draw on larger Apple-designed server-based
                                models, running on Apple silicon, to handle more complex requests for
                                you while protecting your privacy.
                            </p>
                        </div>

                        <a
                            href=""
                            className="mt-12  text-base font-medium text-blue-600 hover:underline"
                        >
                            Learn more about Apple Intelligence ›
                        </a>
                    </section>
                </div>
            </div>




        </>
    )
}

export default Great