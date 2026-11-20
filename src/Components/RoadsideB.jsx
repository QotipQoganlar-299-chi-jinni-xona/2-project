import React from 'react'
import img2 from '../assets/f41e6dc5c70c3e8f9d0382c34877cc6c42fbe6ed.jpg'
const RoadsideB = () => {
  return (
    <div className='max-[100%] w-[85%] mx-auto'>
      <div>
        <section className="bg-gray-100 px-6 py-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-[#1d1d1f]">
              No signal?
              <br />
              There's a satellite for that.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-sm text-gray-500">
              When you don't have cell service or Wi-Fi, iPhone 16 can{" "}
              <b className="text-black">connect to a satellite</b>, so you can stay
              in touch or get the assistance you need.
            </p>
          </div>

          <div className="mx-auto mt-16 flex max-w-4xl flex-col items-start gap-10 md:flex-row">
            <div className="flex-1 space-y-6 text-sm text-gray-500">
              <p>
                <b className="text-black">Messages via satellite</b> lets you send
                and receive messages and Tapbacks when you're off the grid, right
                from the Messages app.
              </p>
              <p>
                <b className="text-black">Roadside Assistance via satellite</b> can
                get you help for things like a flat tire or a dead car battery.
              </p>
              <p className="font-semibold text-blue-600">
                See how Roadside Assistance works ›
              </p>
              <p className="text-base font-bold text-black">
                Roadside Assistance via satellite is included for free for two
                years with iPhone 16
              </p>
            </div>

            <div className="flex-1">
              <img
                src={img2}
                alt="iPhone satellite"
                className="mx-auto"
              />
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-10 text-sm text-gray-500 md:grid-cols-2">
            <div className="space-y-4">
              <p>
                iPhone also has vital safety features that can help save lives. You
                can use iPhone to{" "}
                <b className="text-black">text emergency services over satellite</b>.
              </p>
              <p className="font-semibold text-blue-600">
                See how Emergency SOS via satellite works ›
              </p>
            </div>
            <p>
              <b className="text-black">Crash Detection</b> uses hardware sensors
              and advanced motion algorithms to detect a severe car crash, then call
              911 and notify your emergency contacts.
            </p>
          </div>

          <hr className="mx-auto mt-12 max-w-4xl border-gray-300" />

          <p className="mx-auto mt-8 max-w-4xl text-sm text-gray-500">
            When you're within range and make a 911 emergency call, iPhone 16 gives
            you the option to start sharing a live feed with 911 responders for{" "}
            <b className="text-black">quick and effective assistance</b>.
          </p>
        </section>
      </div>
    </div>
  )
}

export default RoadsideB
