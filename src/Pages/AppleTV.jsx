import React from 'react'
import StreambtnA from '../Components/StreambtnA'
import rockrasm from '../assets/rock.png'
import Free3Months from '../Components/Free3Months'
import SwipeA from '../Components/SwipeA.jsx'
import koprasmlar from '../assets/Container.svg'
import koprasmlar2 from '../assets/Container2.svg'
import SeeFullBtn from '../Components/SeeFullBtn.jsx'
import AppleLogo from '../assets/Figure.svg'
import Devices from '../assets/Devices.svg'
import ManyLogos from '../assets/ManyLogos.svg'
import ManyLogos2 from '../assets/Logosforlg.png'
import ManyApps from '../Components/ManyApps.jsx'
import Questions from '../Components/QuestionsA.jsx'
import AppleMusicStudentA from '../Components/AppleMusicStudentA.jsx'
import AppleExperience from '../Components/AppleExperience.jsx'
import AppleScreen from '../Components/AppleScreen.jsx'
import Footer from '../Components/FooterX.jsx'

const AppleTV = () => {
  return (
    <>
      <section className='bg-black pb-[20px]'>
        <div className="container mx-auto w-[90%] pt-[10px]">
          <div className='flex items-center justify-between'>
            <p className='text-white font-[700] text-[20px]'>
              Apple TV+
            </p>
            <StreambtnA />
          </div>
        </div>
        <img className='w-full pt-[12px] h-[400px] xl:h-[700px]' src={rockrasm} alt="" />
      </section>
      <section className='bg-black pb-[20px]'>
        <div className="container mx-auto w-[90%]">
          <div className='flex items-center flex-col gap-[200px]'>
            <ul className='flex items-center flex-col gap-[50px] xl:mt-[10px]'>
              <li className='text-[28px] xl:text-[45px] font-[700] text-white leading-[1.3] xl:w-[980px] lg:w-[700px]'>
                New Apple Originals
                every month — always ad‑free.
              </li>
              <li className='text-[28px] xl:text-[45px] font-[700] text-white leading-[1.3] xl:w-[980px] lg:w-[700px]'>
                Stream on the Apple TV app on
                Apple devices, smart TVs,
                consoles, or sticks.
              </li>
              <li className='text-[28px] xl:text-[45px] font-[700] text-white leading-[1.3] xl:w-[980px] lg:w-[700px]'>
                Watch in 4K HDR video with
                immersive Spatial Audio.
              </li>
              <li className='text-[28px] xl:text-[45px] font-[700] text-white leading-[1.3] xl:w-[980px] lg:w-[700px]'>
                Share a single subscription with
                up to five people.
              </li>
            </ul>
            <div className='flex items-start flex-col gap-[60px] lg:flex-row xl:flex xl:items-start xl:justify-between xl:w-[980px]'>
              <Free3Months />
            </div>
          </div>
          <div className='mt-[150px]'>
            <SwipeA />
          </div>
        </div>
        <img className='w-full block lg:hidden' src={koprasmlar} alt="" />
        <img className='w-full hidden lg:block' src={koprasmlar2} alt="" />
        <div className='flex items-center justify-center mt-[20px]'>
          <SeeFullBtn />
        </div>
      </section>
      <section className='mt-[100px]'>
        <div className="container mx-auto w-[90%]">
          <div className='flex items-center gap-[40px] flex-col'>
            <ul className='flex items-center gap-[20px] flex-col'>
              <li>
                <img src={AppleLogo} alt="" />
              </li>
              <li className='text-[#1D1D1F] font-[700] text-[28px] lg:text-[40px] text-center leading-[1.2] w-full'>
                Watch Apple TV+ anywhere on
                the Apple TV app.
              </li>
              <li className='text-[#1D1D1F] text-[17px] leading-[1.2] font-[500] text-center lg:w-[420px]'>
                Find the Apple TV app on your favorite Apple devices. Or watch Apple TV+ online at <a className='text-[#0066CC]' href="#">tv.apple.com</a>
              </li>
            </ul>
            <img src={Devices} alt="" />
            <div className='flex items-center gap-[30px] flex-col mt-[10px]'>
              <ul className='flex items-center gap-[20px] flex-col text-center'>
                <li className='text-[28px] lg:text-[40px] text-[#1D1D1F] font-[700] leading-[1.2] lg:w-[450px]'>
                  See it on your smart TV
                  or streaming device.
                </li>
                <li>
                  <a className='text-[#0066CC] text-[17px] font-[600]' href="#">
                    Set up your device
                  </a>
                </li>
              </ul>
              <img className='block lg:hidden' src={ManyLogos} alt="" />
              <img className='hidden lg:block' src={ManyLogos2} alt="" />
            </div>
          </div>
          <Questions />
        </div>
      </section>
      <section>
        <ManyApps />
        <AppleMusicStudentA />
        <div className='lg:flex lg:items-center lg:justify-between gap-[20px]'>
          <AppleExperience />
          <AppleScreen />
        </div>
        <div className='w-full bg-[#f5f5f7]'>
        <div className="py-[15px] mx-auto w-[90%] mt-[20px]">
        <ul className='text-[12px] text-[#0000008F] font-[400] flex items-start flex-col gap-[10px]'>
          <li>
            Not all content is available in 4K or 4K HDR. 4K resolution requires a
            4K‑capable device. Accessing Dolby Atmos features requires a
            Dolby Atmos‑capable system. Playback quality will depend on hardware and
            internet connection.
          </li>
          <li>
            New and qualified returning subscribers only. $9.99/month after free trial.
            Only one offer per Apple ID and only one offer per family if you’re part of a
            Family Sharing group, regardless of the number of devices you or your family
            purchases. This offer is not available if you or your Family have previously
            accepted an Apple TV+ 3 months free or 1 year free offer. Offer good for 3
            months after eligible device activation. Plan automatically renews until
            cancelled. Restrictions and other
          </li>
          <li>
            New subscribers only. $9.99/month after trial. Plan automatically renews until
            cancelled. Terms apply.
          </li>
          <li>
            One subscription per Family Sharing group. Plan automatically renews until
            cancelled.
          </li>
          <li>
            The Apple One free trial includes only services that you are not currently using
            through a free trial or a subscription. Plan automatically renews after trial until
            cancelled. Restrictions and other terms apply.
          </li>
          <li>
            Limited-time offer; offer may end at any time. Free Apple TV+ access for
            students ends when you no longer qualify or do not renew your Apple Music
            Student subscription. Offer good for verified college students only and does
            not extend to a Family Sharing group.
          </li>
          <li>
            Major League Baseball trademarks and copyrights are used with permission of MLB
            Advanced Media, L.P. All rights reserved.
          </li>
        </ul>
        </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default AppleTV