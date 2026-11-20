import React from 'react'

const DesignedB = () => {
    return (
        <div className='max-[100%] w-[85%] mx-auto'>
            <div>
                <section className="bg-white px-6 py-12">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="text-4xl font-bold text-[#1d1d1f]">
                            Designed to make a difference.
                        </h2>

                        <h3 className="mt-12 text-2xl font-bold">Environment</h3>
                        <div className="mt-4 grid gap-6 text-sm text-gray-500 md:grid-cols-3">
                            <p>🌍 All Apple data centers run on 100% renewable energy.</p>
                            <p>♻️ iPhone 16 uses more recycled metals than ever.</p>
                            <p>🌿 The packaging for iPhone 16 is 100% fiber based.</p>
                        </div>
                        <p className="mt-4 text-sm font-semibold text-blue-600">
                            Learn about Apple and the environment ›
                        </p>

                        <h3 className="mt-12 text-2xl font-bold">Privacy</h3>
                        <div className="mt-4 grid gap-6 text-sm text-gray-500 md:grid-cols-3">
                            <p>🔒 Apple Intelligence protects your privacy at every step.</p>
                            <p>🔑 The new Passwords app makes it easier to access your passwords.</p>
                            <p>👤 You can control which contacts to share with an app.</p>
                        </div>
                        <p className="mt-4 text-sm font-semibold text-blue-600">
                            Learn about Apple and privacy ›
                        </p>

                        <h3 className="mt-12 text-2xl font-bold">Accessibility</h3>
                        <div className="mt-4 grid gap-6 text-sm text-gray-500 md:grid-cols-3">
                            <p>👁️ Eye Tracking lets you navigate iPhone with your eyes.</p>
                            <p>🎵 Music Haptics lets you feel the rhythm of songs.</p>
                            <p>🗣️ Vocal Shortcuts trigger actions with custom sounds.</p>
                        </div>
                        <p className="mt-4 text-sm font-semibold text-blue-600">
                            Learn about Apple and accessibility ›
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default DesignedB
